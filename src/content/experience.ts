export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tech: string[];
  image: string;
};

export const experiences: Experience[] = [
  {
    company: "Information Network Security Administration",
    role: "Software Engineer",
    period: "2025 — Present",
    summary: "Building web apps, leading features, and improving performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Spring Boot", "Mysql", "MongoDB","REST API"],
    image: "./public/INSA-TMS.png",
  },
  {
    company: "Mekenet Tech Solutions",
    role: "CEO & Full Stack Developer",
    period: "2025 — present",
    summary: "Building web apps, leading features, and improving performance.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Spring Boot", "Mysql", "MongoDB","REST API"],
    image: "./public/mekenet.png",
  },
];

