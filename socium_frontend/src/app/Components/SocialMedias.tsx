import Image from "next/image";
import React from "react";
import LogoMarquee from "./LogoMover";

const logos : string[] = [
  "/Social-icons/youtube-wordmark.svg",
  "/Social-icons/instagram_word.png",
  "/Social-icons/facebook_word.png",
  "/Social-icons/linkedin.svg",
  "/Social-icons/redddit.png",
  "/Social-icons/kik.svg",
  "/Social-icons/tictok.png",
  "/Social-icons/meta.png",
  "/Social-icons/threads_wordmark.svg",
];


export default function SocialMedias() {
  return (
    <>
      <div className='flex items-center justify-center '>
        <div className='sm:grid h-3/2 w-3/2 gap-1 p-6 hidden  sm:grid-cols-4 sm:grid-rows-2	 rounded-lg'>
          <div className='col-span-1 row-span-1 rounded-lg flex items-center justify-center'>
            <Image
              layout='intrinsic'
              src={"/Social-icons/youtube-wordmark.svg"}
              typeof='image/svg+xml'
              alt='Instagram'
              width={145}
              height={145}
            />
          </div>

          <div className='col-span-1 row-span-1 rounded-lg  flex items-center justify-center'>
            <Image
              src={"/Social-icons/instagram_word.png"}
              layout='intrinsic'
              width={150}
              height={150}
              alt='instagram'
            />
          </div>

          <div className='col-span-1 row-span-1  flex items-center justify-center'>
            <Image
              src={"/Social-icons/facebook_word.png"}
              width={145}
              height={145}
              layout='intrinsic'
              alt='facebook'
            />
          </div>

          <div className='col-span-1 row-span-1 bg-tan-200  flex items-center justify-center'>
            <Image
              src={"/Social-icons/redddit.png"}
              width={100}
              height={100}
              layout='intrinsic'
              alt='redit'
            />
          </div>

          <div className='col-span-1 row-span-1 flex items-center justify-center'>
            <Image
              src={"/Social-icons/kik.svg"}
              width={70}
              height={70}
              layout='intrinsic'
              alt='kik'
            />
          </div>

          <div className='col-span-1 row-span-1 flex items-center justify-center'>
            <Image
              src={"/Social-icons/tictok.png"}
              width={120}
              height={120}
              layout='intrinsic'
              alt='tiktok'
            />
          </div>

          <div className='col-span-1 row-span-1 flex items-center justify-center'>
            <Image
              src={"/Social-icons/meta.png"}
              width={120}
              height={120}
              layout='intrinsic'
              alt='meta'
            />
          </div>

          <div className='col-span-1 row-span-1 flex items-center justify-center'>
            <Image
              src={"/Social-icons/threads_wordmark.svg"}
              width={100}
              height={100}
              layout='intrinsic'
              alt='threads'
            />
          </div>
        </div>
      </div>
      <LogoMarquee logos={logos} speed={10} />
    </>
  );
}
