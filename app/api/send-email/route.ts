import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateProjectInquiryEmail } from '@/lib/emailTemplate';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.user?.replace(/"/g, '') || '',
        pass: process.env.pass?.replace(/"/g, '') || '',
      },
    });

    const mailOptions = {
      from: process.env.user?.replace(/"/g, '') || '',
      to: process.env.user?.replace(/"/g, '') || '',
      subject: `🚀 New Project Inquiry from ${formData.name}`,
      html: generateProjectInquiryEmail(formData),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}
