"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Background(props: { isMobile: boolean; link: string }) {
  const router = useRouter();

  const video = useRef<HTMLVideoElement>(null);

  function reset() {
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

  useEffect(() => {
    window.addEventListener("pageshow", reset);
    window.addEventListener("pagehide", reset);
  }, []);

  return (
    <video
      ref={video}
      muted
      playsInline
      preload="auto"
      onClick={(e) => {
        e.currentTarget.play();
        setTimeout(() => {
          window.open(props.link);
          router.refresh();
          if (video.current) {
            video.current.pause();
            video.current.currentTime = 0;
          }
          reset();
        }, 3200);
      }}
      onTimeUpdate={(e) => {
        if (e.currentTarget.currentTime > 0.6) {
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
