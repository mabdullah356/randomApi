import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const otp = generateOTP();

    // Save OTP in DB or Redis here
    // Example:
    // await db.userOtp.create({
    //   data: {
    //     email,
    //     otp,
    //     expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    //   },
    // });

    const { data, error } = await resend.emails.send({
      from: 'Your App <onboarding@resend.dev>',
      to: [email],
      subject: 'Verify Your Email',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Email Verification</h2>
          <p>Your verification code is:</p>

          <div
            style="
              font-size: 32px;
              font-weight: bold;
              letter-spacing: 8px;
              margin: 20px 0;
              color: #2563eb;
            "
          >
            ${otp}
          </div>

          <p>This OTP will expire in 5 minutes.</p>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: 'OTP sent successfully',
      data,
    });
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}