import { NextRequest, NextResponse } from "next/server";

// PLACEHOLDER: Dan will add captcha verification using DnD account credentials
export async function POST(req: NextRequest) {
  const { token } = await req.json();

  // TODO: Verify captcha token with provider (e.g., reCAPTCHA / hCaptcha)
  // Example:
  // const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: `secret=YOUR_SECRET_KEY&response=${token}`,
  // });
  // const data = await verifyRes.json();
  // if (!data.success) {
  //   return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
  // }

  console.log("Captcha token received:", token);

  return NextResponse.json({ success: true });
}
