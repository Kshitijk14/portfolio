interface ExperienceItem {
    id: string;
    title: string;
    company: string;
}

export const experiences: ExperienceItem[] = [
    { id: '1', title: 'data analyst intern', company: 'dlc group' },
    { id: '2', title: 'data analyst intern', company: 'rau`s ias' },
    { id: '3', title: 'backend intern', company: 'creative ai solutions' },
    { id: '4', title: 'sde intern', company: 'syntheim' },
];

export const experienceDetails: Record<string, { title: string; company: string; duration: string; description: string }> = {
    '1': {
        title: 'data analyst intern',
        company: 'dlc group of companies',
        duration: 'jan 2025 - april 2025',
        description: 'built ML pipelines for sales/occupancy trends & a RAG system (SBERT + FAISS + BART/T5) for automated query resolution using LangChain, FastAPI, & Docker.',
    },
    '2': {
        title: 'data analyst intern',
        company: 'rau`s ias study circle',
        duration: 'jul 2024 - aug 2024',
        description: 'worked on data preparation and cleaning using SQL and Python. Conducted statistical modeling to analyze patterns in student retention across different subjects and faculty members using Numpy, Pandas, SciPy, Scikit-Learn, Tensorflow, Matplotlib, Seaborn, & Statsmodels.',
    },
    '3': {
        title: 'backend intern',
        company: 'creative ai solutions [nynexa]',
        duration: 'apr 2024 - may 2024',
        description: 'coded a scalable backend infra. for an ai/web3 marketplace with NextJS, Tailwind CSS, MonoRepo - TurboRepo, MongoDB, & Prisma.',
    },
    '4': {
        title: 'sde intern',
        company: 'syntheim [radian arc]',
        duration: 'feb 2024 - aug 2024',
        description: 'contributed in developing an ai-driven health app incorporating ML & NLP with libraries like Numpy, Pandas, Scipy, Scikit-Learn, TensorFlow, SpaCy, NLTK, Open-Ai, & Flask. led an 8 devs team & implemented a virtual-assistant for personalized + multilingual responses.',
    },
};