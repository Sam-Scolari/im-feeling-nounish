import fetchLink from "@/utils/fetchLink";
import { NextRequest, NextResponse } from "next/server";
import ogs from "open-graph-scraper";
import sharp from "sharp";

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
        <meta property="fc:frame:post_url" content="https://nouns.ooo/frame">
      </head>
    </html>
        
            `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}

export async function POST(request: NextRequest) {
  const { result } = await ogs({ url: await fetchLink() });

  const { ogTitle, ogDescription, ogImage } = result;

  const imageURL = ogImage?.[0].url ?? "";

  const image = await fetch(imageURL);

  const resize = (await sharp(await image.arrayBuffer())).resize(
    191 * 5,
    100 * 5
  );

  const base64 =
    "data:image/png;base64," + (await resize.toBuffer()).toString("base64");

  return new NextResponse(
    `
        <!DOCTYPE html>
        <html>
          <head>
                <meta property="og:title" content=${ogTitle} />
                <meta property="og:description" content=${ogDescription} />
                <meta property="og:image" content="${ogImage?.[0].url}" />
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="${base64}" />
                <meta property="fc:frame:button:1" content="Explore →" />
          </head>
        </html>
        `,
    { status: 200, headers: { "content-type": "text/html" } }
  );
}
