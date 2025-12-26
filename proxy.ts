import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;
  
  const isActivityPage = req.nextUrl.pathname.split("/").length > 1 && req.nextUrl.pathname !== "/";

  if (isActivityPage && (!isLoggedIn || role === "guest")) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|login).*)"],
};