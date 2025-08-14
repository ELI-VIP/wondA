import dotenv from 'dotenv';
dotenv.config(); // ✅ this is needed to load .env variables

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOtpEmail(email, otp) {
  try {
    const response = await resend.emails.send({
      from: 'Your App <your@email.com>',
      to: email,
      subject: 'Your OTP Code',
      html: `<p>Your OTP code is: <strong>${otp}</strong></p>`
    });
    return response;
  } catch (error) {
    console.error("❌ Failed to send OTP:", error);
    throw error;
  }
}
