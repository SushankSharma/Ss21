import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-center md:text-left max-w-7xl px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-40 h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-12 md:top-24 uppercase tracking-[16px] text-gray-500 text-2xl md:text-3xl">
        Experience
      </h3>

      <div className="w-full flex space-x-4 md:space-x-5 overflow-x-auto p-5 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
