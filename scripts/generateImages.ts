import { links } from "@/utils/fetchLink";
import fs from "fs";
import { join } from "path";
import captureWebsite from "capture-website";
import ogs from "open-graph-scraper";
import sharp from "sharp";

async function captureImage(url: string) {
  return captureWebsite.buffer(url, {
    width: 1910,
    height: 1000,
    type: "png",
    delay: 5,
  });
}

async function getOGImage(url: string) {
  const { result } = await ogs({ url });

  if (!result.ogImage) {
    return captureImage(url);
  }

  const imageURL = result.ogImage[0].url;

  const imageData = imageURL.includes("youtube.com")
    ? await fetch(
        `https://img.youtube.com/vi/${new URL(imageURL).searchParams.get(
          "v"
        )}/mqdefault.jpg`
      )
    : await fetch(
        imageURL.includes("http") ? imageURL : url + imageURL.substring(1)
      );

  const resize = await (await sharp(await imageData.arrayBuffer()))
    .resize(1910, 1000)
    .png()
    .toBuffer();

  return resize;
}

(async () => {
  for (const { url, imageType } of links) {
    if (imageType === "none") {
      console.log("Skipping image generation for", url);
      continue;
    }

    console.log("Generating image for", url);

    const image =
      imageType === "capture" ? await captureImage(url) : await getOGImage(url);

    const urlObject = new URL(url);

    const id = urlObject.hostname.replace(/\./g, "-");

    fs.writeFileSync(
      join(__dirname, "../public/frame-images/", `${id}.png`),
      image
    );
  }
})();
