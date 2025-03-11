import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Burada email göndərmə və ya verilənlər bazasına yazma əməliyyatları edilə bilər
    // Nümunə üçün sadəcə məlumatları console-a çıxaradıq
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Mesajınız uğurla göndərildi!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Xəta baş verdi. Zəhmət olmasa bir az sonra yenidən cəhd edin.' },
      { status: 500 }
    );
  }
} 