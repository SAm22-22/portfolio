// ── Sameer Shaikh — Portfolio Data ──────────────────────────
export const portfolioData = {
  personalInfo: {
    name: "Sameer Shaikh",
    role: "Full Stack Software Developer",
    email: "sameershaikh112266@gmail.com",
    phone: "+91 8999204722",
    location: "Mumbai (Nallasopara), Maharashtra, India",
    github: "https://github.com/SAm22-22",
    linkedin: "https://linkedin.com/in/sameer-shaikh-0a71022b2",
    leetcode: "https://leetcode.com/u/Sameer541",
    availability: "Open to Full-Time & Internship Roles",
    subheading:
      "Full Stack Software Developer with hands-on experience building MERN Stack applications, RESTful APIs, and AI-integrated systems. Proficient in JWT authentication, MongoDB and PostgreSQL schema design, and shipping production-ready features across the complete development lifecycle. Solid foundation in Data Structures & Algorithms, OOP, and DBMS, with exposure to Next.js, Gemini AI, and Strapi CMS.",
    university: "Tilak Maharashtra Vidyapeeth",
    cgpa: "8.74",
    availableFor: ["Full-Time", "Internship", "Remote", "On-site", "Freelance"],
  },

  skills: {
    frontend: {
      label: "Frontend",
      desc: "Client engineering, state workflows and responsive aesthetics.",
      icon: "⚛️",
      items: ["React.js", "Context API", "Tailwind CSS", "Bootstrap", "Responsive Web Design"],
    },
    backend: {
      label: "Backend",
      desc: "REST APIs, JWT auth scope, and server infrastructure.",
      icon: "🖥️",
      items: ["Node.js", "Express.js", "RESTful API Design", "JWT Auth"],
    },
    database: {
      label: "Database",
      desc: "Relational & document databases with ORM management.",
      icon: "🗄️",
      items: ["MongoDB", "MySQL", "Strapi CMS", "Database Schema Design"],
    },
    languages: {
      label: "Languages",
      desc: "Core languages for system logic, algorithms, and styling.",
      icon: "🔤",
      items: ["JavaScript (ES6+)", "Java", "SQL", "HTML5", "CSS3"],
    },
    tools: {
      label: "Tools & DevOps",
      desc: "Development ecosystem, CI/CD, and deployments.",
      icon: "🛠️",
      items: ["Git", "GitHub", "Postman", "Cloudinary", "Vercel", "Render", "VS Code"],
    },
    ai: {
      label: "AI Integration",
      desc: "Intelligent systems and prompt engineering.",
      icon: "🤖",
      items: ["Gemini AI", "Prompt Engineering", "Vision AI"],
    },
    corecs: {
      label: "Core CS",
      desc: "Foundational computer science principles.",
      icon: "📐",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Problem Solving"],
    },
    learning: {
      label: "Currently Learning",
      desc: "In progress — expanding my arsenal.",
      icon: "📚",
      items: ["DSA in Java", "System Design", "Backend Architecture", "Advanced React", "Cloud Deployment"],
      isDashed: true,
    },
  },

  projects: [
    {
      id: "finora",
      title: "Finora",
      subtitle: "Trading Dashboard",
      num: "01",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Context API"],
      description:
        "Architected a full-stack trading dashboard with BUY/SELL order execution, real-time holdings, position management, funds tracking, and portfolio analytics.",
      github: "https://github.com/SAm22-22/Finora",
      demo: "https://finora-8ai2.vercel.app",
      mockup: "/assets/images/finora.png",
      fallbackImg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      features: [
        "Architected a full-stack trading dashboard with BUY/SELL order execution, real-time holdings, position management, funds tracking, and portfolio analytics",
        "Designed a MongoDB schema and RESTful API layer handling order history, funds, and user-specific portfolio data with scoped JWT authorization",
        "Managed global UI state via Context API for dynamic dashboard updates across React components, eliminating unnecessary re-renders",
      ],
    },
    {
      id: "dishify",
      title: "Dishify",
      subtitle: "AI Smart Pantry",
      num: "02",
      tech: ["React", "Next.js", "Tailwind CSS", "Strapi CMS", "PostgreSQL", "Clerk Authentication", "Google Gemini AI"],
      description:
        "An AI-powered pantry management and recipe recommendation platform. Uses Google Gemini AI to generate personalized recipes from user-supplied pantry ingredients.",
      github: "https://github.com/SAm22-22/Dishify",
      demo: "https://dishify-zyao.vercel.app",
      mockup: "/assets/images/dishify.png",
      fallbackImg: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      features: [
        "Developed an AI-powered pantry management and recipe recommendation platform using React, Next.js, Tailwind CSS, Strapi CMS, PostgreSQL, Clerk Authentication, and Google Gemini AI",
        "Integrated Google Gemini AI to generate personalized recipes from user-supplied pantry ingredients using structured prompt engineering",
        "Implemented image-based ingredient detection workflows using AI vision capabilities to improve pantry item identification accuracy",
        "Architected a Strapi-backed PostgreSQL schema for pantry and recipe data; Clerk handles authentication and session management",
      ],
    },
    {
      id: "wanderlust",
      title: "Wanderlust",
      subtitle: "Booking Platform",
      num: "03",
      tech: ["MongoDB", "Express.js", "Node.js", "Cloudinary", "Bootstrap"],
      description:
        "A hotel booking marketplace with property listing, booking, and review modules using an MVC architecture on the MERN stack.",
      github: "https://github.com/SAm22-22/wanderlust",
      demo: "https://wanderlust-01ex.onrender.com",
      mockup: "/assets/images/wanderlust.png",
      fallbackImg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      features: [
        "Built a hotel booking marketplace with property listing, booking, and review modules using an MVC architecture on the MERN stack",
        "Implemented secure authentication, role-based authorization, and Cloudinary-powered image upload for property listings",
        "Developed RESTful CRUD APIs and a responsive Bootstrap UI supporting end-to-end booking workflows across devices",
      ],
    },
  ],

  otherProjects: [
    {
      title: "FreshCart",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "Full-stack e-commerce grocery app with cart management, product listing, and secure checkout built with MERN stack architecture.",
      github: "https://github.com/SAm22-22/FreshCart",
    },
    {
      title: "National Cool",
      tech: ["HTML/CSS", "JavaScript"],
      description:
        "Professional business website for a cooling systems company. Responsive design, service showcase, and contact integration with clean modern UI.",
      github: "https://github.com/SAm22-22/National-Cool",
    },
    {
      title: "Portfolio Website",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      description:
        "This very website — handcrafted with premium design aesthetics, smooth animations, blueprint grid background, and dark/light mode. Zero compromises.",
      github: "https://github.com/SAm22-22/sameer-portfolio-react",
    },
  ],

  education: {
    degree: "Bachelor of Computer Applications",
    shortDegree: "BCA",
    institution: "Tilak Maharashtra Vidyapeeth",
    location: "Mumbai, Maharashtra",
    duration: "2023 – 2026",
    cgpa: "8.74",
    coursework: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Object Oriented Programming",
      "Software Engineering",
      "Computer Networks",
    ],
  },

  experience: [
    {
      role: "Web Development & Digital Media Management Intern",
      company: "Tagz and Talezz",
      duration: "4 Months",
      location: "Mumbai, Maharashtra",
      year: "2023",
      responsibilities: [
        {
          title: "Feature Engineering & Deployment",
          desc: "Developed and maintained features for client-facing business websites, improving site functionality and reliability across multiple live deployments.",
        },
        {
          title: "Collaboration & Translation",
          desc: "Collaborated with designers and developers to translate client requirements into functional web solutions, delivering features within agreed timelines.",
        },
        {
          title: "Performance & UX Polish",
          desc: "Diagnosed and resolved usability and performance issues, applying iterative UI improvements to enhance end-user experience.",
        },
      ],
    },
  ],

  achievements: [
    { value: "30+", numericValue: 30, suffix: "+", label: "LeetCode Problems Solved" },
    { value: "8.74", numericValue: 8.74, suffix: "", label: "Current CGPA" },
    { value: "6+", numericValue: 6, suffix: "+", label: "Projects Built" },
    { value: "2", numericValue: 2, suffix: "", label: "Pro Certifications" },
  ],

  achievementBadges: [
    { icon: "🏆", label: "GitHub Active Contributor" },
    { icon: "⚡", label: "MERN Stack Certified Developer" },
    { icon: "🤖", label: "AI-Integrated 3 Production Apps" },
    { icon: "🎓", label: "Top Performer — TMV BCA Program" },
  ],

  certificates: [
    {
      name: "MERN Stack Web Development",
      issuer: "Apna College",
      date: "December 2025",
      icon: "🏅",
      desc: "Comprehensive MERN Stack development — React, Node.js, Express, MongoDB, JWT Auth, REST APIs, and deployment.",
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Apna College",
      date: "August 2025",
      icon: "🏅",
      desc: "In-depth DSA with Java — Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and competitive programming techniques.",
    },
  ],

  learningItems: [
    "DSA in Java",
    "System Design Basics",
    "Advanced React Patterns",
    "Backend Architecture",
    "Cloud Deployment",
    "PostgreSQL Deep Dive",
    "Next.js App Router",
    "Docker & Containers",
  ],
};
