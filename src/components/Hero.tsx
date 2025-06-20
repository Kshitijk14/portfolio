import React from 'react';
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <main className="mb-10">
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-gray-900 dark:text-gray-100 text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
        hi, i am <strong className='hover:text-gray-500 dark:hover:text-gray-400'><u>Kshitij</u>!</strong>
      </Link>
      
      <p className="mt-6 px-0 sm:px-1 md:px-2 text-gray-800 dark:text-gray-200 text-base sm:text-md mb-1">final year electronics student.</p>
      <p className="px-0 sm:px-1 md:px-2 text-gray-800 dark:text-gray-200 text-base sm:text-md mb-4">getting a deeper understanding of time-series modelling & transformers.</p>
    </main>
  );
};

export default Hero;
