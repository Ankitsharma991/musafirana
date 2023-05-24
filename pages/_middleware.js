import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // token will exists if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  //   Allow the require if the following is true...
  //   1) it's a request for next-auth session and provider fetching
  // 2) the token exists

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
  if (pathname.includes("/home")) {
    return NextResponse.redirect("/");
  }
}
