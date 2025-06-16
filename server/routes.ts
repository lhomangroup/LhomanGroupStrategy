import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { sendEmail, createContactNotificationEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send email notification
      try {
        const emailParams = createContactNotificationEmail(inquiry);
        const emailSent = await sendEmail(emailParams);
        
        if (emailSent) {
          console.log('Email notification sent successfully');
        } else {
          console.warn('Email notification failed to send');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, id: inquiry.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Erreur lors de l'envoi du formulaire. Veuillez vérifier vos données." 
      });
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
