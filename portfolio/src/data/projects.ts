export interface Project {
  name: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: "Wiki CUSAT",
    category: "Web Application",
    description: "A centralized information hub for Cochin University of Science and Technology students.",
    techStack: ["Python", "Flask", "HTML", "CSS"],
    githubUrl: "https://github.com/philip-thomas-12/Wiki-Cusat",
    featured: true,
  },
  {
    name: "Face Similarity Search",
    category: "AI / ML",
    description: "Application that performs facial recognition and similarity matching using vector embeddings.",
    techStack: ["Python", "Vector Databases", "AI/ML"],
    githubUrl: "https://github.com/philip-thomas-12/Face-similarity-search",
    featured: true,
  },
  {
    name: "Business Idea Generator",
    category: "AI Application",
    description: "An AI-powered application that generates and evaluates novel business ideas based on user parameters.",
    techStack: ["Generative AI", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/philip-thomas-12/business-idea-generator",
    featured: true,
  },
  {
    name: "HomeVR",
    category: "Web Application",
    description: "A virtual reality real estate viewing platform designed for web browsers.",
    techStack: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/philip-thomas-12/homevr",
    liveUrl: "https://homevr-smoky.vercel.app",
    featured: true,
  },
  {
    name: "Budget Tracker",
    category: "Web Application",
    description: "A comprehensive application for tracking personal finances and budgets.",
    techStack: ["HTML", "JavaScript", "CSS"],
    githubUrl: "https://github.com/philip-thomas-12/Budget_Tracker",
    featured: true,
  },
  {
    name: "Expense Manager",
    category: "Full Stack Application",
    description: "A robust modern expense management system built with Next.js.",
    techStack: ["Next.js", "JavaScript", "React"],
    githubUrl: "https://github.com/philip-thomas-12/expense-manager-next.js",
    featured: true,
  },
  {
    name: "CubeSat Transmission",
    category: "Systems Engineering",
    description: "Codebase for handling communication protocols and data transmission for CubeSats.",
    techStack: ["C", "Embedded Systems"],
    githubUrl: "https://github.com/philip-thomas-12/cubesat_transmition",
    featured: false,
  },
  {
    name: "ICI CUSAT Student Chapter",
    category: "Web Application",
    description: "Official website for the Indian Concrete Institute CUSAT Student Chapter.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/philip-thomas-12/ndian-Concrete-Institute-CUSAT-Student-Chapter",
    featured: false,
  },
  {
    name: "To-Do List Flask",
    category: "Backend Development",
    description: "A functional task management backend built with Flask and Python.",
    techStack: ["Python", "Flask", "HTML"],
    githubUrl: "https://github.com/philip-thomas-12/to_do_list_flask",
    featured: false,
  },
  {
    name: "VlogPense",
    category: "Web Application",
    description: "A platform combining video logging with expense tracking capabilities.",
    techStack: ["Web Technologies"],
    githubUrl: "https://github.com/philip-thomas-12/VlogPense",
    featured: false,
  }
];
