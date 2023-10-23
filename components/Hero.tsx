import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};
type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name's ${pageInfo?.name}`,
      "Exploring-Possibilities.tsx",
      "<Aspiring:'Coder' />",
      `Hi, The name's ${pageInfo?.name}`,
      "Exploring-Possibilities.tsx",
      "<Aspiring:'Coder' />",
    ],
    loop: true,
    delaySpeed: 2000,
  });


  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <div className="w-full max-w-screen-xl mx-auto h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto object-cover"
        // src="https://miro.medium.com/v2/resize:fit:828/1*_0qK7D9CaBWrxbrzwojJfQ.gif"
        src={urlFor(pageInfo?.heroImage).url()}
        className="relative rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto object-cover"
        // src="https://miro.medium.com/v2/resize:fit:828/1*_0qK7D9CaBWrxbrzwojJfQ.gif"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20 relative">
        <h2 className="tracking-[10px] text-xs md:text-sm uppercase text-gray-300 pb-2">
          {/* Software Engineer */}
          {pageInfo?.role}
        <h2 className="tracking-[10px] text-xs md:text-sm uppercase text-gray-300 pb-2">
          {/* Software Engineer */}
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-4 sm:px-10">
          <span className="mr-2 text-lg md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" font-size="2rem" />
        <h1 className="text-3xl lg:text-4xl font-semibold px-4 sm:px-10">
          <span className="mr-2 text-lg md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" font-size="2rem" />
        </h1>

        <div className="pt-5 flex flex-col md:flex-row justify-center animate-pulse">

        <div className="pt-5 flex flex-col md:flex-row justify-center animate-pulse">
          <Link href="#about">
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">About</button>
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">
              Experience
            </button>
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">
              Experience
            </button>
          </Link>

          <Link href="#skills">
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">Skills</button>
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton mb-2 sm:mb-0">Projects</button>
            <button className="heroButton mb-2 sm:mb-0">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Hero;
