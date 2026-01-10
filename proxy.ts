import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;
  const { pathname } = req.nextUrl;

  // 1. Define Public Pages and API routes
  const isPublicPage = pathname === "/login" || pathname === "/register";
  const isApiRoute = pathname.startsWith("/api");

  // 2. Define "Activity" logic
  const isActivityPage = pathname.split("/").length > 1 && pathname !== "/";

  // 3. Logic: If it's a page (not an API) and it's not a public page...
  if (!isApiRoute && isActivityPage && !isPublicPage) {
    if (!isLoggedIn || role === "guest") {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }
  
  // Allow all other requests (including API calls) to pass through
  return NextResponse.next();
});

export const config = {
  // Ensure api, static, and public files are ignored by middleware
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login|register).*)"],
};