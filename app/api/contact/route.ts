import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const body = await req.json();
    const { name, company, email, phone, service, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      // If honeypot is filled, it's a bot. Return success to trick it.
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    }

    // Required fields validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // Email format validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Sanitize HTML (basic escaping)
    const sanitize = (str: string) => str ? str.replace(/</g, "&lt;").replace(/>/g, "&gt;") : '';
    const safeName = sanitize(name);
    const safeCompany = sanitize(company);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeService = sanitize(service);
    const safeMessage = sanitize(message);

    const htmlContent = `
      <h2>Yeni İletişim Formu Talebi</h2>
      <p><strong>Ad Soyad:</strong> ${safeName}</p>
      <p><strong>Marka / İşletme:</strong> ${safeCompany || '-'}</p>
      <p><strong>E-posta:</strong> ${safeEmail}</p>
      <p><strong>Telefon / WhatsApp:</strong> ${safePhone || '-'}</p>
      <p><strong>Hizmet Seçimi:</strong> ${safeService || '-'}</p>
      <p><strong>Mesaj / Proje Detayı:</strong></p>
      <p>${safeMessage.replace(/\n/g, '<br>')}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL as string,
      to: process.env.CONTACT_TO_EMAIL as string,
      replyTo: safeEmail,
      subject: `Yeni iletişim formu talebi: ${safeName}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Contact Error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
