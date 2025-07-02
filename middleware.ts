import { NextConfig } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  const protectedRoute = ["/dashboard", "/profile"];
  const authRoute = ["/sign-in"];
  const { pathname } = request.nextUrl;

  if (authRoute.includes(pathname) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (protectedRoute.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config: NextConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
