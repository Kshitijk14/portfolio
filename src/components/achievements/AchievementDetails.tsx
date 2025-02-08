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
      className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm z-50"
      onClick={onBack}
    >
      <div
        className="bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-4xl mx-auto font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        <main className="mt-2">
          <h1 className="text-2xl mb-6">achievement details:</h1>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl">{achievement.title}</h2>
            <span className="text-md text-gray-500">{achievement.date}</span>
          </div>
          <p className="text-md">{achievement.description}</p>
          <button onClick={onBack} className="mt-4 text-blue-500 hover:text-gray-600">
            go back
          </button>
        </main>
      </div>
    </motion.div>
  );
};

export default AchievementDetails;
