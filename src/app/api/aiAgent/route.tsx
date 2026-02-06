import { NextRequest, NextResponse } from "next/server";

// PLACEHOLDER: Dan will fill in the AI agent logic
export async function POST(req: NextRequest) {
  const body = await req.json();

  // TODO: Implement AI agent processing
  // This route receives the quote form data after submission
  // and can process it with an AI agent for auto-responses, categorization, etc.

  console.log("AI Agent received quote data:", body);

  return NextResponse.json({ success: true });
}
