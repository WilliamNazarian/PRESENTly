import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Allow requests for next-auth session & provider fetching or if the token exists
  if (session) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated and requesting a protected route
  if (!session && pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - / (homepage)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|^/$).*)",
  ],
};
