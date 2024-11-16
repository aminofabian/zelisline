import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
});

// Admin email template
const getAdminEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #f97316, #fb923c); padding: 20px; color: white; border-radius: 8px; }
    .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px; }
    .detail { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 0.9em; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0">New Project Inquiry</h1>
      <p style="margin:5px 0 0">Received on ${new Date().toLocaleString()}</p>
    </div>
    <div class="content">
      <div class="detail">
        <strong>Name:</strong> ${data.name}
      </div>
      <div class="detail">
        <strong>Email:</strong> ${data.email}
      </div>
      <div class="detail">
        <strong>Phone:</strong> ${data.phone || 'Not provided'}
      </div>
      <div class="detail">
        <strong>Project Description:</strong><br>
        ${data.projectDescription}
      </div>
      <div class="detail">
        <strong>Budget Range:</strong> ${data.budget}
      </div>
      <div class="detail">
        <strong>Desired Timeframe:</strong> ${data.timeframe}
      </div>
    </div>
    <div class="footer">
      <p>This inquiry was submitted through the Zelisline website project inquiry form.</p>
    </div>
  </div>
</body>
</html>
`;

// Client email template
const getClientEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #f97316, #fb923c); padding: 20px; color: white; border-radius: 8px; text-align: center; }
    .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px; }
    .summary { margin: 20px 0; padding: 15px; background: white; border-radius: 4px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 0.9em; color: #666; text-align: center; }
    .social-links { margin-top: 15px; }
    .social-links a { color: #f97316; text-decoration: none; margin: 0 10px; }
    .contact-info { background: white; padding: 15px; border-radius: 4px; margin: 20px 0; }
    .contact-info p { margin: 5px 0; }
    .contact-info a { color: #f97316; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin:0">Thank You for Choosing Zelisline!</h1>
    </div>
    <div class="content">
      <p>Dear ${data.name},</p>
      <p>Thank you for submitting your project inquiry with Zelisline. We're excited about the possibility of working with you!</p>
      
      <div class="summary">
        <h3>Your Project Details:</h3>
        <p><strong>Project Description:</strong><br>${data.projectDescription}</p>
        <p><strong>Budget Range:</strong> ${data.budget}</p>
        <p><strong>Desired Timeframe:</strong> ${data.timeframe}</p>
      </div>

      <p>What happens next?</p>
      <ul>
        <li>Our team will carefully review your project requirements</li>
        <li>We'll prepare a customized proposal for your needs</li>
        <li>You'll hear from us within 24 hours with our initial assessment</li>
      </ul>

      <div class="contact-info">
        <h3>Need to reach us?</h3>
        <p><strong>Email:</strong> <a href="mailto:zelisline@gmail.com">zelisline@gmail.com</a></p>
        <p><strong>Phone/WhatsApp:</strong> <a href="tel:+254714282874">+254 714 282 874</a></p>
        <p><strong>Website:</strong> <a href="https://zelisline.com">zelisline.com</a></p>
      </div>

      <p>Feel free to reach out if you have any questions or need to provide additional information about your project.</p>
    </div>
    <div class="footer">
      <p> ${new Date().getFullYear()} Zelisline. All rights reserved.</p>
      <div class="social-links">
        <a href="https://facebook.com/zelisline">Facebook</a> |
        <a href="https://twitter.com/zelisline">Twitter</a> |
        <a href="https://instagram.com/zelisline">Instagram</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, projectDescription, budget, timeframe } = data;

    if (!name || !email || !projectDescription || !budget || !timeframe) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send email to admin
    const adminMailOptions = {
      from: process.env.user,
      to: process.env.user,
      subject: 'New Project Inquiry from Website',
      html: getAdminEmailTemplate(data)
    };

    // Send email to client
    const clientMailOptions = {
      from: process.env.user,
      to: email,
      subject: 'Thank You for Your Project Inquiry - Zelisline',
      html: getClientEmailTemplate(data)
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}