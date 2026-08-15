export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tech: string[];
  image?: string;
};

export const experiences: Experience[] = [
  {
    company: "Information Network Security Administration (INSA)",
    role: "Software Engineer",
    period: "2025 — Present",
    summary:
      "Engineered secure enterprise systems, including real-time vehicle tracking, route optimization, and service management modules with robust Spring Boot backends and interactive React interfaces.",
    tech: ["Spring Boot", "React", "Next.js", "MySQL", "MongoDB", "Leaflet", "REST API"],
    image: "/INSA-TMS.png",
  },
  {
    company: "Mekenet Tech Solutions",
    role: "CEO & Full-Stack Developer",
    period: "2025 — Present",
    summary:
      "Leading technical vision and full-stack development for business clients, delivering scalable web applications, modern UI/UX design systems, and secure backend architectures.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "MySQL"],
    image: "/mekenet.png",
  },
  {
    company: "Digital Dreamers Club",
    role: "CEO & Co-founder",
    period: "2024 — Present",
    summary:
      "Co-founded an empowering tech community fostering digital skills, software development mentorship, tech entrepreneurship, and hands-on project collaboration.",
    tech: ["Community Building", "Leadership", "Mentorship", "Tech Workshops"],
    image: "/profile.jpg",
  },
];


