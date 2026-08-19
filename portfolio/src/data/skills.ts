export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "Django", "REST APIs", "JWT"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Flutter"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "pgvector", "ChromaDB"]
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "RAG", "Generative AI", "Gemini", "Vector databases"]
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Postman", "Google Cloud", "Linux"]
  }
];
