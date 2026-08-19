export interface Experience {
  role: string;
  organization: string;
  date: string;
  points: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: "Summer Intern",
    organization: "GAIL (India) Limited",
    date: "2024",
    points: [
      "Worked on API automation and data extraction workflows.",
      "Utilized Automation Anywhere and Power Automate to streamline business processes.",
      "Developed web and API related integrations for enterprise automation."
    ],
    technologies: ["Automation Anywhere", "Power Automate", "APIs", "Data Extraction"]
  },
  {
    role: "Learning Coordinator",
    organization: "TinkerHub",
    date: "2023 - Present",
    points: [
      "Organized and led technical events and workshops for the student community.",
      "Mentored student developers in foundational programming and modern tech stacks.",
      "Facilitated technical community activities to promote collaborative learning."
    ],
    technologies: ["Community Building", "Technical Mentoring", "Event Organization"]
  }
];
