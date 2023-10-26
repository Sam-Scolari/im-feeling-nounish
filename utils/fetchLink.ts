export const dynamic = "force-dynamic";

export default async function fetchLink() {
  return links[Math.floor(Math.random() * links.length)];
}

const links = [
  "https://nouns.wtf",
  "https://nouns.gg",
  "https://nounish.world",
  "https://nounsai.wtf",
  "https://noundation.wtf",
  "https://noggles.wtf",
  "https://nouns.build",
  "https://prop.house",
  "https://thatsgnar.ly",
  "https://lilnouns.wtf/",
  "https://nounsagora.com/",
  "https://nounsvision.com/",
  "https://nouns.substack.com/",
  "https://nns.xyz/",
  "https://www.federation.wtf/",
  "https://www.nounsapp.wtf/",
  "https://www.premiere.wtf/",
  "https://nouns-crystal-ball.netlify.app/",
  "https://dune.com/hildobby/nouns",
  "https://www.figma.com/community/plugin/1045020359359636829/Nouns",
  "https://lostnouns.wtf/",
  "https://archives.wtf/",
  "https://art.haus/",
  "https://nouns.center/",
  "https://beacons.ai/thenounsquare",
  "https://nouns.wtf/playground",
  "https://www.imdb.com/title/tt21823412/",
  "https://www.youtube.com/watch?v=lOzCA7bZG_k",
  "https://twitter.com/nounsdao",
];
