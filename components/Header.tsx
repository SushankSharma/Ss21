import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="sticky top-0 flex flex-col md:flex-row items-center justify-between p-5 z-20 max-w-7xl mx-auto">
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
        className="flex flex-row items-center space-x-4 md:space-x-6"
      >
        <SocialIcon
          url="https://github.com/SushankSharma"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://in.linkedin.com/in/sushank-sharma-ss21"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>

      <motion.div
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
        transition={{ duration: 1 }}
        className="flex flex-row items-center mt-0 md:mt-0 text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase text-sm text-gray-400 md:text-base ">
          Get In Touch
        </p>
      </motion.div>

      {/* Media query for screens less than 768px */}
      <style jsx>
        {`
          @media screen and (max-width: 767px) {
            header {
              flex-direction: row;
              align-items: flex-start; /* Align items to the top */
              justify-content: space-between;
            }
            .flex-col {
              margin-top: 0; /* Set margin-top to 0 for top alignment */
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
