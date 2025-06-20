"use client";

import React from 'react';
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mb-8">
      <h3 className="text-gray-900 dark:text-gray-100 text-2xl mb-4">projects</h3>
      <ul className="text-gray-800 dark:text-gray-200 space-y-3 text-sm sm:text-base md:text-lg text-left">
        <li>
          <Link href="/projects/serious-projects" className="hover:text-gray-600 dark:hover:text-gray-400">
            • serious projects
          </Link>
        </li>
        <li>
          <Link href="/projects/mehh-projects" className="hover:text-gray-600 dark:hover:text-gray-400">
            • mehh projects
          </Link>
        </li>
        <li>
          <Link href="/projects/open-source-projects" className="hover:text-gray-600 dark:hover:text-gray-400">
            • open source contributions
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Projects;