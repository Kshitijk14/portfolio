"use client";

import React from 'react';
import Link from "next/link";
import { categories } from '../../content/writing';


const Writing = () => {
  return (
    <section className="mb-8">
      <h2 className="text-gray-900 dark:text-gray-100 text-xl sm:text-2xl md:text-3xl mb-4">writing</h2>
      <ul className="px-0 sm:px-2 md:px-4 text-gray-800 dark:text-gray-200 space-y-3 text-sm sm:text-base md:text-md text-left">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/writing/${category.id}`} className="hover:text-gray-600 dark:hover:text-gray-400">
              • <u>{category.title}</u>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Writing;