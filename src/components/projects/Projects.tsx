"use client";

import React from 'react';
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mb-8">
      <h2 className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl md:text-3xl mb-4">projects</h2>
      <ul className="px-0 sm:px-2 md:px-4 text-gray-800 dark:text-gray-200 space-y-3 text-sm sm:text-base md:text-md text-left">
        <li>
          <Link href="/projects/serious-projects" className="hover:text-gray-600 dark:hover:text-gray-400">
            • <u>serious projects</u>
          </Link>
        </li>
        <li>
          <Link href="/projects/mehh-projects" className="hover:text-gray-600 dark:hover:text-gray-400">
            • <u>mehh projects</u>
          </Link>
        </li>
        <li>
          <Link href="/projects/open-source-projects" className="hover:text-gray-600 dark:hover:text-gray-400">
            • <u>open source contributions</u>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Projects;