import ogs from "open-graph-scraper";
import sharp from "sharp";
// import { links } from "@/utils/fetchLink";
import * as fs from "fs";
import * as path from "path";

const links = [
  "https://nouns.wtf",
  "https://nouns.gg",
  "https://nounish.world",
  "https://nounsai.wtf",
  "https://noundation.wtf",
];

async function generateImage(link: string) {
  console.log("Generating image for", link);

  const { result } = await ogs({ url: link });

  const { ogTitle, ogDescription, ogImage } = result;

  if (!ogImage) {
    return "no image";
  }

  const imageURL = ogImage[0].url;

  const image = await fetch(
    imageURL.includes("http") ? imageURL : link + imageURL.substring(1)
  );

  const resize = (await sharp(await image.arrayBuffer())).resize(
    191 * 5,
    100 * 5
  );

  return (
    "data:image/png;base64," + (await resize.toBuffer()).toString("base64")
  );
}

(async () => {
  const images: Record<string, string> = {};

  for (const link of links) {
    images[link] = await generateImage(link);
  }

  fs.writeFileSync(
    path.join(__dirname, "../public/images.json"),
    JSON.stringify(images)
  );
})();
