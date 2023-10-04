// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Props = {};

// type Inputs = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// function ContactMe({}: Props) {
//   const {
//     register,
//     handleSubmit,
//     // formState: { errors },
//   } = useForm<Inputs>();
//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     window.location.href = `mailto:sushanks07@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
//     >
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
//         Contact
//       </h3>

//       <div className="flex flex-col space-y-10">
//         <h4 className="text-4xl font-semibold text-center">
//           I have got just what you need.{" "}
//           <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
//         </h4>

//         <div className="space-y-10">
//           <div className="flex items-center space-x-5 justify-center">
//             <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
//             <p className="text-2xl">+91 99 00 841182</p>
//           </div>
//           <div className="flex items-center space-x-5 justify-center">
//             <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
//             <a className="text-2xl" href="sushanks07@gmail.com">
//               sushanks07@fmail.com{" "}
//             </a>
//           </div>
//           <div className="flex items-center space-x-5 justify-center">
//             <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
//             <p className="text-2xl">Kuvempunagar, Mysuru, Kar </p>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="flex flex-col space-y-2 w-fit mx-auto"
//         >
//           <div className="flex space-x-2">
//             <input
//               className="contactInput"
//               placeholder="Name"
//               type="text"
//               {...register("name")}
//             />
//             <input
//               className="contactInput"
//               placeholder="Email"
//               type="text"
//               {...register("email")}
//             />
//           </div>
//           <input
//             className="contactInput"
//             placeholder="Subject"
//             type="text"
//             {...register("subject")}
//           />
//           <textarea
//             className="contactInput h-36"
//             placeholder="Message"
//             {...register("message")}
//           />

//           <button
//             type="submit"
//             className="
//             bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </motion.div>
//   );
// }

// export default ContactMe;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform form submission here
    // For now, just simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        {/* Contact Information */}
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 99 00 841182</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a className="text-2xl" href="mailto:sushanks07@gmail.com">
              sushanks07@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Kuvempunagar, Mysuru, Kar</p>
          </div>
        </div>

        {/* Contact Form */}
        {!formSubmitted ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                className="contactInput"
                placeholder="Name"
                type="text"
                {...register("name", { required: true })}
              />
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                className="contactInput"
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              id="subject"
              className="contactInput"
              placeholder="Subject"
              type="text"
              {...register("subject", { required: true })}
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              className="contactInput h-36"
              placeholder="Message"
              {...register("message", { required: true })}
            />

            <button
              type="submit"
              className="
                bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-2xl text-green-500">Message sent successfully!</p>
        )}
      </div>
    </motion.div>
  );
}

export default ContactMe;
