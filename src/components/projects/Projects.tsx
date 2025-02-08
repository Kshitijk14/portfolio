"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <section className="mb-10">
      <h3 className="text-2xl mb-4">projects</h3>
      <ul className="space-y-3">
        <li>
          <a href="#" onClick={() => navigateTo('/projects/serious-projects')} className="hover:text-gray-600">
            • serious projects
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigateTo('/projects/open-source-projects')} className="hover:text-gray-600">
            • open source contributions
          </a>
        </li>
        <li>
          <a href="#" onClick={() => navigateTo('/projects/mehh-projects')} className="hover:text-gray-600">
            • mehh projects
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;