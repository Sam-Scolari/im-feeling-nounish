import fetchLink from "@/utils/fetchLink";
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export async function POST(request: NextRequest) {
  const data = await request.json();

  let link = await fetchLink();

  while (link.imageType === "none") {
    link = await fetchLink();
  }

  if (data.untrustedData.buttonIndex === 2) {
    console.log("Link", new URL(link.url).searchParams.get("link"));
    return NextResponse.redirect(
      new URL(link.url).searchParams.get("link") as string,
      302
    );
  }

  return new NextResponse(
    `
        <!DOCTYPE html>
        <html>
          <head>
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="https://nouns.ooo/frame-images/${createHash(
                  "sha256"
                )
                  .update(link.url)
                  .digest("hex")}.png" />
                <meta property="fc:frame:button:1" content="I'm Feeling Nounish" />
                <meta property="fc:frame:button:2" content="Explore ➜" />
                <meta property="fc:frame:button:2:action" content="post_redirect" />
                <meta property="fc:frame:post_url" content="https://nouns.ooo/frame?link=${link}" />
          </head>
        </html>
        `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
