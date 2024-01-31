export const dynamic = "force-dynamic";

type Link = {
  id: string;
  url: string;
  imageType: "capture" | "og" | "none";
};

export default async function fetchLink() {
  return links[Math.floor(Math.random() * links.length)];
}

export const links = [
  { id: "nouns-wtf", url: "https://nouns.wtf", imageType: "capture" },
  { id: "nouns-esports", url: "https://nouns.gg", imageType: "capture" },
  { id: "nounish", url: "https://nounish.world", imageType: "capture" },
  { id: "noundation", url: "https://noundation.wtf", imageType: "og" },
  { id: "noggles-wtf", url: "https://noggles.wtf", imageType: "og" },
  { id: "nouns-builder", url: "https://nouns.build", imageType: "og" },
  { id: "prop-house", url: "https://prop.house", imageType: "og" },
  { id: "thats-garly", url: "https://thatsgnar.ly", imageType: "capture" },
  { id: "lilnouns", url: "https://lilnouns.wtf/", imageType: "capture" },
  { id: "agora", url: "https://nounsagora.com/", imageType: "og" },
  { id: "nouns-vision", url: "https://nounsvision.com/", imageType: "capture" },
  {
    id: "nouns-newsletter",
    url: "https://nouns.substack.com/archive",
    imageType: "og",
  },
  { id: "nns", url: "https://nns.xyz/", imageType: "capture" },
  {
    id: "federation",
    url: "https://www.federation.wtf/",
    imageType: "capture",
  },
  { id: "nouns-app", url: "https://www.nounsapp.wtf/", imageType: "capture" },
  {
    id: "premiere-wtf",
    url: "https://www.premiere.wtf/",
    imageType: "capture",
  },
  {
    id: "crystal-ball",
    url: "https://nouns-crystal-ball.netlify.app/",
    imageType: "capture",
  },
  {
    id: "dune-dashbaord",
    url: "https://dune.com/hildobby/nouns",
    imageType: "none",
  },
  { id: "lost-nouns", url: "https://lostnouns.wtf/", imageType: "capture" },
  { id: "archives-wtf", url: "https://archives.wtf/", imageType: "og" },
  { id: "art-haus", url: "https://art.haus/", imageType: "capture" },
  { id: "nouns-center", url: "https://nouns.center/", imageType: "og" },
  {
    id: "yellow-collective",
    url: "https://www.yellowcollective.xyz/",
    imageType: "og",
  },
  {
    id: "nouns-playground",
    url: "https://nouns.wtf/playground",
    imageType: "capture",
  },
  {
    id: "this-is-nouns",
    url: "https://www.youtube.com/watch?v=lOzCA7bZG_k",
    imageType: "og",
  },
  {
    id: "nouns-twitter",
    url: "https://twitter.com/nounsdao",
    imageType: "none",
  },
  {
    id: "nouns-channel",
    url: "https://warpcast.com/~/channel/nouns",
    imageType: "none",
  },
  { id: "bound", url: "https://bound.wtf", imageType: "capture" },
] satisfies Link[];
