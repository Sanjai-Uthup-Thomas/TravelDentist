import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    replyTo: email, 
    subject: `Message from ${name}`,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #fff0f5; padding: 20px; color: #333;">
      <table width="100%" style="max-width: 600px; margin: auto; background: white; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #F875AA; border-top-left-radius: 10px; border-top-right-radius: 10px;">
            <h1 style="color: white; margin: 0;">Travel Dentist</h1>
            <p style="color: #fff;">Contact Form Submission</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <h3 style="color: #F875AA; margin-top: 0;">New Message Received</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #F875AA;">${message}</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; font-size: 12px; color: #777; text-align: center;">
            This message was sent from your website's contact form.<br />
            &copy; 2025 Travel Dentist. All rights reserved.
          </td>
        </tr>
      </table>
    </div>
  `
  
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
