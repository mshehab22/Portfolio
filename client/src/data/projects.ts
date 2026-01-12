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
    shortPurpose:
      "The first entry in the Legends of Alden trilogy. A narrative-driven RPG where I owned the player gameplay systems and served as team lead.",
    purpose:
      "Legends of Alden is a long-term action RPG project designed to explore player-centric gameplay systems and scalable architecture.\n\n" +
      "The project emphasizes building strong foundations first — movement, combat, and state-driven behavior — before expanding content and scope in later iterations.\n\n" +
      "This project is part of a long-term series and serves as a foundation for future refactoring, architectural improvements, and expanded gameplay systems.",
    role:
      "I led a team of four developers and set up the project structure, task breakdown, and core gameplay systems.\n\n" +
      "I personally implemented all player-side mechanics and foundational systems.\n\n" +
      "This project is designed as a long-term codebase and will continue to evolve through refactoring and architectural improvements.",
    systemsBullets: [
      "Player locomotion system (run, jump, air control)",
      "Sword combat system with 4-hit combo chain",
      "Dash attack and evasive roll / dodge mechanics",
      "Player state machine (movement, combat, damage, death)",
      "Damage handling and death flow",
    ],
    tech: ["Unity 2D", "C#"],
    links: {
      github: "https://github.com/mshehab22/LegendsOfAlden1",
      demo: "https://example.com/play/legends-1",
    },
    featuredMedia: {
      type: "image",
      src: "https://placehold.co/1200x675/1a1a2e/ffffff/png?text=Legends+of+Alden+I",
      alt: "Legends of Alden I featured image",
    },
    media: [
      {
        type: "image",
        src: "https://placehold.co/800x450/2d2d44/ffffff/png?text=Combat+System",
        alt: "Combat system screenshot",
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
    shortPurpose:
      "3D sequel prototype to Legends of Alden I focused on gameplay systems — combat flow, targeting, and a scalable player foundation.",
    purpose: `Legends of Alden II is the second entry in the Legends of Alden series and my first deeper step into 3D.

The goal of this project was to build a strong gameplay foundation first — player control, combat flow, targeting, and state-driven behavior — so the project can expand later without rewriting the core.

This is a systems-first prototype. I plan to return to it later, clean it up, and evolve it into a more complete game once the foundation is stable.`,
    role: `I built and integrated the core gameplay systems, focusing on player control, combat logic, targeting, and state-driven behavior.

This project began as a team assignment for a game design class, but moving forward I'm continuing development independently.`,
    systemsBullets: [
      "3D locomotion + camera control (movement, jumping, falling)",
      "Custom player state machine (movement, targeting, combat, casting)",
      "Combat system (light/heavy/sprint attacks with timing and transitions)",
      "Spellcasting prototype (projectiles, aiming, collision + damage, cleanup)",
      "Targeting / lock-on behavior with context-sensitive rotation",
      "Health, damage, and death state transitions",
    ],
    tech: ["Unity 3D", "C#"],
    links: {
      github: "https://github.com/mshehab22/LegendsOfAlden2",
    },
    featuredMedia: {
      type: "image",
      src: "https://placehold.co/1200x675/1a1a2e/ffffff/png?text=Legends+of+Alden+II",
      alt: "Legends of Alden II featured image",
    },
    // TODO: Add screenshots for:
    // - "Combat combo in action"
    // - "Spell projectile + hit"
    // - "Lock-on / targeting mode"
    // - "State machine debug view (optional)"
    // - "Damage/death transition"
  },
  {
    slug: "legends-of-alden-3",
    title: "Legends of Alden III",
    category: "Game",
    status: "Ongoing",
    series: "Legends of Alden",
    shortPurpose:
      "A small Unreal mini-RPG built by a team of two, focusing on gameplay systems and scalable architecture.",
    purpose:
      "Legends of Alden: Echoes is a focused mini-RPG built collaboratively with my brother. This entry emphasizes clean, scalable architecture and demonstrates how solid gameplay foundations can support a complete game experience even with a small team.",
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
    shortPurpose:
      "A stealth puzzle game developed with a university club. I contribute gameplay systems and provide team leadership.",
    purpose:
      "Heist Gone Wrong is a collaborative stealth puzzle game developed with my university game development club. The game challenges players to navigate through increasingly complex levels using stealth, timing, and puzzle-solving skills.",
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
    shortPurpose:
      "A full-stack web application for managing ABET accreditation workflows. Built with C#/.NET, featuring authentication, Entity Framework Core, and RESTful APIs.",
    purpose:
      "The ABET Accreditation Portal streamlines the complex process of academic accreditation documentation. This is a serious backend-focused project that handles sensitive academic data through secure, well-architected APIs and database operations.",
    role: "Full-Stack Developer. I designed and implemented the complete backend architecture including authentication systems, database schema, and RESTful API endpoints. The frontend provides intuitive interfaces for faculty and administrators to manage accreditation workflows.",
    systemsBullets: [
      "Authentication and authorization with role-based access control",
      "Entity Framework Core with SQL Server database",
      "RESTful API design following best practices",
      "Document management with versioning and audit trails",
      "Dashboard visualizations for outcome metrics",
    ],
    tech: [
      "C#",
      ".NET",
      "Entity Framework Core",
      "SQL Server",
      "React",
      "Docker",
    ],
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
