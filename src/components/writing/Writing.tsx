"use client";

import React from 'react';
import Link from "next/link";
import { categories } from '../../content/writing';


const Writing = () => {
  return (
    <section className="mb-8">
      <h3 className="text-gray-900 dark:text-gray-100 text-2xl mb-4">writing</h3>
      <ul className="text-gray-800 dark:text-gray-200 space-y-3 text-sm sm:text-base md:text-lg text-left">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/writing/${category.id}`} className="hover:text-gray-600 dark:hover:text-gray-400">
              • {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Writing;