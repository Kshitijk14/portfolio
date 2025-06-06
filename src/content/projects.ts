interface sProject {
    id: string;
    title: string;
    descriptions: string[];
    skills: string[];
    viewLink: string;
    githubLink: string;
}

export const seriousProjects: sProject[] = [
    { 
        id: '1', 
        title: 'cloudy (research project)', 
        descriptions: [
            'early cloudburst predetermination system ',
            'signal decomposition: transforming the original signal using EEMD (Empirical Mode Decomposition) into multiple IMFs (Intrinsic Mode Functions)',
            'feature extraction: by identifying different frequency components from each IMFs using FCR (Fine to coarse reconstruction)',
            'integrated hardware for real-time data: ESP32 with DHT11 & beta rain sensor',
            'data pre-processing: datetime transformations, cyclic/seasonal features, sliding window', 
            'prediction pipeline: LSTM, GRU, CNN-1D, & TFT (Temporal Fusion Transformer)',
            'model evaluation: MSE, MAE, RMSE, FALSE NEGATIVE RATE, and F1-score',
            'model re-training: DVC',
            'model deployment: Flask, Docker',
        ],
        skills: [
            'Python', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Keras', 'HuggingFace Transformers', 'LangChain', 'Firebase',
        ],
        viewLink: 'https://github.com/Kshitijk14/cloud-burst', 
        githubLink: 'https://github.com/Kshitijk14/model-cloud-burst' 
    },
    { 
        id: '2', 
        title: 'adaptive rag for enterprise support systems (research project)', 
        descriptions: [
            'low-latency, high-accuracy RAG system for enterprise query resolution',
            'semantic search: SBERT embeddings + FAISS dense retrieval + ChromaDB vector store',
            'contextual response generation: BART/T5 with document re-ranking, & retrieval + hallucination grading',
            'processed 1K+ agricultural/sustainable energy related docs & 200+ queries using spaCy & Tesseract OCR',
            'outperformed GPT-3.5, BART-only, and BM25 baselines on F1, ROUGE-L, BLEU, and Faithfulness',
            'reduced response latency by 28% (~620 ms/query)',
            'pipeline orchestration & deployment: LangChain, FastAPI, DVC, Docker',
            'NOT YET DEPLOYED......',
        ],
        skills: [
            'Python', 'Pandas', 'spaCy', 'Tesseract OCR', 'PyTorch', 'HuggingFace Transformers', 'Sentence Transformers', 'FAISS', 'LangChain', 'FastAPI', 'Docker', 'DVC'
        ],
        viewLink: '#', 
        githubLink: 'https://github.com/Kshitijk14/rag_for_query_resolution' 
    },
];


interface mProject {
    id: string;
    title: string;
    descriptions: string;
    skills: string[];
    viewLink: string;
    githubLink: string;
}

export const mehhProjects: mProject[] = [
    {
        id: '1',
        title: 'coccidiosis detection in chickens',
        descriptions: 'Built a CNN model using VGG16 (transfer learning) to detect coccidiosis from chicken fecal images. Pre-processed data with augmentation and normalization, managed configs via YAML & logging, and deployed with Flask, Docker, and CI/CD using GitHub Actions.',
        skills: [
            'Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'ImageDataGenerator', 'DVC', 'Flask', 'Docker', 'GitHub Actions'
        ],
        viewLink: '#',
        githubLink: 'https://github.com/Kshitijk14/coccidiosis-disease-classification'
    },
    { 
        id: '2', 
        title: 'updated portfolio (2025)', 
        descriptions: 'Used T3-Stack, to use the versatile serverless capabilities of Next.js along with freedom of mono-repo. Now, implementing an Admin Portal for updating data directly in the database.',
        skills: [
            'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Monorepo-TurboRepo', 'Vercel',
        ],
        viewLink: 'https://kshitijj.netlify.app/',
        githubLink: 'https://github.com/Kshitijk14/portfolio' 
    },
    { 
        id: '3', 
        title: 'my old portfolio (2024)', 
        descriptions: 'not importing all of that here again...., old projects are mentioned there.',
        skills: [
            'React.js', 'Chakra UI', 'Markdown It', 'Framer Motion'
        ],
        viewLink: 'https://kshitij-chaturvedi.netlify.app/',
        githubLink: 'https://github.com/Kshitijk14/portfolio2024' 
    },
];


interface osProject {
    id: string;
    title: string;
    organization: string;
    descriptions: string[];
    skills: string[];
    viewLink: string;
    githubLink: string;
}

export const openSourceProjects: osProject[] = [
    { 
        id: '1', 
        title: 'ai hawk', 
        organization: '??',
        descriptions: [
            'tailored auto applier for linkedin jobs.',
            'still working........no progress yet!!', 
        ], 
        skills: [
            'Python', 'Tensorflow', 'Selenium', 'Open-Ai', 'Langchain'
        ],
        viewLink: 'https://github.com/feder-cr/Jobs_Applier_AI_Agent_AIHawk', 
        githubLink: '#' 
    },
    { 
        id: '2', 
        title: 'product 3d', 
        organization: 'GSSOC-23',
        descriptions: [
            'contributed in adding new features.', 
            'primarily focused on UI/UX enhancements.', 
        ], 
        skills: [
            'React', 'Tailwind CSS'
        ],
        viewLink: '#', 
        githubLink: '#' 
    },
];