import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, subject, message } =
      await request.json();

    // Validate data
    if (!firstName || !lastName || !email || !subject || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    // Setup SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `Midpoint Art <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      text: `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return new Response("Error sending email", { status: 500 });
  }
}
