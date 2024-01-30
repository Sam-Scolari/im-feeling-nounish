export const dynamic = "force-dynamic";

type Link = {
  url: string;
  imageType: "capture" | "og" | "none";
};

export default async function fetchLink() {
  return links[Math.floor(Math.random() * links.length)];
}

export const links = [
  { url: "https://nouns.wtf", imageType: "capture" },
  { url: "https://nouns.gg", imageType: "capture" },
  { url: "https://nounish.world", imageType: "capture" },
  { url: "https://noundation.wtf", imageType: "og" },
  { url: "https://noggles.wtf", imageType: "og" },
  { url: "https://nouns.build", imageType: "og" },
  { url: "https://prop.house", imageType: "og" },
  { url: "https://thatsgnar.ly", imageType: "capture" },
  { url: "https://lilnouns.wtf/", imageType: "capture" },
  { url: "https://nounsagora.com/", imageType: "og" },
  { url: "https://nounsvision.com/", imageType: "capture" },
  { url: "https://nouns.substack.com/archive", imageType: "og" },
  { url: "https://nns.xyz/", imageType: "capture" },
  { url: "https://www.federation.wtf/", imageType: "capture" },
  { url: "https://www.nounsapp.wtf/", imageType: "capture" },
  { url: "https://www.premiere.wtf/", imageType: "capture" },
  { url: "https://nouns-crystal-ball.netlify.app/", imageType: "capture" },
  { url: "https://dune.com/hildobby/nouns", imageType: "none" },
  { url: "https://lostnouns.wtf/", imageType: "capture" },
  { url: "https://archives.wtf/", imageType: "og" },
  { url: "https://art.haus/", imageType: "capture" },
  { url: "https://nouns.center/", imageType: "og" },
  { url: "https://www.yellowcollective.xyz/", imageType: "og" },
  { url: "https://nouns.wtf/playground", imageType: "capture" },
  { url: "https://www.youtube.com/watch?v=lOzCA7bZG_k", imageType: "og" },
  { url: "https://twitter.com/nounsdao", imageType: "none" },
  { url: "https://warpcast.com/~/channel/nouns", imageType: "none" },
  { url: "https://bound.wtf", imageType: "capture" },
] satisfies Link[];
