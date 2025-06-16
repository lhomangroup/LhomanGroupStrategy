import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import type { InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      industry: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons sous 24h pour planifier votre consultation gratuite.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark">Prêt à Transformer Votre Entreprise ?</h2>
          <p className="text-xl text-light max-w-3xl mx-auto">
            Discutons de vos défis stratégiques et découvrons ensemble comment nous pouvons vous accompagner vers le succès.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center">
                <Phone className="text-primary-blue h-6 w-6" />
              </div>
              <div>
                <p className="text-light">Téléphone</p>
                <p className="text-dark font-semibold text-lg">Mobile : (+33) 7 43 16 82 35</p>
                <p className="text-dark font-semibold text-lg">Fixe : (+33) 9 74 06 41 23</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center">
                <Mail className="text-primary-blue h-6 w-6" />
              </div>
              <div>
                <p className="text-light">Email</p>
                <p className="text-dark font-semibold text-lg">contact@lhomangroup.fr</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center">
                <MapPin className="text-primary-blue h-6 w-6" />
              </div>
              <div>
                <p className="text-light">Adresse</p>
                <p className="text-dark font-semibold text-lg">187 Rue Colbert 92700 Colombes, France</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold text-dark mb-6">Demandez une consultation gratuite</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-light">Prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-light">Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Dupont" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-light">Courriel professionnel</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jean.dupont@entreprise.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-light">Entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de votre entreprise" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-light">Secteur d'activité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre secteur" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="technology">Technologie</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Santé</SelectItem>
                          <SelectItem value="manufacturing">Industrie</SelectItem>
                          <SelectItem value="retail">Commerce</SelectItem>
                          <SelectItem value="consulting">Conseil</SelectItem>
                          <SelectItem value="education">Éducation</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-light">Décrivez vos besoins</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez clairement votre situation et vos objectifs..."
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary-blue text-white py-4 rounded-lg hover:opacity-90 transition-all duration-200 font-semibold text-lg"
                >
                  {mutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
                
                <p className="text-sm text-light text-center">
                  Nous vous recontacterons sous 24h pour planifier votre consultation gratuite
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}