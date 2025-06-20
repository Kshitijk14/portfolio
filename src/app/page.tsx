import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Writing from '../components/writing/Writing';
import Achievements from '../components/achievements/Achievements';
import NoSSR from '../components/themes/NoSSR';
import SafeHydrate from '../components/SafeHydrate';
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <NoSSR fallback={<div className="min-h-screen bg-white">Loading...</div>}>
      <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors">
        <div className="container mx-auto px-0 py-6">
          <SafeHydrate >
            <Hero />
            <Experience />
            <Projects />
            <Writing />
            <Achievements />
            <Footer />
          </SafeHydrate >
        </div>
      </div>
    </NoSSR>
  );
};

export default Home;
