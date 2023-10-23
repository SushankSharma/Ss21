import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:sushanks07@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 justify-between py-2">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl lg:text-5xl md:px-10 py-2 font-bold mb-4 border-b-2 border-[#F7AB0A]">
          Contact
        </h3>
        <h6 className="text-4xl font-semibold text-center">
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk</span>
        </h6>
        <br />
        <div className="flex flex-col space-y-2 mt-1.5 w-full h-full items-center justify-center">
          <div className="space-y-5 overflow-y-auto max-h-60vh">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{pageInfo.phoneNumber}</p>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <a
                className="text-2xl"
                href="mailto:sushanks07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {pageInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{pageInfo.address}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                className="contactInput"
                placeholder="Name"
                type="text"
                {...register("name")}
              />
              <input
                className="contactInput"
                placeholder="Email"
                type="text"
                {...register("email")}
              />
            </div>
            <input
              className="contactInput"
              placeholder="Subject"
              type="text"
              {...register("subject")}
            />
            <textarea
              className="contactInput h-36"
              placeholder="Message"
              {...register("message")}
            />

            <button
              type="submit"
              className="
            bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-5 w-full md:w-auto">
        <p className="text-gray-400 text-sm">
          ©️ Ss21 | All Rights Reserved | {new Date().getFullYear()}
        </p>
      </div>
    </motion.div>
  );
}

export default ContactMe;
