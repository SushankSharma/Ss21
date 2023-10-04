import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-full md:w-[80%] xl:w-[90%] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -50,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png"
        className="w-32 h-32 md:w-44 md:h-44 xl:w-60 xl:h-60 rounded-full object-cover object-center"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl md:text-3xl font-light">
          {" "}
          Database Associate | Intern
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">
          Ministry of Cooperation (AICTE), Bharat
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
            alt=""
          />
        </div>

        <p className="uppercase py-3 text-gray-300">
          <span className="decoration-[#F7AB0A] underline">
            {" "}
            - DEC-2022 - JAN-2023
          </span>
        </p>

        <ul className="list-disc space-y-3 ml-5 text-lg md:text-xl">
          <li>
            {" "}
            Played a key role in establishing the Cooperative Society Database,
            streamlining evaluations and reducing approval times by 95%.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
