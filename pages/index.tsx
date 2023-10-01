import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";

type Props = {};

const Home = ({}: Props) => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Header />

      {/* Hero Banner Section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills Section */}

      {/* Projects Section */}

      {/* Contact Me Section */}
    </div>
  );
};

export default Home;
