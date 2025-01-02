import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { name, email, message } = await req.json();

    // Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Set up the transporter for Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'saddam.irake.786@gmail.com', // Replace with your email
        pass: 'lmfr wgvv nnea lonq',    // Replace with your email app password
      },
    });

    // Define the email options
    const mailOptions = {
      from: email, // Replace with your email
      to: 'saddam.irake.786@gmail.com', // Replace with the recipient's email
      subject: `New Contact Form Submission from ${name} (${email})`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    // Respond with failure
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
