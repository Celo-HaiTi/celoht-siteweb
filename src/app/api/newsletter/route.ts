import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMap = new Map<string, number[]>();

function getForwardedIp(request: Request) {
  const header = request.headers.get("x-forwarded-for");
  if (header) return header.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      consent?: boolean;
      source?: string;
    };

    const email = (body.email ?? "").trim().toLowerCase();
    const consent = Boolean(body.consent);
    const source = body.source ?? "footer";

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Please confirm that you agree to receive updates." },
        { status: 400 },
      );
    }

    const requestIp = getForwardedIp(request);
    const now = Date.now();
    const window = rateLimitMap.get(`${requestIp}:${email}`) ?? [];
    const recent = window.filter((timestamp) => now - timestamp < rateLimitWindowMs);

    if (recent.length >= 3) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    recent.push(now);
    rateLimitMap.set(`${requestIp}:${email}`, recent);

    const apiUrl =
      process.env.NEWSLETTER_API_URL ?? process.env.NEXT_PUBLIC_NEWSLETTER_API_URL;
    const apiKey = process.env.NEWSLETTER_API_KEY ?? process.env.NEXT_PUBLIC_NEWSLETTER_API_KEY;

    if (!apiUrl) {
      return NextResponse.json(
        {
          error:
            "Newsletter subscriptions are not configured for this deployment. Please contact hello@celoht.com.",
        },
        { status: 503 },
      );
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        email,
        source,
        consent,
        subscribedAt: new Date().toISOString(),
      }),
    });

    const responseText = await response.text();
    let payload: { message?: string; error?: string } = {};

    try {
      payload = JSON.parse(responseText) as { message?: string; error?: string };
    } catch {
      payload = {};
    }

    if (!response.ok) {
      if (response.status === 409) {
        return NextResponse.json(
          { error: "This email is already subscribed." },
          { status: 409 },
        );
      }

      return NextResponse.json(
        {
          error:
            payload.error ??
            payload.message ??
            "The newsletter service could not accept this subscription.",
        },
        { status: response.status || 500 },
      );
    }

    return NextResponse.json({
      message:
        payload.message ??
        "Thanks for subscribing. You are on the list.",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to submit your email right now.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
