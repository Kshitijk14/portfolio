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
        <h3 className="text-2xl mb-8">my projects</h3>
        <ul className="space-y-3">
            {seriousProjects.map((project) => (
            <motion.li 
                key={project.id}
                className="bg-white bg-opacity-70 p-4 rounded-lg shadow-md transition-all duration-10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                transition={{ duration: 0.15 }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl">{project.title}</h4>
                    <div>
                        <a href={project.viewLink} target="_blank" className="text-blue-500 hover:text-gray-600 mr-4">view</a>
                        <a href={project.githubLink} target="_blank" className="text-blue-500 hover:text-gray-600">github</a>
                    </div>
                </div>
                <ul className="list-disc list-inside">
                    {project.descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
                <p className='mt-2 mb-2'><strong>tech used:</strong> {project.skills.join(', ')}</p>
                {/* <div className='mb-2'></div> */}
            </motion.li>
            ))}
        </ul>
        <button onClick={navigateToHome} className="text-blue-500 hover:text-gray-600 mt-6">go back</button>
        </motion.section>
    );
};

export default SeriousProjects;