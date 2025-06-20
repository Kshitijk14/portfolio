"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "motion/react";


const MyStory = () => {
    const router = useRouter();

    const navigateToHome = () => {
        router.push('/');
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }} 
            transition={{ duration: 0.2 }}
            className="mb-16"
        >
        <h1 className="text-gray-900 dark:text-gray-100 text-2xl mb-8">my story</h1>
        <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base md:text-lg text-justify mb-4">
            placeholder text for now........
        </p>
        <button onClick={navigateToHome} className="text-blue-500 hover:text-gray-600 dark:hover:text-gray-400 mt-6">go back</button>
        </motion.section>
    );
};

export default MyStory;