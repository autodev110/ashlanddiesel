import { NextRequest, NextResponse } from "next/server";

// PLACEHOLDER email address — Dan will replace with the real one
const NOTIFICATION_EMAIL = "placeholder@ashlanddiesel.com";

export async function POST(req: NextRequest) {
  const { name, email, phone, company, details } = await req.json();

  // Basic validation
  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 }
    );
  }

  const quoteData = { name, email, phone, company, details };

  try {
    // Step 1: Send email notification
    // TODO: Replace with actual email service (e.g., Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "quotes@ashlanddiesel.com",
    //   to: NOTIFICATION_EMAIL,
    //   subject: `New Quote Request from ${name}`,
    //   html: `
    //     <h2>New Quote Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Company:</strong> ${company || "N/A"}</p>
    //     <p><strong>Details:</strong> ${details || "N/A"}</p>
    //   `,
    // });
    console.log(`Email would be sent to: ${NOTIFICATION_EMAIL}`, quoteData);

    // Step 2: Forward to AI agent for processing
    const baseUrl = req.nextUrl.origin;
    await fetch(`${baseUrl}/api/aiAgent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quoteData),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Failed to process quote request." },
      { status: 500 }
    );
  }
}
