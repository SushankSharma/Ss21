import React from "react";
import { motion } from "framer-motion";
// import { Experience } from "../typings";
// import { urlFor } from "../sanity";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // src={urlFor(experience.companyImage).url()}
        src="https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        {/* <h4 className="text-4xl font-light">{experience.jobTitle}</h4> */}
        <h4 className="text-4xl font-light text-center">
          Database Associate | Intern
        </h4>

        {/* <p className="font-bold text-2xl mt-1">{experience.company}</p> */}
        <p className="font-bold text-2xl mt-1 text-center">
          Ministry of Cooperation (AICTE), Bharat
        </p>

        <div className="flex space-x-2 my-2 justify-center">
          {/* {experience.technologies.map((technology) => ( */}
          {/* {experience.technologies.map((technology) => ( */}
          <img
            //   key={technology._id}
            className="h-10 w-10 rounded-full"
            //   src={urlFor(technology.image).url()}
            src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
            alt=""
          />
          <img
            //   key={technology._id}
            className="h-10 w-10 rounded-full bg-slate-400"
            //   src={urlFor(technology.image).url()}
            src="https://iconape.com/wp-content/png_logo_vector/amazon-database.png"
            alt=""
          />
          {/* ))} */}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {/* {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()} */}
          <span className="decoration-[#F7AB0A] underline">
            DEC-2022 - JAN-2023
          </span>
        </p>

        <ul className="list-disc space-y-4 ml-5 text-s font-light text-justify">
          {/* {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))} */}
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
