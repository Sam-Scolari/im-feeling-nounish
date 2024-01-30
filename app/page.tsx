import Background from "@/components/Background";
import fetchLink from "@/utils/fetchLink";
import { headers } from "next/headers";

export default async function Home() {
  // const isMobile = headers().get("x-device-type") === "mobile";
  const isMobile = false;

  const link = await fetchLink();

  return (
    <main className="relative bg-green h-[100svh] flex items-center justify-center">
      <Background isMobile={isMobile} link={link.url} />
      <h1
        id="title"
        className="absolute select-none leading-none pointer-events-none text-[525%] max-2xl:text-[450%] max-lg:text-[325%] h-52 font-londrina-solid font-semibold text-center"
      >
        I'm feeling Nounish
      </h1>
      <div
        id="jump-in"
        className="absolute bottom-[17%] w-full flex gap-[0.35%] items-end justify-center"
      >
        <p className="text-[150%] font-bold -mb-2.5 select-none">Jump in!</p>
        <img
          src="/icons/arrow.svg"
          alt="An arrow pointing at a button"
          draggable={false}
        />
      </div>
      <a
        id="noggle"
        href="https://nouns.wtf"
        draggable={false}
        className="fixed top-8 h-9 flex items-center left-8 z-10"
      >
        <img
          src="/icons/noggle.svg"
          alt="I'm feeling Nounish"
          className="select-none w-16 hover:scale-110 transition-transform duration-500 cursor-pointer"
        />
      </a>
      <div
        id="socials"
        className="fixed items-center top-8 right-8 flex gap-4 z-10"
      >
        <a
          href="/x"
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className="select-none hover:scale-110 transition-transform duration-500"
        >
          <img
            src="/icons/x.webp"
            alt="X"
            draggable={false}
            className="w-9 h-9 rounded-lg"
          />
        </a>
        <a
          href="/warpcast"
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className="select-none hover:scale-110 transition-transform duration-500"
        >
          <img
            src="/icons/warpcast.webp"
            alt="Warpcast"
            draggable={false}
            className="w-9 h-9 rounded-lg"
          />
        </a>
      </div>
    </main>
  );
}
