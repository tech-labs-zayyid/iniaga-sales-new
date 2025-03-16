import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const subdomain = host.split(".")[0];
  let username = subdomain;

  // Jika ada subdomain valid, arahkan ke dynamic route [username]
  if (username !== "www") {
    const url = new URL(req.url);
    url.pathname = `/${username}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Konfigurasi agar middleware bekerja pada semua route kecuali folder _next & API
export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
