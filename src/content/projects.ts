export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string; 
};

export const projects: Project[] = [
  {
    title: "Transport Management System (INSA)",
    description:
      "A complete system enabling route planning, vehicle tracking, and service assignment. Integrates organizational and rental cars with waypoint-based routes and a real-time dashboard.",
    tech: ["React", "Leaflet", "Spring Boot", "Mysql", "MongoDB","REST API"],
    image: "/INSA-TMS.png",

  },
  {
    title: "OCU Care – Web and Mobile Eye Care App",
    description:
      "A mobile app to improve eye health awareness and access to care. Users can book appointments, receive daily tips, and consult professionals via a simple interface.",
    tech: ["React", "Flutter", "Mysql", "REST API"],
    image: "/ocu-care.png",
  },
  {
    title: "Web Vulnerability Scanner",
    description:
      "A security tool for scanning web apps for SQLi, XSS, and weak headers, with modules for reconnaissance, port scanning, and organized reporting.",
    tech: ["Python", "Bash", "Kali Linux","OWASP ZAP"],
    image: "/web-vuln-scanner.png",
    
  },
  {
    title: "Mekenet Tech Solutions Website",
    description:
      "Official company website showcasing services, portfolio, and team with smooth animations, professional layout, and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion",],
    image: "/mekenet.png",
    link: "https://verdant-kataifi-3c5c1b.netlify.app/"
  },
];

