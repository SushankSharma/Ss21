import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="relative">
      {/* Place the <h3> element at the top-center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl lg:text-5xl px-4 md:px-10 py-2">
          About
        </h3>
      </div>

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
          src="https://cdnb.artstation.com/p/assets/images/images/053/690/053/large/gregers-berth-oogway-gregersberth-summerchallenge02.jpg?1662796156"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 md:w-64 md:h-96 xl:w-[350px] xl:h-[24vmax] object-cover max-w-full h-auto"
          loading="lazy"
          alt="About Me"
        ></motion.img>

        <div className="md:ml-8 space-y-6 md:space-y-10 xl:space-y-12 overflow-y-scroll md:overflow-y-visible">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Here is a{" "}
            <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
            background
          </h4>
          <p className="text-base md:text-lg lg:text-xl text-left">
            Familiarity of delivering as a{" "}
            <span className="decoration-[#F7AB0A]/75 underline">
              Jr. Web Developer
            </span>{" "}
            (Intern) with [11] months of hands-on B2B experience. I was humbled
            to be part of the team appointed to build the Front-End fleet
            navigational dashboard application for the "XOS | Electric Trucks —
            L.A., USA". Committed to steady learning and delivering efficient
            solutions and helping teams to stand out in this digital era.
            Together we shall set the new status quo.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
