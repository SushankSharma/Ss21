import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-screen-xl px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 justify-between py-2">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl lg:text-5xl md:px-10 py-2 font-bold mb-4 border-b-2 border-[#F7AB0A]">
          Skills
        </h3>
      </div>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {/* Get first half of skills and map */}
        {skills
          ?.slice(0, skills.length / 2)
          .map((skill) => <Skill key={skill._id} skill={skill} />)}

        {/* Get second half of skills and map with direction left */}
        {skills
          ?.slice(skills.length / 2, skills.length)
          .map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
      </div>
    </motion.div>
  );
}

export default Skills;
