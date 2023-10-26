"use client";

import { useRouter } from "next/navigation";

export default function Background(props: { isMobile: boolean; link: string }) {
  const router = useRouter();

  function hideElements() {
    const title = document.getElementById("title");
    const jumpIn = document.getElementById("jump-in");
    const noggle = document.getElementById("noggle");
    const socials = document.getElementById("socials");

    if (title && jumpIn && noggle && socials) {
      title.style.display = "none";
      jumpIn.style.display = "none";
      noggle.style.display = "none";
      socials.style.display = "none";
    }
  }

  function showElements() {
    const title = document.getElementById("title");
    const jumpIn = document.getElementById("jump-in");
    const noggle = document.getElementById("noggle");
    const socials = document.getElementById("socials");

    if (title && jumpIn && noggle && socials) {
      title.style.display = "flex";
      jumpIn.style.display = "flex";
      noggle.style.display = "flex";
      socials.style.display = "flex";
    }
  }

  return (
    <video
      muted
      playsInline
      preload="auto"
      onClick={(e) => {
        e.currentTarget.play();
      }}
      onEnded={(e) => {
        window.open(props.link);
        e.currentTarget.currentTime = 0;
        router.refresh();
        showElements();
      }}
      onTimeUpdate={(e) => {
        if (e.currentTarget.currentTime > 0.6) {
          hideElements();
        }
      }}
      className="cursor-pointer select-none w-full h-full object-cover object-center"
    >
      <source
        src={props.isMobile ? "/background-mobile.webm" : "/background.webm"}
        type="video/webm"
      />
      <source
        src={props.isMobile ? "/background-mobile.mp4" : "/background.mp4"}
        type="video/mp4"
      />
    </video>
  );
}
