interface Category {
    id: string;
    title: string;
}

export const categories: Category[] = [
    { id: 'research-paper', title: 'research papers' },
    { id: 'technical-blog', title: 'blogs' },
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
        title: 'how signal decomposition affects early cloudburst predeterminations', 
        descriptions: '[trust me, it\'s almost ready]....', 
        readLink: '#' 
    },
    { 
        id: '2', 
        title: 'optimizing adaptive rag for enterprise support systems, with budgeted compute', 
        descriptions: 'slm evals & thingies.....', 
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
        title: 'simplify your digital life with file organizer', 
        descriptions: 'Ever found yourself drowning in a sea of unorganized files?......', 
        readLink: 'https://kshitiijj.medium.com/simplify-your-digital-life-with-file-organizer-6eba5228db0e' 
    },
    { 
        id: '2', 
        title: 'neural network input layer doesn\'t have any neurons', 
        descriptions: '[writing as soon as i stop being lazy]......', 
        readLink: '#' 
    },
];
