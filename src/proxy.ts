import { NextResponse, type NextRequest } from 'next/server';
import { hasExternalXHeaders, scrubExternalHeaders } from '@/lib/security/headerScrubber';

const applySecurityHeaders = (res: NextResponse): NextResponse => {
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return res;
};

/**
 * Next.js 16 No-Middleware Proxy Boundary.
 * Enforces CVE-2025-29927 header scrubbing and baseline security headers.
 */
export const proxy = (request: NextRequest): NextResponse => {
  try {
    const cleanHeaders = scrubExternalHeaders(request.headers);
    const needsHeaderOverride = hasExternalXHeaders(request.headers);

    const response = needsHeaderOverride
      ? NextResponse.next({
          request: {
            headers: cleanHeaders,
          },
        })
      : NextResponse.next();

    return applySecurityHeaders(response);
  } catch {
    return new NextResponse('Service temporarily unavailable.', {
      status: 503,
    });
  }
};

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
