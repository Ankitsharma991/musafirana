import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log("MIDDLEWARE");
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

// import { NextRequest } from "next/server";

// export function middleware(req) {
//   console.log("MIDDLEWARE")
//   if (req.nextUrl.pathname.includes("/api/auth") || token) {
//     return NextRequest.next();
//   }

//   if (request.nextUrl.pathname !== "login" || !token) {
//     return NextRequest.redirect("/login");
//   }
//   if (request.nextUrl.pathname === "/home") {
//     return NextRequest.redirect("/l");
//   }
// }
