"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { categories } from '../../content/writing';


const Writing = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <section className="mb-12">
      <h3 className="text-2xl mb-8">writing</h3>
      <ul className="space-y-3">
        {categories.map((category) => (
          <li key={category.id}>
            <a href="#" onClick={() => navigateTo(`/writing/${category.id}`)} className="hover:text-gray-600">
              • {category.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Writing;