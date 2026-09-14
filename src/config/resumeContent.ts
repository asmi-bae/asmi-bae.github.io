export interface ResumeEducationItem {
  date: string;
  degree: string;
  institution: string;
  detail: string;
}

export interface ResumeProjectItem {
  date: string;
  title: string;
  techStack: string;
  description: string;
  github?: string;
  liveDemo?: string;
}

export interface ResumeReferenceItem {
  name: string;
  lines: string[];
  email: string;
  phone: string;
}

export interface ResumeSkillGroup {
  label: string;
  items: string;
}

export interface ResumeContent {
  personal: {
    name: string;
    email: string;
    phone: string;
    address: string;
    website: string;
    github: string;
    sex: string;
    dateOfBirth: string;
    photo: string;
  };
  about: string;
  workExperience: {
    date: string;
    role: string;
    project: string;
    description: string;
  };
  education: ResumeEducationItem[];
  projectsPage1: ResumeProjectItem[];
  projectsPage2: ResumeProjectItem[];
  skills: ResumeSkillGroup[];
  references: ResumeReferenceItem[];
  declaration: string;
}

export const RESUME_CONTENT: ResumeContent = {
  personal: {
    name: 'Asmita Rahman',
    email: 'rahman23105101412@diu.edu.bd',
    phone: '+880 1310-455508',
    address: 'Flat-10/A, Udayan Raktakarabi, Plot-J/4, Block-J, Section-3, Mirpur, Dhaka-1216',
    website: 'https://asmi-bae.github.io',
    github: 'https://github.com/asmi-bae',
    sex: 'Female',
    dateOfBirth: '',
    photo: '/images/profile.jpg',
  },
  about:
    'I am Asmita Rahman, a highly motivated Computer Science & Engineering student at Daffodil International University with hands-on experience in AI/ML, deep learning, full-stack web development, and computer vision. Seeking a technology internship to apply expertise in building AI agents, deploying ML models with Docker, and developing scalable web applications while gaining cross-cultural professional experience.',
  workExperience: {
    date: '(2024 – Present)',
    role: 'Assistant General Secretary & Student Researcher',
    project: 'Computer Girls Computer Club & DIU Projects',
    description:
      'Organizing student workshops, technical hackathons, and peer programming mentorship for women in engineering. Conducting applied research in computer vision pipelines (YOLOv11, OpenCV) and multi-tool AI agents using LangChain and FastAPI.',
  },
  education: [
    {
      date: '(2023 – Present)',
      degree: 'BSc in Computer Science & Engineering (4th Year)',
      institution: 'Daffodil International University (DIU), Dhaka, Bangladesh',
      detail:
        'Specializing in Software Engineering, Data Structures & Algorithms, Database Systems, and Web Technologies. Awarded Student Library Award.',
    },
    {
      date: '(2019 – 2021)',
      degree: 'Higher Secondary Certificate (HSC) in Science',
      institution: 'Dhaka Commerce College, Dhaka, Bangladesh',
      detail: 'GPA: 4.83 / 5.00',
    },
    {
      date: '(2017 – 2019)',
      degree: 'Secondary School Certificate (SSC) in Science',
      institution: 'Islamee Adarsha High School, Dhaka, Bangladesh',
      detail: 'GPA: 4.61 / 5.00',
    },
  ],
  projectsPage1: [
    {
      date: '(2024 – Present)',
      title: 'Bangladeshi Taka Note Detection — Real-Time ML REST API',
      techStack: 'Python, YOLOv11, FastAPI, Docker, Computer Vision, Deep Learning',
      description:
        'Built a deep learning model using YOLOv11 for real-time banknote detection and classification. Deployed as a high-performance REST API with Docker containerization for scalable production deployment. Implemented end-to-end ML pipeline: data collection, annotation, training, validation, and containerized inference.',
      github:
        'https://github.com/asmi-bae/Deployment-of-Bangladeshi-Taka-Note-Detection-Model-Using-REST-API-Docker',
    },
    {
      date: '(2024)',
      title: 'Multi-Tool AI Agent for Medical Datasets & Web',
      techStack: 'Python, LangChain, AI Agents, NLP, Healthcare Analytics',
      description:
        'Developed an intelligent AI agent for medical dataset interaction using multi-tool orchestration. Integrated NLP-based reasoning and automated web retrieval for dynamic medical querying and patient insight generation.',
      github:
        'https://github.com/asmi-bae/Building-a-Multi-Tool-AI-Agent-to-Interact-with-Medical-Datasets-and-Web',
    },
  ],
  projectsPage2: [
    {
      date: '(2024)',
      title: 'AURA — AI Understanding & Reasoning Assistant',
      techStack: 'TypeScript, Node.js, Full-Stack, AI/NLP, Conversational UI',
      description:
        'Intelligent conversational AI assistant built with TypeScript, featuring natural language understanding, reasoning capabilities, and a responsive modern chat interface.',
      github: 'https://github.com/asmi-bae/AURA',
    },
    {
      date: '(2024)',
      title: 'SYNAPSE — Collaborative Platform',
      techStack: 'TypeScript, React, Full-Stack, WebSockets, Open Source',
      description:
        'Collaborative platform enabling team-based workflows, real-time communication, and project coordination. Open-source project built for modern developer communities.',
      github: 'https://github.com/asmi-bae/SYNAPSE',
    },
    {
      date: '(2023 – 2024)',
      title: 'People Flow Detection — Object Tracking & Heatmap',
      techStack: 'Python, OpenCV, Computer Vision, Object Tracking, Heatmap Visualization',
      description:
        'Implemented crowd movement and flow detection system using computer vision tracking algorithms with density heatmap visualization for spatial occupancy analytics.',
      github:
        'https://github.com/asmi-bae/People-Flow-Detection-using-Object-Tracking-Heatmap',
    },
    {
      date: '(2023)',
      title: 'Meal Sphere — Food & Meal Management Web App',
      techStack: 'TypeScript, React, Node.js, Full-Stack, MongoDB',
      description:
        'Full-stack meal management application built with TypeScript and modern web frameworks, featuring nutrition tracking, meal planning, and interactive user dashboards.',
      github: 'https://github.com/asmi-bae/meal-sphere',
    },
  ],
  skills: [
    {
      label: 'Programming Languages',
      items: 'Python, TypeScript, JavaScript, C, C++, Java',
    },
    {
      label: 'AI & Machine Learning',
      items: 'YOLOv11, LangChain, Computer Vision, NLP, Deep Learning, Object Tracking',
    },
    {
      label: 'Web & Frameworks',
      items: 'React.js, Node.js, FastAPI, HTML/CSS, REST APIs, Tailwind CSS',
    },
    {
      label: 'Databases',
      items: 'MySQL, MongoDB',
    },
    {
      label: 'Tools & DevOps',
      items: 'Git & GitHub, Docker, VS Code, Linux',
    },
    {
      label: 'Achievements & Awards',
      items:
        'Best Executive Award (BSRS), Student Library Award (DIU), Typing Competition, Mentor Recognition',
    },
    {
      label: 'Languages',
      items: 'Bengali (Native, 100%), English (Proficient, 80%)',
    },
  ],
  references: [
    {
      name: 'Professor Dr. Sheak Rashed Haider Noori',
      lines: [
        'Professor & Head, Department of CSE',
        'Faculty of Science and Information Technology',
        'Daffodil International University',
      ],
      email: 'drnoori@daffodilvarsity.edu.bd',
      phone: '+88 01847140016',
    },
    {
      name: 'Professor Dr. Md. Fokhray Hossain',
      lines: [
        'Dean, Faculty of Science and Information Technology',
        'Professor, Department of CSE',
        'Daffodil International University',
      ],
      email: 'drfokhray@daffodilvarsity.edu.bd',
      phone: '+88 01713493250',
    },
  ],
  declaration:
    'I hereby declare that the information stated above is true to the best of my knowledge.',
};
