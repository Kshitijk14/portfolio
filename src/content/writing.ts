interface Category {
    id: string;
    title: string;
}

export const categories: Category[] = [
    { id: 'research-paper', title: 'research papers' },
    { id: 'technical-blog', title: 'technical blogs' },
    // { id: 'thoughts-and-ideas', title: 'thoughts and ideas' },
];

interface Post {
    id: string;
    title: string;
    descriptions: string;
    readLink: string;
}

export const researchPapers: Post[] = [
    { 
        id: '1', 
        title: 'early cloudburst prediction system using time series forecasting', 
        descriptions: '[working on it]....', 
        readLink: '#' 
    },
];

interface Post {
    id: string;
    title: string;
    descriptions: string;
    readLink: string;
}

export const technicalBlogPosts: Post[] = [
    { 
        id: '1', 
        title: 'neural network input layer in is doesn\'t have any neurons', 
        descriptions: '[yes correct, it doesn\'t have any neurons]......', 
        readLink: '#' 
    },
    { 
        id: '2', 
        title: 'the future of tech with rise of ai', 
        descriptions: '[what\'s gonna happen in 2025 to the tech market]....', 
        readLink: '#' 
    },
];

// interface Post {
//     id: string;
//     title: string;
//     descriptions: string;
//     readLink: string;
// }

// export const thoughtsAndIdeas: Post[] = [
//     { 
//         id: '1', 
//         title: 'the future of tech with rise of ai', 
//         descriptions: '[what\'s gonna happen in 2025 to the tech market]....', 
//         readLink: '#' 
//     },
// ];