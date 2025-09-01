interface ExperienceItem {
    id: string;
    title: string;
    company: string;
}

export const experiences: ExperienceItem[] = [
    { id: '1', title: 'ai/ml engineer', company: 'le quirks' },
    { id: '2', title: 'data analyst intern', company: 'dlc group' },
    { id: '3', title: 'research analyst intern', company: 'rau`s ias' },
    { id: '4', title: 'sde intern', company: 'syntheim' },
    { id: '5', title: 'backend intern', company: 'creative ai solutions' },
];

export const experienceDetails: Record<string, { 
    title: string; company: string; duration: string; descriptions: string[], skills?: string[]
}> = {
    '1': {
        title: 'ai/ml engineer',
        company: 'le quirks',
        duration: 'aug 2025 - present',
        descriptions: [
            'rag that talks to databases in plain english (aka natural lingo.) so no one has to write scary sql anymore (i don\'t like it)',
            'cooked up a rag-sql agent on top of dusty old oracle systems (azure hosted) and somehow cut manual query work by 50%+, also saving 40% ops cost without migrating a thing',
            '→ they have to manage less humans now (not that i hate humans)',
            'built a retail demand forecasting pipeline with xgboost, lstms, grus and some attention magic; turns out signal decomposition + xgboost was the winning combo, chopping mape by 15%',
        ],
        skills: [
            'Tensorflow', 'SBERT', 'Chroma', 'Azure Cosmos DB', 'Qwen3', 'Hugging Face Transformers', 'PyTorch', 'LlamaIndex', 'LlamaParse', 'FastAPI', 'DVC', 'Azure Ai Foundry',
        ],
    },
    '2': {
        title: 'data analyst intern',
        company: 'dlc group of companies',
        duration: 'jan 2025 - april 2025',
        descriptions: [
            'collected, cleaned and wrangled data to build regression and time-series models that guessed sales and occupancy trends (aka crystal ball for planning)',
            'played around with stats and shaved off 30 mins of query crunching every single day',
            'built an adaptive rag system with sbert, faiss, llama 3.2 and tavily web search that handled queries on its own and made the team 60% faster', 
            'deployed it locally, i.e. use it offline (tavily won\'t work that Waypoints, but sure)', 
            'added re-ranking, a hallucination checker and some nerdy metrics like bleu, rouge-l, f1 and faithfulness to keep the system honest',
        ],
        skills: [
            'SQL', 'Numpy', 'PyTorch', 'SBERT', 'HuggingFace Transformers', 'FAISS', 'LangChain', 'LangGraph', 'FastAPI', 'Docker', 'DVC'
        ],
    },
    '3': {
        title: 'data analyst intern',
        company: 'rau`s ias study circle',
        duration: 'jul 2024 - aug 2024',
        descriptions: [ 
            'wrangled 20k+ rows of weekly student data to spot who’s dropping out and who’s sticking around across 15+ subjects',
            'poked around with queries, regressions, and hypothesis tests until patterns started showing up',
            '→ found a 25% boost in retention when certain faculty strategies kicked in, cue more case-study based teaching',
            '→ & also noticed students juggling 3+ subjects had a 40% higher dropout rate, so we cooked up personalized learning paths to keep them afloat (i fixed it)',
        ],
        skills: [
            'SQL', 'Python', 'Numpy', 'Pandas', 'Scipy', 'Scikit-learn', 'Statsmodels', 'TensorFlow', 'Matplotlib', 'Seaborn',
        ],
    },
    '4': {
        title: 'sde intern',
        company: 'syntheim [radian arc]',
        duration: 'feb 2024 - aug 2024',
        descriptions: [
            'built a multilingual ai health assistant (yes, it speaks more languages than me)',
            'squished latency by 35% with model distillation + batching',
            'sprinkled in bleu/rouge metrics and fine-tuning feedback loops to keep answers less “hallucinate-y”',
            'wrangled an army of 8 devs (we went to war, for fun) to deploy + babysit the system with logging, monitoring, and caching',
            '→ shaved off 40% of costs per query, investors happy (so they could pay me more)',
        ],
        skills: [
            'Python', 'Numpy', 'Pandas', 'SciPy', 'SpaCy', 'PyTorch', 'NLTK', 'HuggingFace Transformers', 'LangChain', 'OpenAI', 'API', 'Flask', 'React Native', 'Docker',
        ],
    },
    '5': {
        title: 'backend intern',
        company: 'creative ai solutions [nynexa]',
        duration: 'apr 2024 - may 2024',
        descriptions: [
            'coded a scalable backend for an ai/web3 marketplace at an incubation startup (aka duct tape + caffeine edition)',
            'slapped on a monorepo with turborepo, plus restful apis + websockets for real-time vibes',
            'went on a db optimization (side-quests):', 
            '→ rewrote queries, tuned indexes → ended up cutting response times in half',
            'dropped in ai dev tools to auto-review, doc, test, and deploy stuff (made them buy some things for me too, hehe)',
            '→ cleaner code, 30% faster launches, and fewer sleepless nights',
        ],
        skills: [
            'Next.js', 'Next-Auth', 'Tailwind CSS', 'Framer Motion', 'Monorepo - TurboRepo', 'RESTful APIs', 'WebSockets', 'Socket.IO', 'MongoDB', 'Prisma', 'Vercel',
        ],
    },
};