export type ProjectCategory = "All" | "Full-Stack" | "Mobile" | "Cybersecurity";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  link?: string;
  github?: string;
  image?: string; 
};

export const projects: Project[] = [
  {
    title: "Transport Management System (INSA)",
    description:
      "A complete enterprise platform for vehicle route planning, real-time GPS tracking, and service assignments, supporting organizational and rental fleets.",
    tech: ["React", "Leaflet", "Spring Boot", "MySQL", "MongoDB", "REST API"],
    category: "Full-Stack",
    image: "/INSA-TMS.png",
    github: "https://github.com/Birukdessalegn",
  },
  {
    title: "OCU Care – Web & Mobile Eye Care App",
    description:
      "A cross-platform mobile and web application to improve eye health awareness, appointment scheduling, daily eye care tips, and telehealth consultations.",
    tech: ["Flutter", "React", "MySQL", "REST API"],
    category: "Mobile",
    image: "/ocu-care.png",
    github: "https://github.com/Birukdessalegn",
  },
  {
    title: "Automated Web Vulnerability Scanner",
    description:
      "A cybersecurity auditing tool that scans web applications for SQL Injection, XSS vulnerabilities, open ports, and missing security headers.",
    tech: ["Python", "Bash", "Kali Linux", "OWASP ZAP"],
    category: "Cybersecurity",
    image: "/web-vuln-scanner.png",
    github: "https://github.com/Birukdessalegn",
  },
  {
    title: "Mekenet Tech Solutions Website",
    description:
      "Official agency website highlighting technology solutions, team portfolio, and software engineering services with custom animations and responsive layout.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Full-Stack",
    image: "/mekenet.png",
    link: "https://verdant-kataifi-3c5c1b.netlify.app/",
    github: "https://github.com/Birukdessalegn",
  },
];
