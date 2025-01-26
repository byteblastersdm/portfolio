import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        // Validate request data
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Use your email provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Email content
        const mailOptions = {
            from: email, // User's email
            to: process.env.RECIPIENT_EMAIL, // Your recipient email address
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Error sending email', details: error.message }, { status: 500 });
    }
}
