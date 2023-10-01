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
        src="https://pbs.twimg.com/profile_images/1488125503890690049/ZJo9bxQy_400x400.png"
        alt=""
      />

      <div className="px-0 md:px-10 ">
        {/* <h4 className="text-4xl font-light">{experience.jobTitle}</h4> */}
        <h4 className="text-4xl font-light text-center">
          Java Full-Stack Web Dev. | Intern
        </h4>

        {/* <p className="font-bold text-2xl mt-1">{experience.company}</p> */}
        <p className="font-bold text-2xl mt-1 text-center">
          Embitel Technologies Pvt. Ltd., Bengaluru, Bharat
        </p>

        <div className="flex space-x-2 my-2 justify-center">
          {/* {experience.technologies.map((technology) => ( */}
          {/* {experience.technologies.map((technology) => ( */}
          <img
            //   key={technology._id}
            className="h-12 w-12 rounded-full"
            //   src={urlFor(technology.image).url()}
            src="https://codemithra.com/wp-content/uploads/2020/06/java-logo.png"
            alt=""
          />
          <img
            //   key={technology._id}
            className="h-12 w-12 rounded-full bg-slate-400"
            //   src={urlFor(technology.image).url()}
            src="https://w7.pngwing.com/pngs/718/69/png-transparent-scalable-graphics-javascript-encapsulated-postscript-javascript-logo-text-logo-number.png"
            alt=""
          />
          <img
            //   key={technology._id}
            className="h-12 w-12 rounded-full bg-slate-400"
            //   src={urlFor(technology.image).url()}
            src="https://i.pngimg.me/thumb/f/720/5100507110572032.jpg"
            alt=""
          />
          <img
            //   key={technology._id}
            className="h-12 w-12 rounded-full bg-slate-400"
            //   src={urlFor(technology.image).url()}
            src="https://www.careernath.com/wp-content/uploads/2023/01/becomeamernstackdeveloper-mobile.png"
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
            OCT-2021 - SEPT-2022
          </span>
        </p>

        <ul className="list-disc space-y-4 ml-5 text-s font-light text-justify">
          {/* {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))} */}
          <li>
            {" "}
            Designed and developed a web-based navigational dashboard forthe
            XOS, focusing on user experience and efficient content loading.
          </li>
          <li>
            {" "}
            Achieved a 20% improvement in project delivery speed by optimizing
            JSON parameters,resulting in an 85% reduction in rendertimes
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
