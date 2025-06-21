"use client";

import React from "react";
import { motion } from "framer-motion";

interface AchievementDetailsProps {
  achievement: { title: string; date: string; description: string };
  onBack: () => void;
}

const AchievementDetails: React.FC<AchievementDetailsProps> = ({ achievement, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 flex items-center justify-center bg-white/30 dark:bg-gray-900/30 backdrop-blur z-50"
      onClick={onBack}
    >
      <div
        className="bg-white/70 dark:bg-zinc-900/90 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-4xl mx-auto font-mono text-sm sm:text-base md:text-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <main className="mt-2 text-left">
          <h1 className="text-gray-900 dark:text-gray-100 text-2xl mb-6">achievement details:</h1>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-gray-800 dark:text-gray-200 text-xl">{achievement.title}</h2>
            <span className="text-md text-gray-500 dark:text-gray-400">{achievement.date}</span>
          </div>
          <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base md:text-lg">{achievement.description}</p>
          <button onClick={onBack} className="mt-4 text-blue-500 hover:text-gray-600 dark:hover:text-gray-400 text-sm sm:text-base">
            go back
          </button>
        </main>
      </div>
    </motion.div>
  );
};

export default AchievementDetails;
