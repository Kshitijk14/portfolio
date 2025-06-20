"use client";

import React, { useState } from "react";
import AchievementDetails from "./AchievementDetails";
import achievementsData, { achievementDetails } from "../../content/achievements";

interface AchievementItem {
    id: string;
    title: string;
}

const Achievements: React.FC = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);

    const handleBack = () => {
        setSelectedAchievement(null);
    };

    return (
        <section className="relative mb-8">
            <h3 className="text-gray-900 dark:text-gray-100 text-2xl mb-4">achievements</h3>
            <ul className="text-gray-800 dark:text-gray-200 space-y-3 text-sm sm:text-base md:text-lg text-left">
                {achievementsData.map((achievement) => (
                <li key={achievement.id}>
                    <button onClick={() => setSelectedAchievement(achievement)} className="hover:text-gray-600 dark:hover:text-gray-400">
                    • {achievement.title}
                    </button>
                </li>
                ))}
            </ul>

            {selectedAchievement && (
                <AchievementDetails
                achievement={achievementDetails[selectedAchievement.id]!}
                onBack={handleBack}
                />
            )}
        </section>
    );
};

export default Achievements;
