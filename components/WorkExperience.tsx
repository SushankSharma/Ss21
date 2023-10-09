import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-center md:text-left max-w-7xl px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-40 h-screen justify-center mx-auto items-center"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 justify-between py-2">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl lg:text-5xl md:px-10 py-2 font-bold mb-4 border-b-2 border-[#F7AB0A]">
          Experience
        </h3>
      </div>

      <div className="w-full flex space-x-4 md:space-x-5 overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
