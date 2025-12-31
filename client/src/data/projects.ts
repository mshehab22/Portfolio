// =====================================================
// EDIT CONTENT HERE - Add, edit, or remove projects
// =====================================================

export type ProjectCategory = "Game" | "Software";
export type ProjectStatus = "Ongoing" | "In Progress" | "Completed";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt?: string;
  caption?: string;
};

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortPurpose: string;
  purpose: string;
  role: string;
  systemsBullets: string[];
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
  thumbnailImage?: string;
  galleryImages?: string[];
  series?: string;
  featuredMedia?: MediaItem;
  media?: MediaItem[];
}

export const projects: Project[] = [
  {
    slug: "legends-of-alden-1",
    title: "Legends of Alden I",
    category: "Game",
    status: "Ongoing",
    series: "Legends of Alden",
    shortPurpose: "The first entry in the Legends of Alden trilogy. A narrative-driven RPG where I owned the player gameplay systems and served as team lead.",
    purpose: "Legends of Alden: Origins is the foundation of an evolving trilogy. This first entry establishes the core gameplay loop, world-building, and player systems that will carry through the series. Built with a focus on creating a strong gameplay foundation that can be expanded and refined over time.",
    role: "Team Lead & Gameplay Systems Owner. I designed and implemented all player-facing gameplay systems including movement, combat, and camera control. Other aspects of the game will be rebuilt and expanded as part of the ongoing trilogy development.",
    systemsBullets: [
      "Movement: walk/run/jump",
      "Camera control",
      "Combat: attack",
      "Damage + death flow",
    ],
    tech: ["Unity", "C#", "Addressables", "SQLite"],
    links: {
      github: "https://github.com/example/legends-of-alden-1",
      demo: "https://example.com/play/legends-1",
    },
    featuredMedia: {
      type: "image",
      src: "https://placehold.co/1200x675/1a1a2e/ffffff/png?text=Legends+of+Alden+I",
      alt: "Legends of Alden I featured image",
      caption: "Main gameplay screenshot from Legends of Alden I",
    },
    media: [
      {
        type: "image",
        src: "https://placehold.co/800x450/2d2d44/ffffff/png?text=Combat+System",
        alt: "Combat system screenshot",
        caption: "The combat system in action",
      },
      {
        type: "image",
        src: "https://placehold.co/800x450/3d3d5c/ffffff/png?text=World+Map",
        alt: "World map view",
        caption: "Exploring the world of Alden",
      },
      {
        type: "image",
        src: "https://placehold.co/800x450/4d4d6e/ffffff/png?text=Character+Menu",
        alt: "Character menu interface",
        caption: "Character progression interface",
      },
    ],
  },
  {
    slug: "legends-of-alden-2",
    title: "Legends of Alden II",
    category: "Game",
    status: "Ongoing",
    series: "Legends of Alden",
    shortPurpose: "The second entry in the trilogy. Expanding the Alden universe with refined gameplay systems and deeper mechanics.",
    purpose: "Legends of Alden: The Awakening builds on the foundation of Origins, refining core systems and introducing new gameplay mechanics. This entry focuses on iterating on what worked while expanding the scope of player interactions and world design.",
    role: "Team Lead & Gameplay Systems Owner. Continuing my ownership of all player gameplay systems, I'm refining the movement and combat systems while building out more complex player interactions. Other systems will be developed and integrated as the trilogy evolves.",
    systemsBullets: [
      "Movement: walk/run/jump",
      "Camera control",
      "Combat: attack",
      "Damage + death flow",
    ],
    tech: ["Unreal Engine", "C++", "Blueprints", "Steam SDK"],
    links: {
      video: "https://youtube.com/watch?v=example",
    },
  },
  {
    slug: "legends-of-alden-3",
    title: "Legends of Alden III",
    category: "Game",
    status: "Ongoing",
    series: "Legends of Alden",
    shortPurpose: "A small Unreal mini-RPG built by a team of two, focusing on gameplay systems and scalable architecture.",
    purpose: "Legends of Alden: Echoes is a focused mini-RPG built collaboratively with my brother. This entry emphasizes clean, scalable architecture and demonstrates how solid gameplay foundations can support a complete game experience even with a small team.",
    role: "Co-Developer (team of 2). Working alongside my brother, I'm responsible for all gameplay systems implementation and establishing the technical architecture. Our small team size allows for rapid iteration and tight feedback loops on gameplay feel.",
    systemsBullets: [
      "Core player controller with responsive movement",
      "Modular combat system with extensible attack patterns",
      "Scalable architecture designed for future expansion",
      "Clean codebase emphasizing maintainability",
    ],
    tech: ["Unreal Engine", "C++", "Blueprints"],
  },
  {
    slug: "heist-gone-wrong",
    title: "Heist Gone Wrong",
    category: "Game",
    status: "In Progress",
    shortPurpose: "A stealth puzzle game developed with a university club. I contribute gameplay systems and provide team leadership.",
    purpose: "Heist Gone Wrong is a collaborative stealth puzzle game developed with my university game development club. The game challenges players to navigate through increasingly complex levels using stealth, timing, and puzzle-solving skills.",
    role: "Systems Developer & Team Lead. I contribute core gameplay systems including AI behavior and level mechanics, while also providing leadership and mentorship to club members. This project combines technical development with team coordination.",
    systemsBullets: [
      "AI patrol system with vision cones and alert states",
      "Sound propagation affecting enemy awareness",
      "Stealth mechanics with detection thresholds",
      "Puzzle elements integrated with stealth gameplay",
    ],
    tech: ["Unreal Engine", "C++", "Blueprints"],
    links: {
      github: "https://github.com/example/heist-gone-wrong",
    },
  },
  {
    slug: "abet-portal",
    title: "ABET Accreditation Portal",
    category: "Software",
    status: "In Progress",
    shortPurpose: "A full-stack web application for managing ABET accreditation workflows. Built with C#/.NET, featuring authentication, Entity Framework Core, and RESTful APIs.",
    purpose: "The ABET Accreditation Portal streamlines the complex process of academic accreditation documentation. This is a serious backend-focused project that handles sensitive academic data through secure, well-architected APIs and database operations.",
    role: "Full-Stack Developer. I designed and implemented the complete backend architecture including authentication systems, database schema, and RESTful API endpoints. The frontend provides intuitive interfaces for faculty and administrators to manage accreditation workflows.",
    systemsBullets: [
      "Authentication and authorization with role-based access control",
      "Entity Framework Core with SQL Server database",
      "RESTful API design following best practices",
      "Document management with versioning and audit trails",
      "Dashboard visualizations for outcome metrics",
    ],
    tech: ["C#", ".NET", "Entity Framework Core", "SQL Server", "React", "Docker"],
    links: {
      github: "https://github.com/example/abet-portal",
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((p) => p.category === category);
};
