import React from "react";
import { motion } from "framer-motion";
// import { Experience } from "../typings";
// import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};
type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience.companyImage).url()}
        className="w-32 h-32 md:w-44 md:h-44 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center z-10"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl md:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              loading="lazy"
              alt="Technology"
            />
          ))}
        </div>

        <p className="uppercase py-3 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul
          className="list-disc space-y-4 ml-5 text-sm font-light text-left max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 lg:max-h-[200px]"
          style={{ maxHeight: "200px", overflowY: "scroll" }}
        >
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
