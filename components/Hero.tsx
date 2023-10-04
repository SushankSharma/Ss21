import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The name's Sushank`,
      "Exploring-Possibilities.tsx",
      "<Aspiring:'Coder' />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-24 w-24 md:h-32 md:w-32 mx-auto object-cover"
        src="https://miro.medium.com/v2/resize:fit:828/1*_0qK7D9CaBWrxbrzwojJfQ.gif"
        alt=""
      />
      <div className="z-20 relative">
        <h2 className="tracking-[10px] text-xs md:text-sm uppercase text-gray-500 pb-2">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-4 sm:px-10">
          <span className="mr-2 text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 flex flex-col md:flex-row justify-center">
          <Link href="#about">
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">
              Experience
            </button>
          </Link>

          <Link href="#skills">
            <button className="heroButton mb-2 sm:mb-0 sm:mr-2">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton mb-2 sm:mb-0">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
