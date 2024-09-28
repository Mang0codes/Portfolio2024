import { Tag } from './tags'

export enum Status {
    InProgress = 'in-progress',
    Completed = 'completed',
    OnHold = 'on-hold',
    Cancelled = 'cancelled',
}

export const statuses = [
    { id: Status.InProgress, label: { en: 'In progress', fr: 'En cours', } },
    { id: Status.Completed, label: { en: 'Completed', fr: 'Terminé', } },
    { id: Status.OnHold, label: { en: 'On hold', fr: 'En pause', } },
    { id: Status.Cancelled, label: { en: 'Cancelled', fr: 'Annulé', } },
]

export const projects: Content.Project[] = [
    {
        name: 'LikhoDaily',
        description: {
            en: "A simple blogging app where users can create, edit, and manage their posts, with the ability to update their profile and interact with comments. The app offers secure user authentication to ensure safe login and content management.",
            fr: "",
        },
        imageUrl: 'https://tscord.discbot.app/img/tscord-template-icon.png',
        tags: [Tag.Personal, Tag.Web],
        status: Status.Completed,
        year: '2023',
        technologies: ['typescript', 'nodejs', 'mongodb', 'express', 'postman'],
        githubUrl: 'https://github.com/Mang0codes/LikhoDaily-BloggingApp',
        demoUrl: 'https://likhodaily-bloggingapp.onrender.com/',
    },
    {
        name: 'Portfolio',
        description: {
            en: "This website was created to showcase my projects and skills. I put a lot of effort in its design.",
            fr: "",
        },
        imageUrl: '/assets/projects/portfolio.mp4',
        tags: [Tag.Personal, Tag.Web],
        status: Status.Completed,
        year: '2023',
        technologies: ['typescript', 'react', 'nextjs', 'chakra-ui', 'storybook'],
        githubUrl: 'https://github.com/Mang0codes/PersonalPortfolios',
        demoUrl: '',
    },
    {
        name: 'SyntaxHub-Online-Code-Editor',
        description: {
            en: "The Online IDE utilizes React, Vite, Chakra UI, and Monaco Editor for an advanced, responsive code editing experience. It features real-time updates with Framer Motion and integrates Axios for API requests. Vite handles development and builds, while ESLint ensures code quality. ",
            fr: "",
        },
        imageUrl: 'https://www.shutterstock.com/image-vector/illustration-colorful-lines-code-text-600nw-2327775593.jpg',
        tags: [Tag.Web, Tag.Personal],
        status: Status.Completed,
        year: '2024',
        technologies: ['react', 'vite', 'chakra-ui', 'axios'],
        githubUrl: 'https://github.com/Mang0codes/SyntaxHub-Online-Code-Editor',
        demoUrl: 'https://syntaxhub-online-code-editor.onrender.com/'
    },
    {
        name: 'Microsoft-Loop-Clone',
        description: {
            en: "The Microsoft Loop Clone replicates Microsoft Loop’s features with real-time collaboration via Liveblocks, content editing with Editor.js, and backend services from Firebase. It includes comments, notifications, and organizational tools for managing teams and projects, with authentication handled by Clerk.",
            fr: "",
        },
        imageUrl: '/assets/projects/Loopclone.mp4',
        tags: [Tag.Web, Tag.Personal],
        status: Status.Completed,
        year: '2024',
        technologies: ['nextjs', 'react', 'tailwindcss', 'radix', 'clerk', 'firebase', 'liveblock'],
        githubUrl: 'https://github.com/Mang0codes/Microsoft-Loop2.0-App',
        demoUrl: 'https://microsoft-loop2.vercel.app/'
    },
    {
        name: 'HooBank',
        description: {
            en: "A modern banking page featuring a sleek, responsive design with interactive UI elements and smooth animations. Built to enhance user experience, it offers a visually appealing interface optimized for seamless banking operations.",
            fr: "",
        },
        imageUrl: '/assets/projects/Hoobank.png',
        tags: [Tag.Web, Tag.Personal],
        status: Status.Completed,
        year: '2023',
        technologies: ['javascript', 'react', 'tailwindcss'],
        githubUrl: 'https://github.com/Mang0codes/Banking-app-Hoobank',
        demoUrl: 'https://mang0codes.github.io/Banking-app-Hoobank/'
    },
    {
        name: 'EvoGym',
        description: {
            fr: "",
            en: "Fitness app webpage. A modern, responsive fitness webpage built with React, TypeScript, Tailwind CSS, and Framer Motion. Experience smooth animations and a clean, user-friendly design tailored for fitness enthusiasts.",
        },
        imageUrl: '/assets/projects/Evogym.png',
        tags: [Tag.Personal, Tag.Web],
        status: Status.Completed,
        year: '2024',
        technologies: ['typescript', 'tailwindcss', 'react'],
        githubUrl: 'https://evogym-webpage-1.onrender.com/',
        demoUrl: 'https://evogym-webpage-1.onrender.com/',
    },
    {
        name: 'Array-utils',
        description: {
            en: "A utility package to extend JavaScript arrays with additional methods.",
            fr: "",
        },
        imageUrl: undefined,
        tags: [Tag.Personal, Tag.Library],
        status: Status.Completed,
        year: '2024',
        technologies: ['javascript', 'nodejs'],
        githubUrl: 'https://github.com/Mang0codes/array-utils',
        demoUrl: 'https://www.npmjs.com/package/mango-array-utils',
       
    },
    {
        name: 'Zod-Clone',
        description: {
            en: "A simple form and input validation library for both frontend and backend frameworks.",
            fr: "",
        },
        imageUrl: undefined,
        tags: [Tag.Personal, Tag.Library],
        status: Status.Completed,
        year: '2023',
        technologies: ['javascript', 'nodejs'],
        githubUrl: 'https://github.com/Mang0codes/form-validator',
        demoUrl: 'https://www.npmjs.com/package/form-validator-package',
    },
    {
        name: 'Product-Landing-Page',
        description: {
            en: "A modern, responsive product landing page created with HTML and CSS. It offers a sleek design that adapts to various screen sizes for a seamless user experience. With custom styling, interactive elements, and cross-browser compatibility, the page ensures both visual appeal and functionality.",
            fr: "",
        },
        imageUrl: undefined,
        tags: [Tag.Personal, Tag.Web],
        status: Status.Completed,
        year: '2023',
        technologies: ['html', 'css', 'javascript'],
        githubUrl: 'https://github.com/Mang0codes/ProductLandingPage/blob/main/index.html',
        demoUrl: 'https://mang0codes.github.io/ProductLandingPage/',
    }
]