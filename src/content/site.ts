export const siteConfig = {
  name: "Biruk Dessalegn",
  role: "Full-Stack Developer · Cybersecurity Enthusiast",
  description:
    "Portfolio showcasing projects, experience, and writing across web and software engineering.",
  email: "birukdessalegn123@gmail.com",
  location: "Addis Ababa, Ethiopia",
  resumeUrl: "/resume.pdf", 
  social: {
    github: "https://github.com/Birukdessalegn",
    linkedin: "https://www.linkedin.com/in/biruk-dessalegn/",
    x: "https://x.com/",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    // { label: "Blog", href: "/blog" },
    { label: "Resume", href: "/resume" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

