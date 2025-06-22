interface AchievementItem {
    id: string;
    title: string;
  }
  
  const achievements: AchievementItem[] = [
    { id: "1", title: "judged hack @ bvp hex'24" },
    { id: "2", title: "qualified in SIH'23 & 24" },
    { id: "3", title: "leadership roles @ ecell & swaranjali" },
    // { id: "4", title: "judged western solo @ bvp 2025" },
  ];
  
  export const achievementDetails: Record<string, { title: string; date: string; description: string }> = {
    "1": {
      title: "judged hackathon @ bvp hex'24",
      date: "nov 2024",
      description: "judged & mentored 50+ teams to build innovative solutions using AI, blockchain, and IoT.",
    },
    "2": {
      title: "qualified in SIH'23 & 24",
      date: "2023 - 2024",
      description: "designed & developed a novel approach using signal decomposition, deep neural networks, transformers, & IOT sensors to predetermine cloudbursts, enhancing disaster preparedness and response.",
    },
    "3": {
      title: "leadership roles @ ecell & swaranjali",
      date: "2022 - 2024",
      description: "management head & sponsorship lead at enterpreneurship cell. instrumental head, treasurer & sponsorship lead @ swaranjali",
    },
    // "4": {
    //   title: "judged western solo @ bvp cultural amalgam 2025",
    //   date: "jan 2025",
    //   description: "judged the western solo singing competition",
    // },
  };
  
  export default achievements;
  