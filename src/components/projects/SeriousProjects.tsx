"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "motion/react";
import { seriousProjects } from '../../content/projects';


const SeriousProjects = () => {
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
        <h3 className="text-gray-900 dark:text-gray-100 text-2xl mb-8">my projects</h3>
        <ul className="space-y-3 text-sm sm:text-base md:text-lg text-left">
            {seriousProjects.map((project) => (
            <motion.li 
                key={project.id}
                className="bg-white/70 dark:bg-zinc-800/70 hover:bg-gray-100/70 dark:hover:bg-zinc-700/70 text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 p-4 rounded-lg shadow-md transition-all duration-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl">{project.title}</h4>
                    <div className='text-sm'>
                        <a href={project.viewLink} target="_blank" className="text-blue-500 hover:text-gray-600 dark:hover:text-gray-400 mr-4 transition-colors">view</a>
                        <a href={project.githubLink} target="_blank" className="text-blue-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">github</a>
                    </div>
                </div>
                <ul className="text-gray-800 dark:text-gray-200 list-inside text-justify text-sm sm:text-base md:text-lg pr-4 space-y-2">
                    {project.descriptions.map((description, index) => (
                        <li className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:top-0 text-sm leading-relaxed" key={index}>{description}</li>
                    ))}
                </ul>
                <p className='text-gray-800 dark:text-gray-200 mt-4 mb-2 text-sm sm:text-base md:text-lg'><strong>tech used:</strong> {project.skills.join(', ')}</p>
                {/* <div className='mb-2'></div> */}
            </motion.li>
            ))}
        </ul>
        <button onClick={navigateToHome} className="text-blue-500 hover:text-gray-600 dark:hover:text-gray-400 mt-6">go back</button>
        </motion.section>
    );
};

export default SeriousProjects;