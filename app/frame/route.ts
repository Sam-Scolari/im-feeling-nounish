import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(
    ` <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="I'm Feeling Nounish" />
        <meta property="og:description" content="Discover new and upcoming nounish people, places, and things!" />
        <meta property="og:image" content="https://nouns.ooo/og.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://nouns.ooo/og.png" />
        <meta property="fc:frame:button:1" content="I'm Feeling Nounish" />
        <meta property="fc:frame:post_url" content="https://nouns.ooo">
      </head>
    </html>
        
            `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}

export async function POST(request: NextRequest) {
  return new NextResponse(
    `
        <!DOCTYPE html>
        <html>
          <head>
                    <meta property="fc:frame" content="vNext" />
                    <meta property="fc:frame:image" content="https://nouns.ooo/placeholder.webp" />
          </head>
        </html>
        `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
