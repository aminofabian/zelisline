interface ProjectInquiryData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  projectDetails?: string;
}

export const generateProjectInquiryEmail = (data: ProjectInquiryData) => {
  const { name, email, phone, company, message, projectDetails } = data;
  const details = message || projectDetails;
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry - Zelisline</title>
        <style>
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background-color: #f7fafc;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #ff6b2c 0%, #ff8f50 100%);
            color: white;
            padding: 32px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header p {
            margin: 8px 0 0;
            opacity: 0.9;
            font-size: 16px;
          }
          .logo {
            margin-bottom: 20px;
          }
          .logo img {
            height: 40px;
          }
          .content {
            padding: 32px 24px;
          }
          .field {
            margin-bottom: 24px;
            border-bottom: 1px solid #edf2f7;
            padding-bottom: 16px;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: 600;
            color: #ff6b2c;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          .value {
            color: #2d3748;
            font-size: 16px;
            line-height: 1.6;
          }
          .message-box {
            background: #fff8f6;
            border-left: 4px solid #ff6b2c;
            padding: 20px;
            border-radius: 8px;
            margin-top: 24px;
          }
          .message-box .label {
            color: #ff6b2c;
            margin-bottom: 12px;
          }
          .message-box .value {
            white-space: pre-line;
            color: #4a5568;
          }
          .footer {
            text-align: center;
            padding: 24px;
            background: #f8fafc;
            border-top: 1px solid #edf2f7;
          }
          .footer p {
            margin: 4px 0;
            color: #718096;
            font-size: 14px;
          }
          .contact-info {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid #edf2f7;
            text-align: center;
            font-size: 14px;
            color: #718096;
          }
          .contact-info a {
            color: #ff6b2c;
            text-decoration: none;
          }
          .highlight {
            color: #ff6b2c;
            font-weight: 600;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background: #ff6b2c;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 16px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">
              <!-- Replace with your actual logo URL -->
              <img src="https://zelisline.com/logo.png" alt="Zelisline" />
            </div>
            <h1>New Project Inquiry</h1>
            <p>We've received a new message from your website</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">From</div>
              <div class="value highlight">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">
                <a href="mailto:${email}" style="color: #ff6b2c; text-decoration: none;">
                  ${email}
                </a>
              </div>
            </div>
            
            ${phone ? `
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">
                <a href="tel:${phone}" style="color: #ff6b2c; text-decoration: none;">
                  ${phone}
                </a>
              </div>
            </div>
            ` : ''}
            
            ${company ? `
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            
            <div class="message-box">
              <div class="label">Message</div>
              <div class="value">${details?.replace(/\n/g, '<br>') || ''}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This is an automated message from your website's contact form.</p>
            <p><strong>Zelisline</strong> - Digital Solutions for Modern Businesses</p>
            
            <div class="contact-info">
              <p>Need help? Contact us:</p>
              <p>
                Email: <a href="mailto:zelisline@gmail.com">zelisline@gmail.com</a><br>
                Phone: <a href="tel:+254797356380">+254 797 356 380</a>
              </p>
              <a href="https://zelisline.com" class="button">Visit Our Website</a>
            </div>
            
            <p style="margin-top: 24px; font-size: 12px; color: #a0aec0;">
              &copy; ${new Date().getFullYear()} Zelisline. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};
