import React from "react";
import { motion } from "framer-motion";
// import { PageInfo } from "../typings";
// import { urlFor } from "../sanity";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        src="https://cdnb.artstation.com/p/assets/images/images/053/690/053/large/gregers-berth-oogway-gregersberth-summerchallenge02.jpg?1662796156"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] object-cover"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="text-lg font-light text-justify">
          Familiarity of delivering as a{" "}
          <span className="decoration-[#F7AB0A]/75 underline">
            Jr. Web Developer
          </span>{" "}
          (Intern) with [11] months of hands-on B2B experience. I was humbled to
          be part of the team appointed to build the FrontEnd fleet navigational
          dashboard application for the "XOS | Electric Trucks — L.A., USA".
          Committed to steady learning and delivering efficient solutions and
          helping teams to stand out in this digital era. Together we shall set
          the new status quo.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
