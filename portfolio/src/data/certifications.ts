export interface Certification {
  name: string;
  platform: string;
  year: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    name: "AI: Concepts and Techniques",
    platform: "NPTEL",
    year: "2023",
  },
  {
    name: "Data Science for Engineers",
    platform: "NPTEL",
    year: "2023",
  },
  {
    name: "Business Intelligence & Analytics",
    platform: "NPTEL",
    year: "2024",
  },
  {
    name: "Self-paced technical courses",
    platform: "MATLAB Academy",
    year: "2023",
  },
  {
    name: "Completed Labs & Learning Activities",
    platform: "Google Cloud Skills Boost",
    year: "2024",
  }
];
