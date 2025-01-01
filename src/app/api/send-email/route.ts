// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail', // Change if using a different email provider
//       auth: {
//         user: 'byteblastersdm@gmail.com',
//         pass: 'SdmCh@786',
//       },
//     });

//     const mailOptions = {
//       from: 'byteblastersdm@gmail.com',
//       to: email,
//       subject: `New Contact Form Submission from ${name}`,
//       text: message,
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.log("email error",error);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// }


// src/app/api/send-email/route.ts
import { NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function POST(req: Request,  res: NextApiResponse) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Setup the transporter for Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'saddam.irake.786@gmail.com', // replace with your email
      pass: 'tapw ekej qlfy meex',   // replace with your email password
    },
  });

  // console.log('Transporter created:', transporter, name, email, message);
  // Define the email options
  const mailOptions = {
    from: email,
    to: 'saddam.irake.786@gmail.com', // replace with recipient email
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.log("email error", error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
