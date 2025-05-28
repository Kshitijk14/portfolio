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
            'early cloudburst prediction system', 
            'integrated hardware for real-time data: ESP32 with DHT11 & beta rain sensor',
            'data pre-processing: datetime transformations, cyclic/seasonal features, sliding window', 
            'prediction pipeline: LSTM, GRU, and CNN',
            'model evaluation: MSE, MAE, RMSE, FALSE NEGATIVE RATE',
            'model re-training: DVC',
            'model deployment: Flask, Docker',
        ],
        skills: [
            'Python', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras', 'Firebase',
        ],
        viewLink: 'https://github.com/Kshitijk14/cloud-burst', 
        githubLink: 'https://github.com/Kshitijk14/model-cloud-burst' 
    },
    { 
        id: '2', 
        title: 'coccidiosis detection in chickens', 
        descriptions: [
            'disease detection using chicken\'s fecal images', 
            'data pre-processing: img augmentation, normalization, & resizing using `ImageDataGenerator`',
            'base model(transfer learning): VGG16',
            'config. mgmt.: yaml, logging',
            'model training: CNN', 
            'model evaluation: accuracy, precision, recall, F1-score',
            'model re-training: DVC',
            'model deployment: Flask, Docker, CI/CD, GitHub Actions',
        ],
        skills: [
            'Python', 'Numpy', 'Pandas', 'Scipy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras', 
        ],
        viewLink: '#', 
        githubLink: 'https://github.com/Kshitijk14/coccidiosis-disease-classification' 
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
        title: 'updated portfolio (2025)', 
        descriptions: 'Used T3-Stack, to use the versatile serverless capabilities of Next.js along with freedom of mono-repo. Now, implementing an Admin Portal for updating data directly in the database.',
        skills: [
            'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Monorepo-TurboRepo', 'Vercel',
        ],
        viewLink: 'https://kshitijj.netlify.app/',
        githubLink: 'https://github.com/Kshitijk14/portfolio' 
    },
    { 
        id: '2', 
        title: 'my old portfolio (2024)', 
        descriptions: 'not importing all of that here again...., old projects are mentioned there.',
        skills: [
            'React.js', 'Chakra UI', 'Markdown It', 'Framer Motion'
        ],
        viewLink: 'https://kshitij-chaturvedi.netlify.app/',
        githubLink: 'https://github.com/Kshitijk14/portfolio2024' 
    },
];