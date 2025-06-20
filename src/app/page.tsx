import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Writing from '../components/writing/Writing';
import Achievements from '../components/achievements/Achievements';
import Footer from "../components/Footer";
// import NoSSR from '../components/themes/NoSSR';
// import SafeHydrate from '../components/SafeHydrate';

const Home: React.FC = () => {
  return (
    // <NoSSR fallback={<div className="min-h-screen bg-white">Loading...</div>}>
    <>
      {/* <SafeHydrate > */}
        <Hero />
        <Experience />
        <Projects />
        <Writing />
        <Achievements />
        <Footer />
      {/* </SafeHydrate > */}
    </>
    // </NoSSR>
  );
};

export default Home;
