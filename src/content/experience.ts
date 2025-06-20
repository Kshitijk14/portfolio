interface ExperienceItem {
    id: string;
    title: string;
    company: string;
}

export const experiences: ExperienceItem[] = [
    { id: '1', title: 'data analyst intern', company: 'dlc group' },
    { id: '2', title: 'data analyst intern', company: 'rau`s ias' },
    { id: '3', title: 'sde intern', company: 'syntheim' },
    { id: '4', title: 'backend intern', company: 'creative ai solutions' },
];

export const experienceDetails: Record<string, { 
    title: string; company: string; duration: string; descriptions: string[], skills?: string[]
}> = {
    '1': {
        title: 'data analyst intern',
        company: 'dlc group of companies',
        duration: 'jan 2025 - april 2025',
        descriptions: [
            'collected, cleaned, & transformed data to build regression & time series models for trend prediction in sales & occupancy, enabling better strategic planning.',
            'applied statistical analysis & reduced query processing time, saving 30 mins. of computation every day.', 
            'built & deployed an Adaptive-RAG system (SBERT + FAISS db + Llama3.2 + Tavily Web Search)', 
            '→ automating query resolution & boosting team efficiency by 60%+, resulting in faster conversion rates.', 
            '→ integrated document re-ranking & grading with a hallucination grader, & tracked BLEU, ROUGE-L, F1, & faithfulness to evaluate generation quality & retrieval accuracy.',
        ],
        skills: [
            'SQL', 'Python', 'Numpy', 'Pandas', 'Scipy', 'Scikit-learn', 'Statsmodels', 'PyTorch', 'HuggingFace Transformers', 'LangChain', 'LangGraph', 'FastAPI', 'Docker', 'DVC'
        ],
    },
    '2': {
        title: 'data analyst intern',
        company: 'rau`s ias study circle',
        duration: 'jul 2024 - aug 2024',
        descriptions: [ 
            'cleaned & analyzed 20k+ weekly student data to identify key dropout & retention trends across 15+ subjects.',
            'queried & aggregated academic records, & then applied regression analysis & hypothesis testing',
            '→ revealing a 25% higher retention rate linked to specific faculty strategies, which directly shaped the curriculum planning to more case-study-based practice.',
            '→ & a 40% higher dropout rate linked in more than 3 subjects, which led to the development of a personalized learning path for students.',
        ],
        skills: [
            'SQL', 'Python', 'Numpy', 'Pandas', 'Scipy', 'Scikit-learn', 'Statsmodels', 'TensorFlow', 'Matplotlib', 'Seaborn',
        ],
    },
    '3': {
        title: 'sde intern',
        company: 'syntheim [radian arc]',
        duration: 'feb 2024 - aug 2024',
        descriptions: [
            'built a multilingual AI health assistant', 
            '→ reducing response latency by 35% via model distillation & batching.', 
            '→ optimized quality using metrics like BLEU/ROUGE & feedback-driven fine-tuning.',
            'led 8 developers to deploy & optimize the system, using logging, monitoring, & caching', 
            '→ which helped in cutting the costs down by 40% per user query.',
        ],
        skills: [
            'Python', 'Numpy', 'Pandas', 'SciPy', 'SpaCy', 'PyTorch', 'NLTK', 'HuggingFace Transformers', 'LangChain', 'OpenAI', 'API', 'Flask', 'React Native', 'Docker',
        ],
    },
    '4': {
        title: 'backend intern',
        company: 'creative ai solutions [nynexa]',
        duration: 'apr 2024 - may 2024',
        descriptions: [
            'coded a scalable backend infra. for an ai/web3 marketplace in an incubation startup.',
            'introduced monorepo structure using TurboRepo for better code management & upgradeability.',
            'used RESTful APIs & WebSocket connections for real-time data exchange, enabling seamless user interactions.',
            'optimized db queries & indexing strategies:', 
            '→ reducing query processing& response time by 50%',
            '→ focused on 2 areas: refine queries, analyze execution plans', 
            '→ then fine-tune indexes on frequently accessed fields → faster data location & response times',
            'introduced ai dev tools, for automating code reviews, documentation, testing, & deployment processes.',
            '→ improving code quality & reducing deployment time by 30%.',
        ],
        skills: [
            'Next.js', 'Next-Auth', 'Tailwind CSS', 'Framer Motion', 'Monorepo - TurboRepo', 'RESTful APIs', 'WebSockets', 'Socket.IO', 'MongoDB', 'Prisma', 'Vercel',
        ],
    },
};