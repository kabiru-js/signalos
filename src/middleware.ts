import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";
import { NextRequest, NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req: NextRequest & { auth: any }) => {
    const isLoggedIn = !!req.auth;
    const isLoginPage = req.nextUrl.pathname === "/login";
    const isRegisterPage = req.nextUrl.pathname === "/register";
    const isLandingPage = req.nextUrl.pathname === "/";
    const isApiAuth = req.nextUrl.pathname.startsWith("/api/auth");

    // Always allow auth API routes
    if (isApiAuth) return NextResponse.next();

    // Redirect to login if not authenticated and not on public pages
    if (!isLoggedIn && !isLoginPage && !isLandingPage && !isRegisterPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Redirect to dashboard if already logged in and on login page
    if (isLoggedIn && (isLoginPage || isRegisterPage)) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
