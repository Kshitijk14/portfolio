interface ExperienceItem {
    id: string;
    title: string;
    company: string;
}

export const experiences: ExperienceItem[] = [
    { id: '1', title: 'sde intern', company: 'syntheim' },
    { id: '2', title: 'backend intern', company: 'creative ai solutions' },
];

export const experienceDetails: { [key: string]: { title: string; company: string; duration: string; description: string } } = {
    '1': {
        title: 'sde intern',
        company: 'syntheim [radian arc]',
        duration: 'feb 2024 - aug 2024',
        description: 'contributed in developing an ai-driven health app incorporating ML & NLP with libraries like Numpy, Pandas, Scipy, Scikit-Learn, TensorFlow, SpaCy, NLTK, Open-Ai, & Flask. led an 8 devs team & implemented a virtual-assistant for personalized + multilingual responses.',
    },
    '2': {
        title: 'backend intern',
        company: 'creative ai solutions [nynexa]',
        duration: 'apr 2024 - may 2024',
        description: 'coded a scalable backend infra. for an ai/web3 marketplace with NextJS, Tailwind CSS, MonoRepo - TurboRepo, MongoDB, & Prisma.',
    },
};