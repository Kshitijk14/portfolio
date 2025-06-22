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
            'early cloudburst predetermination system',
            'signal decomposition: transforming the original signal using EEMD (Empirical Mode Decomposition) into multiple IMFs (Intrinsic Mode Functions)',
            'feature extraction: by identifying different frequency components from each IMFs using FCR (Fine to coarse reconstruction)',
            'integrated hardware for real-time data: ESP32 with DHT11 & beta rain sensor',
            'data pre-processing: datetime transformations, cyclic/seasonal features, sliding window', 
            'prediction pipeline: LSTM, GRU, CNN-1D, & TFT (Temporal Fusion Transformer)',
            'model evaluation: MSE, MAE, RMSE, FALSE NEGATIVE RATE, and F1-score',
            'model re-training: DVC',
            'NOT YET DEPLOYED......',
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
            'semantic search: SBERT embeddings + FAISS dense retrieval & vector store',
            'contextual response generation: Llama3.2 2B with document re-ranking, & retrieval + hallucination grading',
            'processed 1K+ agricultural/sustainable energy related docs & 100+ queries using spaCy & Tesseract OCR',
            'outperformed baselines (like GPT-3.5, BART-only, TF-IDF, and BM25) on F1, ROUGE-L, BLEU, and Faithfulness',
            'reduced response latency by 28% (~620 ms/query)',
            'pipeline orchestration & re-training: LangChain, FastAPI, DVC',
            'NOT YET DEPLOYED......',
        ],
        skills: [
            'Python', 'Pandas', 'spaCy', 'Tesseract OCR', 'PyTorch', 'HuggingFace Transformers', 'Sentence Transformers', 'ChromaDB', 'FAISS', 'LangChain', 'FastAPI', 'Docker', 'DVC'
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
        title: 'corrective rag with adaptive retrieval',
        descriptions: 'Built an advanced Corrective RAG system implementing adaptive retrieval with document grading, hallucination detection, and web search fallback. Features LangGraph workflow orchestration, FireCrawl web scraping, Tavily search integration, and GPT4All embeddings. Includes comprehensive grading pipeline to assess document relevance and answer quality with automatic correction mechanisms.',
        skills: [
            'Python', 'LangGraph', 'LangChain', 'Transformers', 'PyTorch', 'Tavily API', 'FireCrawl', 'GPT4All', 'Ollama', 'Llama 3.2', 'ChromaDB', 'Hallucination Detection', 'Document Grading', 'Web Search Integration', 'LangSmith'
        ],
        viewLink: '#',
        githubLink: 'https://github.com/Kshitijk14/corrective_rag_ex'
    },
    {
        id: '2',
        title: 'repopulation rag with evaluation pipeline',
        descriptions: 'Developed a comprehensive RAG system with dynamic database updates and extensive evaluation metrics. Implemented retrieval evaluation (MRR, nDCG@k, Precision@k, Recall@k) and generation metrics (F1, EM, ROUGE-L, BLEU, Faithfulness). Used BGE embeddings and Llama 3.2 3B for generation with automated testing and performance benchmarking.',
        skills: [
            'Python', 'LangChain', 'ChromaDB', 'Hugging Face', 'Ollama', 'PyMuPDF', 'Pytest', 'SentenceTransformer', 'Transformers', 'PyTorch', 'YAML', 'BGE Embeddings', 'Llama 3.2'
        ],
        viewLink: '#',
        githubLink: 'https://github.com/Kshitijk14/rag_ex2'
    },
    {
        id: '3',
        title: 'vanilla rag (retrieval augmented generation)',
        descriptions: 'Built a Retrieval-Augmented Generation (RAG) system that processes markdown documents, creates vector embeddings using SentenceTransformer, and stores them in ChromaDB. Features document chunking, similarity search, and automated workflow with comprehensive logging and error handling.',
        skills: [
            'Python', 'LangChain', 'Unstructured-Markdown', 'ChromaDB', 'SentenceTransformer', 'Transformers', 'PyTorch', 'Pandas', 'Matplotlib', 'Seaborn', 'YAML', 'Streamlit'
        ],
        viewLink: '#',
        githubLink: 'https://github.com/Kshitijk14/rag_ex'
    },
    {
        id: '4',
        title: 'hindi speech emotion recognition',
        descriptions: 'Built a comprehensive emotion recognition system for Hindi speech using MFCC feature extraction and multiple ML/DL models. Implemented data augmentation techniques (pitch shifting, time-stretching, noise addition) to address dataset limitations. Developed comparative analysis across CNN, MLP, Random Forest, and KNN models, achieving 64% accuracy with Random Forest. Created Streamlit web application for real-time emotion prediction with MFCC visualization.',
        skills: [
            'Python', 'Speech Processing', 'MFCC', 'CNN', 'Random Forest', 'KNN', 'MLP', 'Data Augmentation', 'Streamlit', 'Audio Signal Processing', 'Feature Engineering', 'Model Comparison', 'Hindi NLP'
        ],
        viewLink: '#',
        githubLink: 'https://github.com/Kshitijk14/hindi-speech-emotion-recognition'
    },
    {
        id: '5',
        title: 'cattle CVD detection via retina image classification',
        descriptions: 'Developed a deep learning system to detect cardiovascular disease in cattle through retina image analysis. Implemented advanced preprocessing pipeline with green channel extraction, CLAHE, and vessel enhancement. Built ResNet101-based classifier with Grad-CAM interpretability, DVC pipeline management, and Flask web interface. Achieved model deployment with Docker containerization despite addressing complex class imbalance challenges.',
        skills: [
            'Python', 'TensorFlow', 'Keras', 'CNN', 'ResNet50v2', 'VGG16', 'ResNet101', 'CLAHE', 'Grad-CAM', 'DVC', 'Flask', 'Docker', 'TensorBoard', 'Computer Vision'
        ],
        viewLink: '#',
        githubLink: 'https://github.com/Kshitijk14/cattle-cvd-via-retina-imgs'
    },
    {
        id: '6',
        title: 'coccidiosis detection in chickens',
        descriptions: 'Built a CNN model using VGG16 (transfer learning) to detect coccidiosis from chicken fecal images. Pre-processed data with augmentation and normalization, managed configs via YAML & logging, and deployed with Flask, Docker, and CI/CD using GitHub Actions.',
        skills: [
            'Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'ImageDataGenerator', 'DVC', 'Flask', 'Docker', 'GitHub Actions'
        ],
        viewLink: '#',
        githubLink: 'https://github.com/Kshitijk14/coccidiosis-disease-classification'
    },
    { 
        id: '7', 
        title: 'updated portfolio (2025)', 
        descriptions: 'Used T3-Stack, to use the versatile serverless capabilities of Next.js along with freedom of mono-repo. Now, implementing an Admin Portal for updating data directly in the database.',
        skills: [
            'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Monorepo-TurboRepo', 'Vercel',
        ],
        viewLink: 'https://kshitijj.netlify.app/',
        githubLink: 'https://github.com/Kshitijk14/portfolio' 
    },
    { 
        id: '8', 
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
            'tailored application agent for linkedin jobs.',
            'still working on it........will update soon!!', 
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