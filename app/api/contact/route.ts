import { NextResponse } from 'next/server';
import { isSanityConfigured, writeClient } from '@/lib/sanity.client';

interface ContactRequestBody {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  language?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;
    const { fullName, email, phone, subject, message, language = 'en' } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: language === 'am' ? 'እባክዎ ሙሉ ስምዎን፣ ኢሜይልዎን እና መልእክትዎን ያስገቡ።' : 'Please provide your name, email, and message.',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: language === 'am' ? 'እባክዎ ትክክለኛ የኢሜይል አድራሻ ያስገቡ።' : 'Please provide a valid email address.',
        },
        { status: 400 }
      );
    }

    const hasWriteToken = Boolean(process.env.SANITY_API_WRITE_TOKEN);

    if (isSanityConfigured && hasWriteToken) {
      await writeClient.create({
        _type: 'contactMessage',
        status: 'new',
        fullName: String(fullName).trim(),
        email: String(email).trim().toLowerCase(),
        phone: phone ? String(phone).trim() : '',
        subject: subject || 'general',
        message: String(message).trim(),
        language: language === 'am' ? 'am' : 'en',
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          language === 'am'
            ? 'መልእክትዎ ደርሶናል! የANAWASS ቡድን በአጭር ጊዜ ውስጥ ምላሽ ይሰጥዎታል።'
            : 'Your message has been received! The ANAWASS team will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred while submitting your message. Please try again.',
      },
      { status: 500 }
    );
  }
}
