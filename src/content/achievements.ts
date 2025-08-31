interface AchievementItem {
    id: string;
    title: string;
  }
  
  const achievements: AchievementItem[] = [
    { id: "1", title: "ai consultant/advisor" },
    { id: "2", title: "judged hack @ bvp hex'24" },
    { id: "3", title: "qualified in SIH'23 & 24" },
    { id: "4", title: "leadership roles @ ecell & swaranjali" },
    { id: "5", title: "judged western solo @ bvp 2025" },
  ];
  
  export const achievementDetails: Record<string, { title: string; date: string; description: string }> = {
    "1": {
      title: "ai consultant/advisor",
      date: "jun 2025 - aug 2025",
      description: "helped 6+ startups trim 30% processing bloat & add $500K+ in revenue in just 2 months (returns baby)",
    },
    "2": {
      title: "judged hackathon @ bvp hex'24",
      date: "nov 2024",
      description: "mentored 50+ teams hacking on ai, blockchain & iot, basically tech soup with extra chaos",
    },
    "3": {
      title: "qualified in SIH'23 & 24",
      date: "2023 - 2024",
      description: "made up a cloudburst prediction system with signal decomposition, dnns, transformers & iot sensors, weather got nothing on me (it does)",
    },
    "4": {
      title: "leadership roles @ ecell & swaranjali",
      date: "2022 - 2024",
      description: "ran sponsorships & mgmt @ ecell, & played in bands + handled the money @ swaranjali (startup + credit card + band arc)",
    },
    "5": {
      title: "judged western solo",
      date: "jan 2025",
      description: "got to judge a western solo at bvp cultural amalgam 2025",
    },
  };
  
  export default achievements;
  