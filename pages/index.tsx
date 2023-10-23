import Head from "next/head";
import { GetStaticProps } from "next";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";

import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Layout"), {
  ssr: false, // Disable server-side rendering for this component
});

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the welcome screen for a few seconds and then set isLoading to false
    const delay = 3000; // 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Layout>
      <Head>
        <title>{pageInfo?.name} | ©️ Ss21</title>
        <link
          rel="icon"
          href="z"
        />
      </Head>
      {isLoading ? (
        // Display the welcome screen while isLoading is true
        <Welcome onLoad={() => setIsLoading(false)} />
      ) : (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
          <Header socials={socials} />

          {/* Hero Banner Section */}
          <section id="hero" className="snap-start">
            <Hero pageInfo={pageInfo} />
          </section>

          {/* About Section */}
          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>

          {/* Experience Section */}
          <section id="experience" className="snap-center">
            <WorkExperience experiences={experiences} />
          </section>

          {/* Skills Section */}
          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>

          {/* Projects Section */}
          <section id="projects" className="snap-start">
            <Projects projects={projects} />
          </section>

          {/* Contact Me Section */}
          <section id="contact" className="snap-start">
            <ContactMe pageInfo={pageInfo} />
          </section>

          <footer className="sticky bottom-5 w-full">
            <div className="flex justify-end p-5">
              <Link href="#hero" passHref>
                <button className="cursor-pointer focus:outline-none">
                  <img
                    className="h-10 w-10 rounded-full opacity-70 hover:opacity-100 active:opacity-100 transition-opacity duration-300 ease-in-out focus:outline-none animate-pulse"
                    src="https://cdn.dribbble.com/users/1595839/screenshots/13162552/media/f9bd0a90b668b98562fb8cd0708a7816.gif"
                    loading="lazy"
                    alt="Scroll-Up"
                  />
                </button>
              </Link>
            </div>
          </footer>
        </div>
      )}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
