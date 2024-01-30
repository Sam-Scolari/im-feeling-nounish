import fetchLink from "@/utils/fetchLink";
import { NextRequest, NextResponse } from "next/server";
import { RedirectType, redirect } from "next/navigation";
import { createHash } from "crypto";

export async function POST(request: NextRequest) {
  const data = await request.json();

  // let link = await fetchLink();

  // while (link.imageType === "none") {
  //   link = await fetchLink();
  // }

  const link = "https://nouns.gg";

  console.log(
    `https://nouns.ooo/frame-images/${createHash("sha256")
      .update(link)
      .digest("hex")}.png`
  );

  if (data.untrustedData.buttonIndex === 2) {
    return redirect(link, RedirectType.replace);
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
                  .update(link)
                  .digest("hex")}.png" />
                <meta property="fc:frame:button:1" content="I'm Feeling Nounish" />
                <meta property="fc:frame:button:2" content="Explore ➜" />
                <meta property="fc:frame:button:2:action" content="post_redirect" />
          </head>
        </html>
        `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
