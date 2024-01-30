import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  // Get the device type
  const { device } = userAgent(request);

  const headers = new Headers(request.headers);

  headers.set("x-device-type", device.type === "mobile" ? "mobile" : "desktop");

  return NextResponse.next({
    request: {
      headers,
    },
  });
}

// only apply this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
