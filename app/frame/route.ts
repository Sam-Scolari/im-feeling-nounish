import fetchLink from "@/utils/fetchLink";
import { NextRequest, NextResponse } from "next/server";
import Images from "@/public/images.json";
import { RedirectType, redirect } from "next/navigation";

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
      </head>
    </html>
        
            `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  //   const link = await fetchLink();
  const link = "https://nouns.gg";

  const image = Images[link];

  console.log(image);

  if (data.untrustedData.buttonIndex === 2) {
    return redirect(link, RedirectType.replace);
  }

  return new NextResponse(
    `
        <!DOCTYPE html>
        <html>
          <head>
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="${image}" />
                <meta property="fc:frame:button:1" content="I'm Feeling Nounish" />
                <meta property="fc:frame:button:2" content="Explore ➜" />
                <meta property="fc:frame:button:2:action" content="post_redirect" />
          </head>
        </html>
        `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
