"use client";

import React from 'react';
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mb-10">
      <h3 className="text-2xl mb-4">projects</h3>
      <ul className="space-y-3">
        <li>
          <Link href="/projects/serious-projects" className="hover:text-gray-600">
            • serious projects
          </Link>
        </li>
        <li>
          <Link href="/projects/open-source-projects" className="hover:text-gray-600">
            • open source contributions
          </Link>
        </li>
        <li>
          <Link href="/projects/mehh-projects" className="hover:text-gray-600">
            • mehh projects
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Projects;