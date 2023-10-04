// import React from "react";
// import { motion } from "framer-motion";

// function BackgroundCircles() {
//   return (
//     <motion.div
//       className="relative flex justify-center items-center"
//       initial={{ opacity: 0 }}
//       transition={{ duration: 2.5 }}
//       whileInView={{ opacity: 1 }}
//       animate={{
//         scale: [1, 2, 2, 3, 1],
//         opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
//         borderRadius: ["20%", "20%", "50%", "80%", "20%"],
//       }}
//     >
//       <div className="rounded-full border border-[#333333] h-[20%] w-[20%] md:h-[15%] md:w-[15%] lg:h-[25%] lg:w-[25%] xl:h-[30%] xl:w-[30%] absolute mt-[10%] animate-ping" />
//       <div className="rounded-full border border-[#333333] h-[30%] w-[30%] md:h-[25%] md:w-[25%] lg:h-[40%] lg:w-[40%] xl:h-[45%] xl:w-[45%] absolute mt-[15%]" />
//       <div className="rounded-full border border-[#333333] h-[50%] w-[50%] md:h-[40%] md:w-[40%] lg:h-[60%] lg:w-[60%] xl:h-[70%] xl:w-[70%] absolute mt-[25%]" />
//       <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[65%] w-[65%] md:h-[50%] md:w-[50%] lg:h-[70%] lg:w-[70%] xl:h-[75%] xl:w-[75%] absolute mt-[30%] animate-pulse" />
//       <div className="rounded-full border border-[#333333] h-[80%] w-[80%] md:h-[60%] md:w-[60%] lg:h-[90%] lg:w-[90%] xl:h-[100%] xl:w-[100%] absolute mt-[35%]" />
//     </motion.div>
//   );
// }

// export default BackgroundCircles;

import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
    >
      <div className="rounded-full border border-[#333333] h-[200px] w-[200px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
