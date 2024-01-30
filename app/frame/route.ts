import fetchLink from "@/utils/fetchLink";
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export async function POST(request: NextRequest) {
  const data = await request.json();

  let link = await fetchLink();

  const hash = createHash("sha256").update(link.url).digest("hex");

  while (link.imageType === "none") {
    link = await fetchLink();
  }

  if (data.untrustedData.buttonIndex === 2) {
    console.log(new URL(request.url).searchParams.get("link"));
    return NextResponse.redirect(
      new URL(request.url).searchParams.get("link") as string,
      302
    );
  }

  return new NextResponse(
    `
        <!DOCTYPE html>
        <html>
          <head>
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="https://nouns.ooo/frame-images/${hash}.png" />
                <meta property="fc:frame:button:1" content="I'm Feeling Nounish" />
                <meta property="fc:frame:button:2" content="Explore ➜" />
                <meta property="fc:frame:button:2:action" content="post_redirect" />
                <meta property="fc:frame:post_url" content="https://nouns.ooo/frame?link=${link.url}" />
          </head>
        </html>
        `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
