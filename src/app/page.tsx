import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Writing from '../components/writing/Writing';
import SafeHydrate from '../components/SafeHydrate';

const Home: React.FC = () => {
  return (
    <>
      <SafeHydrate >
        <Hero />
        <Experience />
        <Projects />
        <Writing />
      </SafeHydrate >
    </>
  );
};

export default Home;
