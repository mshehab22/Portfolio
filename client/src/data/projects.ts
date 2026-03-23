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
  systemsNote?: string;
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
  currentFocus?: string[];
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

This project began as a team assignment for a game design class. Moving forward, I am continuing development independently with the intent of refining architecture and expanding gameplay.`,
    systemsBullets: [
      "3D locomotion and camera control (movement, jumping, falling)",
      "State-machine driven player controller (modular movement, combat, targeting, casting)",
      "Combat system with light, heavy, and sprint attacks using timed transitions",
      "Spellcasting prototype (projectiles, aiming, collision, damage)",
      "Targeting / lock-on behavior with context-sensitive rotation",
      "Health, damage, and death state transitions",
    ],
    systemsNote:
      "The custom state machine is the backbone of this prototype. It separates movement, combat, targeting, and casting into clear states so new mechanics can be added later without rewriting core logic.",
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
  status: "In Progress",
  series: "Legends of Alden",

  shortPurpose:
    "A third-person action combat prototype in Unreal Engine 5 focused on state-driven gameplay, animation-integrated combat, and scalable gameplay architecture.",

  purpose:
    "Legends of Alden III is a third-person action combat project focused on building scalable gameplay systems and clean architecture in Unreal Engine 5.\n\n" +
    "The project emphasizes state-driven gameplay, reusable character systems, and deep integration between animation and gameplay logic.\n\n" +
    "Rather than focusing on content, the goal is to build a strong technical foundation for combat systems, responsiveness, and long-term RPG scalability.",

  role:
    "I designed and implemented all core gameplay systems in C++, including player movement, combat mechanics, and interaction systems.\n\n" + 
    "I architected a shared base character system used by both player and enemies to enable reusable combat behavior.\n\n" +
    "I implemented state-driven logic, animation-integrated combat systems, and advanced mechanics such as motion warping and attack buffering.",

  systemsBullets: [
    "Third-person player controller using Enhanced Input (movement, camera, actions)",
    "State-driven gameplay system (ActionState + CharacterState) controlling all transitions",
    "Combat system with light/heavy attacks, dodging, and weapon equip/unequip",
    "Directional dodge system using vector math (dot product + cross product → 8 directions)",
    "Weapon-driven animation system (per-weapon attack montages, decoupled from character)",
    "Box trace–based hit detection for accurate melee collision during attacks",
    "Attack buffering system for smooth combo chaining",
    "Attribute system (health, mana, regen, damage) implemented as reusable component",
    "Interface-based interaction system for hits and pickups (decoupled design)",
    "Animation-driven combat using root motion and motion warping for alignment with targets",
    "Directional hit reaction system based on impact angle",
    "Enemy AI loop (patrol, chase, attack) integrated with shared combat system",
  ],

  tech: ["Unreal Engine 5", "C++"],

  links: {
    github: "https://github.com/mshehab22/LegendsOfAlden3", 
    demo: "", // add later
  },

  featuredMedia: {
    type: "image",
    src: "https://placehold.co/1200x675/1a1a2e/ffffff/png?text=Legends+of+Alden+III",
    alt: "Legends of Alden III gameplay",
  },

  media: [
    {
      type: "image",
      src: "https://placehold.co/800x450/2d2d44/ffffff/png?text=Combat+System",
      alt: "Combat system",
      caption: "State-driven combat system with animation integration",
    },
    {
      type: "image",
      src: "https://placehold.co/800x450/3d3d5c/ffffff/png?text=Motion+Warping",
      alt: "Motion warping",
      caption: "Motion warping aligning attacks dynamically with targets",
    },
    {
      type: "image",
      src: "https://placehold.co/800x450/4d4d6e/ffffff/png?text=Enemy+AI",
      alt: "Enemy AI",
      caption: "Enemy AI system integrated with shared combat base",
    },
  ],
},
  {
  slug: "lion-king-2d",
  title: "Lion King 2D (Unity)",
  category: "Game",
  status: "Completed",

  shortPurpose:
    "A 2D platformer inspired by The Lion King, focused on player movement, traversal mechanics, and a complete boss fight experience.",

  purpose:
    "This project focuses on building a responsive 2D gameplay experience using Unity's physics system.\n\n" +
    "The main goal was to design and integrate core gameplay systems including player movement, environmental interaction, and combat into a cohesive level.\n\n" +
    "Special attention was given to player feel, responsiveness, and ensuring that traversal and combat systems work together smoothly within a complete gameplay loop.",

  role:
    "I implemented the player gameplay systems, including movement, jumping, and environmental interactions.\n\n" +
    "I designed and built the final level, integrating traversal mechanics and combat into a complete experience.\n\n" +
    "I also implemented the boss fight logic, including behavior flow and player interaction during combat.",

  systemsBullets: [
    "Physics-based 2D player controller using Rigidbody2D",
    "Jumping system with tuned gravity and movement responsiveness",
    "Environmental interaction system (climbing and swinging via triggers)",
    "Boss fight system with behavior states (attack, idle, cooldown)",
    "Animation-driven interactions integrated with gameplay mechanics",
    "Final level design integrating traversal and combat systems",
  ],

  tech: ["Unity 2D", "C#"],

  links: {
    github: "", // add if you have it
    demo: "",   // optional
  },

  featuredMedia: {
    type: "image",
    src: "https://placehold.co/1200x675/1a1a2e/ffffff/png?text=Lion+King+2D",
    alt: "Lion King 2D featured image",
  },

  media: [
    {
      type: "image",
      src: "https://placehold.co/800x450/2d2d44/ffffff/png?text=Player+Movement",
      alt: "Player movement system",
      caption: "Responsive player movement and jumping system",
    },
    {
      type: "image",
      src: "https://placehold.co/800x450/3d3d5c/ffffff/png?text=Boss+Fight",
      alt: "Boss fight",
      caption: "Final boss fight with attack behavior states",
    },
    {
      type: "image",
      src: "https://placehold.co/800x450/4d4d6e/ffffff/png?text=Traversal",
      alt: "Traversal mechanics",
      caption: "Climbing and swinging using environmental triggers",
    },
  ],
},
  {
  slug: "abet-accreditation-portal",
  title: "ABET Accreditation Portal",
  category: "Software",
  status: "Completed",

  shortPurpose:
    "A multi-role backend system that automates ABET accreditation workflows, replacing manual processes with a state-driven, role-secured platform.",

  purpose:
    "The ABET Accreditation Portal is a backend system designed to manage accreditation workflows for a university department.\n\n" +
    "The system enforces state-driven report lifecycles, role-based access control, and relational data integrity across multiple user roles (Admin, Chair, Faculty, Evaluator).\n\n" +
    "The project focuses on workflow correctness, secure authorization, and scalable backend architecture using ASP.NET Core and Entity Framework Core.",

  role:
    "Backend Developer in a 4-person team, responsible for core backend architecture, data modeling, and workflow logic.\n\n" +
    "Designed and implemented RESTful APIs, role-based authorization, report lifecycle management, and database schema using EF Core.\n\n" +
    "Ensured clean separation of concerns (Controllers → Services → Entities) and built reusable, maintainable backend systems.",

  systemsBullets: [
    "RESTful API built with ASP.NET Core supporting multi-role workflows (Admin, Chair, Faculty, Evaluator)",
    "State-driven report lifecycle system (Draft → Submitted → Approved/Rejected) with enforced transitions",
    "JWT-based authentication with secure login and password reset functionality",
    "Role-based authorization system with domain-level validation (department and ownership checks)",
    "Relational database design using EF Core (Code First) with entities, relationships, and migrations",
    "Service-layer architecture with DTOs to separate business logic from controllers",
    "Dynamic search and filtering system using IQueryable composition for efficient queries",
    "Notification system triggered by workflow events (approvals, revisions, evaluations)",
  ],

  tech: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server"],

  links: {
    github: "https://github.com/mshehab22/ABET_Portal", 
  },

  featuredMedia: {
    type: "image",
    src: "https://placehold.co/1200x675/1a1a2e/ffffff/png?text=ABET+Portal",
    alt: "ABET Accreditation Portal",
  },

  media: [
    {
      type: "image",
      src: "https://placehold.co/800x450/2d2d44/ffffff/png?text=Dashboard",
      alt: "Dashboard",
      caption: "Multi-role dashboard for faculty, chairs, and evaluators",
    },
    {
      type: "image",
      src: "https://placehold.co/800x450/3d3d5c/ffffff/png?text=Workflow",
      alt: "Workflow",
      caption: "State-driven report lifecycle system",
    },
    {
      type: "image",
      src: "https://placehold.co/800x450/4d4d6e/ffffff/png?text=Reports",
      alt: "Reports",
      caption: "Report submission and evaluation system",
    },
  ],
},
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((p) => p.category === category);
};
