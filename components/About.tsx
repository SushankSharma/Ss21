import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className="relative">
      {/* Place the <h3> element at the top-center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 justify-between py-2">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl lg:text-5xl px-4 md:px-10 py-2 font-bold mb-4 border-b-2 border-[#F7AB0A]">
          About
        </h3>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex flex-col md:flex-row max-w-7xl px-4 md:px-10 h-screen justify-evenly mx-auto items-center mt-24 md:mt-0"
      >
        <motion.img
          initial={{
            x: -200,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={urlFor(pageInfo?.profilePic).url()}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 sm:w-32 sm:h-48 md:w-64 md:h-80 xl:w-[350px] xl:h-[24vmax] object-cover max-w-full h-auto rounded-lg object-center z-10" // Add rounded-lg class here
          loading="lazy"
          alt="About Me"
        ></motion.img>

        <div className="md:ml-8 space-y-6 md:space-y-8 xl:space-y-12 overflow-y-scroll md:overflow-y-visible">
          <h4 className="text-xl md:text-xl lg:text-3xl font-semibold">
            <br />
            Here is a{" "}
            <span className="decoration-[#F7AB0A]/50 underline">
              little
            </span>{" "}
            background
          </h4>
          <p className="text-base md:text-lg lg:text-xl text-left">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
