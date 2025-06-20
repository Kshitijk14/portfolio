"use client";

import React, { useState } from 'react';
import ExperienceDetails from './ExperienceDetails';
import { experiences, experienceDetails } from '../../content/experience';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
}

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const handleBack = () => {
    setSelectedExperience(null);
  };

  return (
    <section className="relative mb-8">
      <h2 className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl md:text-3xl mb-4">experience</h2>
      <ul className="px-1 sm:px-2 md:px-4 text-gray-800 dark:text-gray-200 space-y-3 text-sm sm:text-base md:text-md">
        {experiences.map((exp) => (
          <li key={exp.id}>
            <button
              onClick={() => setSelectedExperience(exp)}
              className="hover:text-gray-600 dark:hover:text-gray-400"
            >
              • <u>{exp.title} @ {exp.company}</u>
            </button>
          </li>
        ))}
      </ul>
      {selectedExperience && (
        <ExperienceDetails
          experience={experienceDetails[selectedExperience.id] as { title: string; company: string; duration: string; descriptions: string[], skills: string[] }}
          onBack={handleBack}
        />
      )}
    </section>
  );
};

export default Experience;