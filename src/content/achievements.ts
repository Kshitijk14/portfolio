interface AchievementItem {
    id: string;
    title: string;
  }
  
  const achievements: AchievementItem[] = [
    { id: "1", title: "judged hack @ bvp hex'24" },
    { id: "2", title: "top 30 @ national ai challenge" },
  ];
  
  export const achievementDetails: Record<string, { title: string; date: string; description: string }> = {
    "1": {
      title: "judged hack @ bvp hex'24",
      date: "nov 2024",
      description: "judged & mentored 30+ teams to build innovative solutions using AI, blockchain, and IoT.",
    },
    "2": {
      title: "top 3 0 @ national ai challenge",
      date: "june 2024",
      description: "developed an innovative AI-driven fraud detection system with deep learning and blockchain.",
    },
  };
  
  export default achievements;
  