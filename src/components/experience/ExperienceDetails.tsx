import React from 'react';
import { motion } from "motion/react";

interface ExperienceDetailsProps {
    experience: { title: string; company: string; duration: string; descriptions: string[], skills: string[] };
    onBack: () => void;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ experience, onBack }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.15 }} 
            className="fixed inset-0 flex items-center justify-center bg-white/30 dark:bg-zinc-900/30 backdrop-blur z-50"
            onClick={onBack}
        >
        <div 
            className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-auto font-mono"
            onClick={(e) => e.stopPropagation()}
        >
            <main className="mt-2">
            <h1 className="text-gray-900 dark:text-gray-100 text-2xl mb-6">experience details:</h1>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-800 dark:text-gray-200 text-xl">{experience.title} @ {experience.company}</h2>
                <span className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400">{experience.duration}</span>
            </div>
            <ul className="list-inside text-justify text-sm sm:text-base md:text-lg pr-4">
                    {experience.descriptions.map((description, index) => (
                        <li className="text-gray-800 dark:text-gray-300 relative pl-4 before:content-['•'] before:absolute before:left-0 before:top-0 text-sm leading-relaxed" key={index}>{description}</li>
                    ))}
                </ul>
                <p className='text-gray-800 dark:text-gray-300 mt-2 mb-2 text-sm sm:text-base md:text-lg'><strong>tech used:</strong> {experience.skills.join(', ')}</p>
            <button onClick={onBack} className="mt-4 text-blue-500 hover:text-gray-600 dark:hover:text-gray-400">
                go back
            </button>
            </main>
        </div>
        </motion.div>
    );
};

export default ExperienceDetails;