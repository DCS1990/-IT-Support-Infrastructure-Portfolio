import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact Form API Route
 * Sends email via Resend (https://resend.com – free tier: 3,000 emails/month).
 *
 * Required environment variable:
 *   RESEND_API_KEY  – your Resend API key
 *
 * Optional:
 *   CONTACT_EMAIL   – recipient email (defaults to Chaminda's email)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || 'chaminda.d.sampath@gmail.com';

    // If no API key is configured, log and return graceful dev-mode success
    if (!resendApiKey) {
      console.info('[Contact Form – Dev Mode] No RESEND_API_KEY set. Message logged:\n', {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json({ success: true });
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #1e3a68; margin-bottom: 4px;">New Portfolio Inquiry</h2>
        <p style="color: #64748b; font-size: 13px; margin-bottom: 20px;">Received via chaminda-sampath.com contact form</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #334155; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #334155;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #334155;">Subject</td>
            <td style="padding: 8px 0; color: #0f172a;">${subject?.trim() || '(not specified)'}</td>
          </tr>
        </table>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
        <h4 style="color: #334155; margin-bottom: 8px;">Message</h4>
        <p style="color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="font-size: 12px; color: #94a3b8;">Reply directly to this email to respond to ${name}.</p>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio Inquiry: ${subject?.trim() || 'New Message from ' + name}`,
        html: htmlBody,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('Resend API error:', errData);
      throw new Error((errData as any).message || 'Email service error');
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[Contact API] Error:', error?.message);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try emailing directly.' },
      { status: 500 }
    );
  }
}
