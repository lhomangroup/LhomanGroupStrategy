import { MailService } from '@sendgrid/mail';

const mailService = new MailService();

// Initialize SendGrid only if API key is available
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string[];
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured - email sending disabled');
    return false;
  }
  
  try {
    const message = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };
    
    await mailService.send(message);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function createContactNotificationEmail(inquiry: any): EmailParams {
  const htmlContent = `
    <h2>Nouvelle demande de consultation - Lhoman Group Stratégie</h2>
    
    <h3>Informations du contact :</h3>
    <ul>
      <li><strong>Nom :</strong> ${inquiry.firstName} ${inquiry.lastName}</li>
      <li><strong>Email :</strong> ${inquiry.email}</li>
      <li><strong>Entreprise :</strong> ${inquiry.company}</li>
      <li><strong>Secteur d'activité :</strong> ${inquiry.industry}</li>
    </ul>
    
    <h3>Message :</h3>
    <p>${inquiry.message}</p>
    
    <p><em>Cette demande a été envoyée depuis le site web Lhoman Group Stratégie le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}.</em></p>
  `;

  const textContent = `
Nouvelle demande de consultation - Lhoman Group Stratégie

Informations du contact :
- Nom : ${inquiry.firstName} ${inquiry.lastName}
- Email : ${inquiry.email}
- Entreprise : ${inquiry.company}
- Secteur d'activité : ${inquiry.industry}

Message :
${inquiry.message}

Cette demande a été envoyée depuis le site web Lhoman Group Stratégie le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}.
  `;

  return {
    to: ['lhomangroup@gmail.com', 'contact@lhomangroup.fr'],
    from: 'noreply@sendgrid.com',
    subject: `Nouvelle demande de consultation - ${inquiry.firstName} ${inquiry.lastName}`,
    text: textContent,
    html: htmlContent,
  };
}