import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return new NextResponse(
    `
        <!DOCTYPE html>
        <html>
          <head>
                    <meta property="fc:frame" content="vNext" />
                    <meta property="fc:frame:image" content="/og.png" />
          </head>
        </html>
        `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
