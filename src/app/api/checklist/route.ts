import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

const CHECKLIST_URL =
  "https://docs.google.com/spreadsheets/d/1rMtFEI1qJMJUlqNy0bj-HA5SbvLzAjpUXTAULY3v1cM/edit?usp=sharing";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, website } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Save lead to Supabase
    const supabase = getSupabase();
    const { error: dbError } = await supabase.from("checklist_leads").insert({
      name,
      email,
      phone: phone || null,
      website: website || null,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // Send email with checklist
    const resend = getResend();
    await resend.emails.send({
      from: "Akravo <info@akravo.com>",
      to: email,
      subject: "Your Agentic Commerce Checklist (27 Steps)",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h1 style="font-size: 24px; color: #111;">Hi ${name},</h1>
          <p style="font-size: 16px; line-height: 1.6;">
            Thanks for requesting the Agentic Commerce Checklist. Here is your copy:
          </p>
          <a href="${CHECKLIST_URL}" style="display: inline-block; background: #6214d9; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: 600; margin: 24px 0;">
            Open Checklist
          </a>
          <p style="font-size: 14px; line-height: 1.6; color: #666;">
            This checklist covers 27 steps to activate AI Shopping for your brand, from product data setup to ChatGPT checkout integration.
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #666;">
            If you want us to implement this for you, book a call at
            <a href="https://cal.com/fabianvantil/akravo-discovery" style="color: #6214d9;">cal.com/fabianvantil/akravo-discovery</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
          <p style="font-size: 12px; color: #999;">
            Akravo - AI SEO & LLM Optimisation Agency
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Checklist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
