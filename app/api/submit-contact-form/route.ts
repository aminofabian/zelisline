// app/api/submit-contact-form/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "zelisline@gmail.com",
    pass: "tilz ssmi nhbc atir",
  },
});

export async function POST(request: Request) {
  try {
    const { role, name, service, email, message } = await request.json();

    if (!role || !name || !service || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const getRoleDescription = (role: string) => {
      switch (role) {
        case 'business':
          return 'Business Client';
        case 'individual':
          return 'Individual Client';
        case 'agency':
          return 'Agency Partner';
        default:
          return 'Client';
      }
    };

    // Admin notification email template
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #f97316, #fb923c); color: white; padding: 20px; border-radius: 8px; }
            .content { padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #f97316; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
              <p>You have received a new inquiry from a ${getRoleDescription(role)}.</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Client Type:</span> ${getRoleDescription(role)}
              </div>
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Service:</span> ${service}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Message:</span><br>
                ${message}
              </div>
              <div class="field">
                <span class="label">Timestamp:</span> ${new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Client confirmation email template
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #f97316, #fb923c); color: white; padding: 20px; border-radius: 8px; }
            .content { padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 20px; }
            .footer { margin-top: 20px; padding: 20px; text-align: center; }
            .contact-info { margin-top: 15px; }
            .social-links { margin-top: 15px; }
            .social-links a { color: #f97316; text-decoration: none; margin: 0 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Choosing Zelisline!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for your interest in our ${service.toLowerCase()} services! We're excited about the possibility of working together on your project.</p>
              <p>Our team will carefully review your requirements and get back to you within 24-48 hours with a detailed response.</p>
              <p>Here's a summary of your inquiry:</p>
              <ul>
                <li><strong>Service Requested:</strong> ${service}</li>
                <li><strong>Project Details:</strong> ${message}</li>
              </ul>
              <p>If you have any immediate questions or would like to provide additional information, please don't hesitate to reach out using the contact details below.</p>
              <div class="contact-info">
                <p><strong>Contact Information:</strong></p>
                <p>Email: zelisline@gmail.com</p>
                <p>Phone: +254 714 282 874</p>
                <p>Website: zelisline.com</p>
              </div>
            </div>
            <div class="footer">
              <p>Best regards,<br>The Zelisline Team</p>
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      // Send email to admin
      await transporter.sendMail({
        from: "zelisline@gmail.com",
        to: "zelisline@gmail.com",
        subject: `New ${service} Inquiry - ${getRoleDescription(role)}`,
        html: adminEmailHtml,
      });

      // Send confirmation email to client
      await transporter.sendMail({
        from: "zelisline@gmail.com",
        to: email,
        subject: 'Thank You for Contacting Zelisline',
        html: clientEmailHtml,
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Thank you! We have received your inquiry and will get back to you soon.' 
      }, { status: 200 });
    } catch (error) {
      console.error('Email sending error:', error);
      return NextResponse.json({ 
        error: 'Failed to send email. Please try again or contact us directly at zelisline@gmail.com' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ 
      error: 'Something went wrong. Please try again or contact us directly at zelisline@gmail.com' 
    }, { status: 500 });
  }
}