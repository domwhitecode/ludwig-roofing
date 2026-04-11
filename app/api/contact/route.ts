import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  const { name, email, phone, address, message, website } = parsed.data;

  if (website) {
    return NextResponse.json({ ok: true });
  }

  const to = process.env.CONTACT_TO_EMAIL || "Eludwig1126@gmail.com";
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `New quote request from ${name}`;
  const text =
    `New request from the Ludwig's Roofing website:\n\n` +
    `Name:    ${name}\n` +
    `Email:   ${email}\n` +
    `Phone:   ${phone}\n` +
    `Address: ${address}\n` +
    `Message: ${message || "(none)"}\n`;

  if (!apiKey) {
    console.log("[contact] RESEND_API_KEY missing — submission not emailed:");
    console.log(text);
    return NextResponse.json({ ok: true, simulated: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Ludwig's Roofing <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject,
      text,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Could not send message. Please call us instead." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not send message. Please call us instead." },
      { status: 500 },
    );
  }
}
