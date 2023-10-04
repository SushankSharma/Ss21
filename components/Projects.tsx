import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <motion.div className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-5 md:p-10 lg:p-20 h-screen">
            <motion.img
              initial={{
                y: -100,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://www.projectmanager.com/wp-content/uploads/2021/08/IT-Project-Plan.png"
              className="md:w-64 md:h-64 lg:w-96 lg:h-72 xl:w-120 xl:h-96 object-contain rounded-lg cursor-pointer"
            />

            <div className="space-y-5 px-5 md:px-10 max-w-6xl">
              <h4 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
                <span className="decoration-[#F7AB0A]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Personal-Portfolio
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestiae, mollitia!
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
