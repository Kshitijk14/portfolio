"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "motion/react";
import '../../styles/globals.css';
import { thoughtsAndIdeas } from '../../content/writing';


const ThoughtsAndIdeas = () => {
    const router = useRouter();
        const [maxLength, setMaxLength] = useState(280);
    
        const navigateToHome = () => {
            router.push('/');
        };
    
        useEffect(() => {
            const handleResize = () => {
                const screenWidth = window.innerWidth;
                // Adjust the maxLength based on screen width
                if (screenWidth < 640) {
                    setMaxLength(100); // Example for small screens
                } else if (screenWidth < 1024) {
                    setMaxLength(200); // Example for medium screens
                } else {
                    setMaxLength(280); // Example for large screens
                }
            };
    
            handleResize(); // Set initial value
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        const truncateDescription = (description: string, maxLength: number) => {
            if (description.length <= maxLength) return description;
            return description.substring(0, maxLength) + '...';
        };

    return (
        <motion.section 
            className="mb-16" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.2 }}
        >
        <h3 className="text-2xl mb-8">something</h3>
        <ul className="space-y-3">
            {thoughtsAndIdeas.map((idea) => (
                <motion.li 
                    key={idea.id}
                    className="bg-white bg-opacity-70 p-4 rounded-lg shadow-md transition-all duration-10"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                    transition={{ duration: 0.15 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl">{idea.title}</h4>
                        <a href={idea.readLink} target="_blank" className="text-blue-500 hover:text-gray-600">read</a>
                    </div>
                    <p className="truncate-description">
                        {truncateDescription(idea.descriptions, maxLength)}
                    </p>
                    <div className='mb-2'></div>
                </motion.li>
            ))}
        </ul>
        <button onClick={navigateToHome} className="text-blue-500 hover:text-gray-600 mt-6">go back</button>
        </motion.section>
    );
};

export default ThoughtsAndIdeas;