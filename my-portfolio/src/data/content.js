export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const contactLinks = {
  email: 'ethanplee24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ethan-p-lee/',
  github: 'https://github.com/EthanLee101',
};

export const hero = {
  name: 'Ethan',
  role: 'Software Engineer',
  subhead:
    'Computer Science senior at UCLA building scalable applications that solve real-world problems.',
  location: 'Los Angeles, CA',
  availability: 'New Grad SWE · Class of 2027',
  resumeFile: '/Ethan_Lee_Resume.pdf',
};

export const about = {
  paragraphs: [
    "I'm passionate about creating impactful software that bridges the gap between complex technical challenges and real-world solutions.",
    "I'm a Computer Science senior at UCLA graduating in 2027, with experience spanning AI-powered platforms, cloud infrastructure at Capital One, and IoT systems.",
    "When I'm not coding, you'll find me playing volleyball, exploring new restaurants, or working on side projects that push my technical boundaries.",
  ],
  stats: [
    { value: '300+', label: 'Active Users' },
    { value: '6', label: 'Major Projects' },
    { value: '3+', label: 'Years Coding' },
  ],
  focus: [
    'Seeking New Grad SWE roles, Class of 2027',
    'Building AI-powered applications',
    'Exploring machine learning',
    'Contributing to open source',
  ],
};

export const experience = [
  {
    id: 'capital-one',
    company: 'Capital One',
    location: 'Richmond, VA',
    role: 'Software Engineer Intern',
    dates: 'Jun 2026 – Aug 2026',
    bullets: [
      'Developed a full-stack cost anomaly alerting system in Go and Angular/NgRx, requested by 10+ engineers.',
      'Automated cost anomaly detection with EventBridge and CloudWatch, replacing 5 hrs/week of manual monitoring.',
      'Built a serverless Go REST API on AWS Lambda, serving cost metrics from PostgreSQL on AWS RDS.',
      'Designed an Angular/TypeScript dashboard for configuring alerts across cloud services for any internal team.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Reflectory',
    description:
      "A warm, judgment-free AI journaling app. Reflections are retrieval-grounded over your own past entries — and only ever generated when you ask.",
    tech: ['Next.js 16', 'TypeScript', 'React 19', 'Supabase', 'pgvector', 'Gemini API', 'Tailwind CSS v4', 'Vitest'],
    stats: 'MVP live on Vercel · 112 tests passing (14 files) · solo project',
    visualType: 'diagram',
    demo: 'https://reflectory-app-sooty.vercel.app/',
    category: 'Full-Stack',
    modalContent: {
      type: 'diagram',
      description:
        "You write freely. When you choose to, you can request a reflection: your entry is embedded and matched via pgvector similarity search against your own past entries, the most relevant ones are shown alongside the reflection (retrieval is never a black box), and only then is a Gemini prompt composed around that context. Every request also runs a two-layer crisis-detection check (keyword pass + LLM classifier); if triggered, it shows real crisis resources instead of attempting to counsel.",
      features: [
        'Row-Level Security enforced at the DB layer, verified manually with two test accounts',
        'Per-user rate limiting as an atomic Postgres RPC, since Vercel functions are stateless/multi-instance',
        'Idempotency keys on entry creation and reflection generation',
        'Request timeouts on every Gemini call, plus an output-token cap on generation to bound cost/latency',
      ],
    },
  },
  {
    id: 2,
    title: 'Bruin Plan',
    description:
      'Schedule optimization tool for UCLA students with conflict detection',
    tech: ['React', 'Node.js', 'MongoDB', 'OAuth 2.0'],
    stats: '500+ users, 99.2% uptime, <500ms API response',
    image: '/bruin-learn-image.png',
    github: 'https://github.com/kouseph/BruinPlan',
    category: 'Full-Stack',
    modalContent: {
      type: 'demo',
      embedUrl:
        'https://www.youtube.com/embed/3aBBAZNqbBA?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0',
      description:
        'A comprehensive schedule planning tool designed specifically for UCLA students.',
      features: [
        'Algorithm-based conflict detection with 99.1% accuracy',
        'RESTful API design with comprehensive error handling',
        'MongoDB indexing optimization for 3x faster queries',
        'Implemented JWT authentication with refresh tokens',
        'Responsive design tested across 15+ device types',
      ],
    },
  },
  {
    id: 3,
    title: 'TrialFlowAI',
    description:
      "An AI-powered platform that cuts clinical trial setup time from weeks to days, using a burden-scoring algorithm to flag at-risk patients.",
    tech: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'Composio MCP', 'Google APIs', 'OpenAI'],
    stats: 'Runner-up, CalHacks 12.0 · 600+ teams',
    image: '/trial-flow.png',
    github: 'https://github.com/cloyooni/calhacks_project',
    demo: 'https://devpost.com/software/trialflow',
    category: 'Full-Stack',
  },
  {
    id: 4,
    title: 'MNIST Classifier',
    description:
      'Custom CNN achieving 99.9% accuracy with advanced data augmentation',
    tech: ['PyTorch', 'Python', 'CNNs', 'CUDA'],
    stats: '99.9% accuracy, 12ms inference time',
    image: '/dcm-image.png',
    github: 'https://github.com/EthanLee101/digit-classification-model',
    category: 'AI/ML',
    modalContent: {
      type: 'slides',
      embedUrl:
        'https://docs.google.com/presentation/d/e/2PACX-1vRBzTh2d3ACS0G7_6C43Hd0LJgLU8ZlJWc1c_VljM75Dz9wcei3eTHz69P-zboHjuIe3AcbYtUXUN8J/embed?start=false&loop=false&delayms=3000&rm=minimal',
      description:
        'A high-accuracy digit classification model using custom CNN architecture.',
      features: [
        'Custom CNN architecture optimized for 40% faster training',
        'Automated hyperparameter tuning with grid search',
        'CUDA acceleration reducing inference time by 85%',
        'Comprehensive model validation with k-fold cross-validation',
        'Production-ready model serialization and versioning',
      ],
    },
  },
  {
    id: 5,
    title: 'Frogs Go Nuclear',
    description: '2D platformer game with team leadership and custom physics',
    tech: ['Unity', 'C#', 'Git', 'Game Design'],
    stats: '4.7★ rating, 2K+ downloads, team lead',
    image: '/game-image.png',
    github: 'https://github.com/sidalok1/Frogs-Game',
    demo: 'https://eciujeye.itch.io/frogs-go-nuclear',
    category: 'Game Dev',
    modalContent: {
      type: 'demo',
      embedUrl:
        'https://www.youtube.com/embed/jwLuVXh9DQ4?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0',
      description:
        'An exciting 2D platformer where radioactive frogs must navigate through challenging levels.',
      features: [
        'Agile development with 2-week sprints and team standup',
        'Version control workflow with feature branches and code reviews',
        'Custom physics engine with collision detection optimization',
        'Modular architecture enabling 40% faster feature development',
        'Comprehensive testing across 10+ device configurations',
      ],
    },
  },
  {
    id: 6,
    title: 'Marble Madness',
    description: '2D dungeon crawler with custom engine and advanced AI',
    tech: ['C++', 'Custom Graphics', 'OOP', 'Game AI'],
    stats: '15K+ lines, 60fps performance, memory-safe',
    image: '/marble-madness-image.png',
    github: 'https://github.com/EthanLee101/marble-madness',
    category: 'Game Dev',
    modalContent: {
      type: 'demo',
      embedUrl:
        'https://www.youtube.com/embed/Rlqs-BGHmDI?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0&mute=0&start=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0',
      description:
        'A complex 2D dungeon crawler built from scratch in C++ featuring custom graphics engine.',
      features: [
        'Memory management with RAII patterns preventing leaks',
        'Object-oriented design with 95% code reusability',
        'Performance profiling achieving consistent 60fps',
        'Comprehensive unit testing with custom testing framework',
        'Modular architecture with dependency injection',
      ],
    },
  },
];

export const skills = [
  {
    category: 'Languages',
    icon: 'Code',
    items: ['TypeScript', 'JavaScript', 'Python', 'C++/C#', 'HTML/CSS', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Unity', 'Responsive Design'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs'],
  },
  {
    category: 'AI/ML & Tools',
    icon: 'Brain',
    items: ['PyTorch', 'TensorFlow', 'Git', 'Docker', 'AWS/GCP', 'Jest'],
  },
];

export const exploringTech = ['Rust', 'GraphQL', 'Kubernetes', 'WebAssembly'];

export const contact = {
  headline: "Let's Connect",
  blurb: "I'm graduating in 2027 and actively looking for New Grad SWE roles. Ready to discuss how I can contribute to your team.",
  footerNote: 'Open to New Grad Software Engineering roles, Class of 2027',
  footerYear: 2026,
};
