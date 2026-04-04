import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message, consent } = body;

    if (!name || !email || !subject || !message || !consent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Integrate with Resend API or your email service
    // For now, just log it (in production, send actual email)
    console.log("Contact form submission:", { name, email, company, phone, subject, message });

    // Simulate email sending
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'ETC Polska <noreply@etc-transport.com>',
    //   to: 'info@etc-transport.com',
    //   subject: `Contact: ${subject}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p>
    //          <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //          <hr>
    //          <p>${message}</p>`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
