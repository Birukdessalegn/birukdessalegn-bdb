export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "building-secure-scalable-web-applications",
    title: "Building Secure & Scalable Web Applications: A Full-Stack Approach",
    date: "2025-02-15",
    readTime: "5 min read",
    tags: ["Full-Stack", "Security", "Next.js", "Spring Boot"],
    excerpt:
      "Insights on unifying front-end user experience with back-end security controls, input validation, and secure API design.",
    content: [
      "Modern web application security cannot be an afterthought added right before deployment. As software engineers, security needs to be integrated directly into every layer of our stack.",
      "When building frontend applications with frameworks like Next.js and React, strict client-side validation paired with secure state management prevents common data exposure vectors. However, client-side validation is only the first line of UX guidance — the backend remains the ultimate source of truth.",
      "On the backend (whether using Spring Boot, Node.js, or Go), enforcing defensive input parsing, parameterized SQL queries, and robust OAuth2/JWT token verification prevents OWASP Top 10 risks such as SQL Injection (SQLi) and Broken Object Level Authorization (BOLA).",
      "By combining intuitive design with defense-in-depth principles, we build applications that delight users while remaining resilient against evolving threats."
    ]
  },
  {
    slug: "practical-web-vulnerability-scanning-with-python",
    title: "Practical Web Vulnerability Scanning & Reconnaissance with Python",
    date: "2025-01-20",
    readTime: "7 min read",
    tags: ["Cybersecurity", "Python", "Ethical Hacking", "OWASP"],
    excerpt:
      "How automated scripts can help security analysts detect misconfigurations, missing headers, and common web application vulnerabilities.",
    content: [
      "Automated vulnerability scanners play a vital role in identifying security flaws before malicious actors can exploit them. Python provides an ideal ecosystem for crafting lightweight, fast security tools.",
      "Key areas to automate during security reconnaissance include HTTP response header analysis (ensuring CSP, HSTS, and X-Frame-Options are configured), port scanning, and automated endpoint discovery.",
      "Integrating security tests into continuous integration (CI/CD) pipelines allows engineering teams to detect security regressions early, maintaining system hardening as code bases scale."
    ]
  },
  {
    slug: "flutter-cross-platform-architecture-best-practices",
    title: "Architecting Performant Cross-Platform Mobile Apps in Flutter",
    date: "2024-12-10",
    readTime: "4 min read",
    tags: ["Mobile", "Flutter", "Architecture", "Dart"],
    excerpt:
      "Best practices for state management, clean architecture, and API integration when developing iOS and Android applications.",
    content: [
      "Flutter enables rapid mobile app development for iOS and Android from a single codebase. However, maintaining high performance and code clarity requires disciplined architectural choices.",
      "Separating business logic from UI widgets ensures code testability and easy maintenance. Utilizing layered architecture (UI -> Business Logic -> Data Repository -> Network API) prevents UI re-render bottlenecks.",
      "Proper asynchronous data handling and local caching elevate the mobile experience, ensuring applications remain responsive even on weak network connections."
    ]
  }
];
