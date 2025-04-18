import React from "react";
import LogoMarquee from "./LogoMover";

const logos: string[] = [
  "/Social-icons/youtube-wordmark.svg",
  "/Social-icons/instagram_word.png",
  "/Social-icons/facebook_word.png",
  "/Social-icons/twitter_word.png",
  "/Social-icons/linkedin.svg",
  "/Social-icons/redddit.png",
  "/Social-icons/kik.svg",
  "/Social-icons/tictok.png",
  "/Social-icons/meta.png",
  "/Social-icons/threads_wordmark.svg",
];

export const Test = () => {
  return (
    <div>
      <LogoMarquee logos={logos} speed={10} />
    </div>
  );
};
