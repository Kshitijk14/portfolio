import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Writing from '../components/writing/Writing';
import Achievements from '../components/achievements/Achievements';
import SafeHydrate from '../components/SafeHydrate';
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <SafeHydrate >
        <Hero />
        <Experience />
        <Projects />
        <Writing />
        <Achievements />
        <Footer />
      </SafeHydrate >
    </>
  );
};

export default Home;
