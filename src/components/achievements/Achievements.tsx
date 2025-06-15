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
        <section className="relative mb-10">
            <h3 className="text-2xl mb-4">achievements</h3>
            <ul className="space-y-3 text-sm sm:text-base md:text-lg text-left">
                {achievementsData.map((achievement) => (
                <li key={achievement.id}>
                    <button onClick={() => setSelectedAchievement(achievement)} className="hover:text-gray-600">
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
