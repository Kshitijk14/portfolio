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
    <section className="relative mb-12">
      <h3 className="text-2xl mb-6">experience</h3>
      <ul className="space-y-3">
        {experiences.map((exp) => (
          <li key={exp.id}>
            <a
              href="#"
              onClick={() => setSelectedExperience(exp)}
              className="hover:text-gray-600"
            >
              • {exp.title} @ {exp.company}
            </a>
          </li>
        ))}
      </ul>
      {selectedExperience && (
        <ExperienceDetails
          experience={experienceDetails[selectedExperience.id] as { title: string; company: string; duration: string; description: string }}
          onBack={handleBack}
        />
      )}
    </section>
  );
};

export default Experience;