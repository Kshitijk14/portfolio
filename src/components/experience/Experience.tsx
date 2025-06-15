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
    <section className="relative mb-10">
      <h3 className="text-2xl mb-4">experience</h3>
      <ul className="space-y-3 text-sm sm:text-base md:text-lg">
        {experiences.map((exp) => (
          <li key={exp.id}>
            <button
              onClick={() => setSelectedExperience(exp)}
              className="hover:text-gray-600"
            >
              • {exp.title} @ {exp.company}
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