import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { useState } from "react";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

const Header = ({ socials }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto animate-pulse ${
        isHovered ? "opacity-100" : "opacity-20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <header
      className={`sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto animate-pulse ${
        isHovered ? "opacity-100" : "opacity-20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        ))}
      </motion.div>

      <Link href="#contact" passHref>
        <motion.a
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.2 }}
          className={`flex flex-row items-center text-gray-300 cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-300">
            Get In Touch
          </p>
        </motion.a>
      </Link>
      <Link href="#contact" passHref>
        <motion.a
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.2 }}
          className={`flex flex-row items-center text-gray-300 cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out ${
            isHovered ? "opacity-100" : ""
          }`}
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-300">
            Get In Touch
          </p>
        </motion.a>
      </Link>
    </header>
  );
};

export default Header;
