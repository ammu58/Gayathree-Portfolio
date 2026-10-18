export interface Project {
  id: string;
  title: string;
  category: 'AI/ML & Vision' | 'Generative AI & RAG' | 'Web Engineering';
  shortDescription: string;
  problemStatement: string;
  myContribution: string;
  technologies: string[];
  keyFeatures: string[];
  architectureOverview: string;
  challengesAndLearnings: string;
  futureEnhancements: string;
  githubUrl: string;
  demoAvailable: boolean;
  demoUrl?: string;
  imageUrl: string;
  demoType: 'tryon' | 'rag' | 'ecommerce';
}

export interface Internship {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  badgeUrl?: string;
  verified: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Gayathree Singareddy',
    roleHeadline: 'Technology Intern Candidate & Emerging AI Engineer',
    subHeadline: 'B.Tech Computer Science & Engineering (Artificial Intelligence) · Class of 2027',
    summary:
      'Fourth-year B.Tech student in Artificial Intelligence at Vignan\'s Institute of Engineering for Women with two internships and three end-to-end projects. Hands-on experience in Generative AI, RAG architectures, machine learning workflows, and full-stack software development with Python, Java, JavaScript, and Oracle APEX. Actively seeking technology and consulting internship opportunities.',
    location: 'Visakhapatnam, Andhra Pradesh, India',
    phone: '+91 9553810275',
    email: 'singareddygayathree@gmail.com',
    github: 'https://github.com/ammu58',
    linkedin: 'https://www.linkedin.com/in/gayathree-singareddy-a98aaa2b7',
    portraitImage: 'https://i.ibb.co/27qBK6Gr/mee-img.jpg',
  },
  internships: [
    {
      company: 'JJH Global Solutions',
      role: 'Generative AI & Web Application Development Intern',
      duration: 'Apr 2026 – Jun 2026',
      location: 'Internship',
      highlights: [
        'Designed, built and enhanced Python web applications using Generative AI and prompt engineering to meet defined application requirements.',
        'Performed functional testing, troubleshooting and debugging, analyzing responses to find root causes and improve application reliability and quality.',
        'Prepared technical documentation and collaborated with team members to refine and improve the application.',
      ],
      skills: ['Python', 'Generative AI', 'Prompt Engineering', 'Functional Testing', 'Debugging', 'Technical Documentation'],
    },
    {
      company: 'Data Valley India Pvt. Ltd.',
      role: 'AI & Machine Learning Intern',
      duration: 'May 2025 – Jul 2025',
      location: 'Visakhapatnam, India',
      highlights: [
        'Developed and evaluated Python workflows covering data preprocessing, data validation and performance analysis.',
        'Analyzed results, debugged issues and documented technical processes to improve solution reliability, working closely with team members.',
      ],
      skills: ['Python', 'Machine Learning', 'Data Preprocessing', 'Data Validation', 'Performance Analysis', 'Team Collaboration'],
    },
  ] as Internship[],
  projects: [
    {
      id: 'rag-assistant',
      title: 'RAG-Based AI Assistant',
      category: 'Generative AI & RAG',
      shortDescription:
        'A document-grounded assistant that retrieves verified textual chunks to answer user queries with verifiable citations and context-aware responses.',
      problemStatement:
        'Standard large language models frequently hallucinate or produce outdated answers when answering specialized questions about proprietary documentation. Users needed an accurate assistant that answers questions strictly anchored in source material.',
      myContribution:
        'Designed the document ingestion and retrieval pipeline, engineered tailored prompts for context synthesis, and implemented iterative response validation to suppress hallucinations.',
      technologies: ['Python', 'RAG', 'Prompt Engineering', 'Vector Embeddings', 'Document Chunking'],
      keyFeatures: [
        'Document ingestion pipeline with semantic chunking and text normalization',
        'Vector similarity search to retrieve the most contextually relevant passages',
        'Strict grounding prompts requiring citations from retrieved excerpts',
        'Iterative validation and scoring against reference answers to ensure reliability',
      ],
      architectureOverview:
        'Ingests unstructured documents -> Chunks and embeds text into vector index -> Matches user query against index via cosine similarity -> Synthesizes grounded response with exact source citation.',
      challengesAndLearnings:
        'Addressed chunk boundary fragmentation where important context was split across chunks. Solved this by implementing overlapping sliding-window chunking and tuning the retrieval top-k parameters.',
      futureEnhancements: 'Adding re-ranking models (Cross-Encoders) and hybrid keyword-vector search (BM25 + Dense embeddings).',
      githubUrl: 'https://github.com/ammu58',
      demoAvailable: true,
      demoType: 'rag',
      imageUrl: '/images/profile1.png',
    },
    {
      id: 'dopply-tryon',
      title: 'Dopply TryOn — AI Virtual Try-On App',
      category: 'AI/ML & Vision',
      shortDescription:
        'An AI application for digital clothing visualization, applying emerging generative vision technology to retail e-commerce with a user-focused interface.',
      problemStatement:
        'Online apparel shoppers struggle to visualize how garments will look and fit, leading to high return rates and hesitation. Retailers need intuitive digital visualization tools to assist customer decision-making.',
      myContribution:
        'Built the end-to-end interactive interface for garment selection and model preview, connected clothing segmentation logic, and applied iterative testing on garment warp fidelity.',
      technologies: ['Python', 'Generative AI', 'Computer Vision', 'Digital Visualization', 'UI Design'],
      keyFeatures: [
        'Interactive wardrobe catalog with dress, tops, and outerwear selection',
        'Digital clothing visualization on photographic model silhouettes',
        'Pose alignment and fit simulation controls for preview adjustments',
        'Streamlined user flow from item discovery to virtual dressing and cart integration',
      ],
      architectureOverview:
        'Garment Ingestion -> Keypoint/Pose Detection & Parsing -> Neural Texture Warp & Blending -> High-Resolution Display Pipeline.',
      challengesAndLearnings:
        'Ensuring garment textures did not distort around shoulders and waistlines. Optimized preprocessing masks and aspect ratio preservation to maintain cloth pattern realism.',
      futureEnhancements: 'Enabling user photo uploads for personalized silhouette fitting and 3D garment drape preview.',
      githubUrl: 'https://github.com/ammu58',
      demoAvailable: true,
      demoType: 'tryon',
      imageUrl: '/images/profile2.png',
    },
    {
      id: 'style-ecommerce',
      title: 'STYLE — Fashion E-commerce Web Application',
      category: 'Web Engineering',
      shortDescription:
        'A responsive web application with user authentication, dynamic catalog management, and shopping workflows designed against real-world retail requirements.',
      problemStatement:
        'Developing a fast, reliable e-commerce storefront requires clean state management, secure customer authentication flows, and seamless responsive behavior across mobile, tablet, and desktop.',
      myContribution:
        'Designed and implemented the responsive user interface, structured the user authentication and session management flows, and tested edge cases in product cart state.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'User Authentication', 'Responsive Web Design'],
      keyFeatures: [
        'Secure client-side authentication and session authorization flows',
        'Interactive apparel catalog with multi-criteria filtering by category and price',
        'Real-time shopping bag calculations with quantity adjustments',
        'Fully responsive layouts engineered for mobile, tablet, and high-DPI desktop viewports',
      ],
      architectureOverview:
        'Modular Component-based UI -> Authentication & Session Layer -> Product State & Cart Manager -> Persistent Local Storage Cache.',
      challengesAndLearnings:
        'Handling asynchronous cart state transitions and ensuring smooth rendering on mobile devices without layout shifts.',
      futureEnhancements: 'Integrating backend payment gateway sandbox and serverless order notification hooks.',
      githubUrl: 'https://github.com/ammu58',
      demoAvailable: true,
      demoType: 'ecommerce',
      imageUrl: '/images/profile3.png',
    },
  ] as Project[],
  skills: {
    programmingLanguages: ['Python', 'Java', 'JavaScript', 'SQL'],
    emergingTechnologies: ['Generative AI', 'Machine Learning', 'RAG (Retrieval-Augmented Generation)', 'Prompt Engineering'],
    applicationDevelopment: ['Application Design', 'Application Configuration', 'Web Application Development', 'HTML5', 'CSS3', 'User Authentication', 'Software Engineering Lifecycle (SDLC)'],
    computerScienceFundamentals: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'DBMS', 'Operating Systems', 'Problem Solving'],
    engineeringPractices: ['Requirements Analysis', 'Unit Testing', 'Functional Testing', 'Debugging & Troubleshooting', 'Data Validation', 'Git', 'GitHub', 'Technical Documentation'],
    professionalSkills: ['Team Collaboration', 'Communication', 'Analytical Thinking', 'Adaptability', 'Quick Learner'],
  },
  certifications: [
    {
      name: 'Software Engineering',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      verified: true,
    },
    {
      name: 'Google AI Essentials',
      issuer: 'Google',
      verified: true,
    },
    {
      name: 'Introduction to Generative AI',
      issuer: 'Google Cloud Skills Boost',
      verified: true,
    },
  ] as Certification[],
  education: [
    {
      degree: 'B.Tech, Computer Science & Engineering (Artificial Intelligence)',
      institution: "Vignan's Institute of Engineering for Women, Visakhapatnam",
      period: '2023 – 2027',
      score: '7.6 / 10',
      scoreType: 'CGPA',
      details: 'Specialization in Artificial Intelligence with rigorous study in algorithms, machine learning, databases, and software design.',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      period: '2021 – 2023',
      score: '86%',
      scoreType: 'Percentage',
      details: 'Pre-university program focusing on Mathematics, Physics, and Chemistry.',
    },
    {
      degree: 'SSC / Class X',
      institution: 'Bhashyam Public School',
      period: '2021',
      score: '100%',
      scoreType: 'Matriculation',
      details: 'Secondary School Certificate examination with perfect academic performance.',
    },
  ] as EducationItem[],
  languages: [
    { language: 'English', proficiency: 'Fluent' },
    { language: 'Telugu', proficiency: 'Fluent' },
    { language: 'Hindi', proficiency: 'Intermediate' },
  ],
};
