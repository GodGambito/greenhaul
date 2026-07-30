import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, service, location, details } = body;

    if (!name || !email || !service || !details) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_EMAIL || process.env.RECIPIENT_EMAIL || "greenhaul.removal@gmail.com";
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    const emailSubject = `🚨 New Quote Request: ${service} from ${name}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fbf8; border: 1px solid #e2ece0; border-radius: 12px; padding: 24px;">
        <div style="background: #15803d; color: #ffffff; padding: 18px 24px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="margin: 0; font-size: 22px;">GreenHaul Removal Services</h2>
          <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.9;">New Online Quote Request</p>
        </div>
        <div style="padding: 24px; color: #1f2937;">
          <h3 style="color: #15803d; margin-top: 0;">Client Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #15803d; text-decoration: none;">${phone || "Not provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #15803d; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Service Requested:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><span style="background: #dcfce7; color: #166534; padding: 4px 10px; border-radius: 6px; font-weight: bold;">${service}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Location / City:</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${location || "Not specified"}</td>
            </tr>
          </table>

          <h3 style="color: #15803d; margin-top: 24px;">Job Description & Details</h3>
          <div style="background: #ffffff; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${details}
          </div>

          <div style="margin-top: 30px; text-align: center; font-size: 13px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 16px;">
            Sent from GreenHaul Website Contact Form • Target: ${recipient}
          </div>
        </div>
      </div>
    `;

    // Check if SMTP is configured
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"GreenHaul Web" <${smtpUser}>`,
        to: recipient,
        replyTo: email,
        subject: emailSubject,
        html: htmlContent,
      });

      console.log(`[GreenHaul API] Email sent to ${recipient} via Nodemailer`);
    } else {
      console.log(`[GreenHaul API] SMTP credentials not set in env. Simulated email delivery to ${recipient}:`, {
        name,
        email,
        phone,
        service,
        location,
        details,
      });
    }

    return NextResponse.json(
      { success: true, message: "Quote request received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GreenHaul API Error]:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
