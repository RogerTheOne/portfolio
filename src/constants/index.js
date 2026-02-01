export const myProjects = [
  {
    id: 1,
    title: "ShopSphere",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Developed a full stack ready front-end SPA for an online retail platform using Vue 3, Vite, and Pinia, implementing reusable and modular components for the home, category, product detail, and checkout pages.",
      "Integrated Axios-based RESTful APIs with centralized state management, improving data consistency and enabling smooth category and product data rendering.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "Vue",
        path: "/assets/logos/vue-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node-js-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript-16-svgrepo-com.png",
      },
      {
        id: 4,
        name: "SCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "VueHRM",
    description:
      "",
    subDescription: [
      "Developed a modular enterprise management platform based on Vue 3 Composition API and TypeScript, implementing Vue Router and centralized state control.",
      "Designed an accessible SCSS-based UI using Element Plus and ECharts, enabling real-time employee analytics visualization with dynamic chart rendering and data filtering.",
      "Built a robust Axios network layer with request/response interceptors, unified API management and integration.",
      "Integrated JEST testing framework for component validation and established a complete linting & CI workflow to enforce code quality and version consistency.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/vite.png",
    tags: [
      {
        id: 1,
        name: "Vue",
        path: "/assets/logos/vue-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 4,
        name: "Axios",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "NutriSnap",
    description:
      "",
    subDescription: [
      "Architected a mobile-to-cloud image processing pipeline where food photos captured on the client are uploaded to a RESTful backend, returned as structured nutrition data, validating end-to-end feasibility through a working proof-of-concept.",
      "Designed the backend service using Flask to handle image ingestion, preprocessing, and ML inference orchestration, separating concerns between API routing, image handling, and model logic to ensure extensibility toward production-scale deployment.",
      "Defined a scalable cloud architecture aligned with AWS infrastructure constraints.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/snap.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "AWS",
        path: "/assets/logos/aws-svgrepo-com.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
 
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/roger-zhang-78203b246/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rzsniper_pulse/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    job: "Health Institution",
    date: "2024.5-2024.8",
    contents: [
      "Built modular appointment and intake form components in Vue 3 + TypeScript using reusable inputs and shared validation rules to improve consistency and maintainability.",
      "Implemented client-side validation, conditional field rendering, and submission state handling to prevent invalid or incomplete appointment requests.",
      "Worked with administrative users to iterate on intake workflows and UI behavior, improving successful submission rates and reducing manual follow-up.",
      
    ],
  },
  {
    title: "Project Intern",
    job: "Automotive Manufacture",
    date: "2023.5-2023.8",
    contents: [
      "Coordinated feature development across frontend and backend teams by defining requirements, tracking implementation progress, and validating delivered functionality against specifications.",
      "Worked closely with UX designers to translate Figma wireframes into functional interfaces, aligning with automotive HMI design standards.",
      "Established lightweight validation and verification workflows and maintained version control using GitHub to ensure traceability and quality.",
      
    ],
  },
  {
    title: "English Instructor",
    job: "International Language School",
    date: "2020.11-2021.5",
    contents: [
      "Delivered structured English instruction to international high school students, adapting communication styles to support diverse learning needs.",
      "Managed multiple students and lesson plans concurrently, demonstrating strong organizational skills and the ability to multitask in a fast-paced environment. enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
      "Built strong relationships with students and parents through clear communication and continuous feedback, improving engagement and learning outcomes.",
    ],
  },
];
