// =====================================================
// EDIT CONTENT HERE - Add, edit, or remove projects
// =====================================================

export type ProjectCategory = "Game" | "Software";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: string;
  shortPurpose: string;
  systemsBullets: string[];
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    video?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "legends-of-alden-1",
    title: "Legends of Alden: Origins",
    category: "Game",
    status: "Released",
    shortPurpose: "A narrative-driven RPG featuring dynamic combat and branching storylines set in a fantasy realm.",
    systemsBullets: [
      "Implemented turn-based combat system with status effects and skill trees",
      "Designed save/load system with multiple save slots and auto-save functionality",
      "Built dialogue system supporting branching narratives and player choices",
      "Created inventory management with item stacking and equipment slots",
    ],
    tech: ["Unity", "C#", "Addressables", "SQLite"],
    links: {
      github: "https://github.com/example/legends-of-alden-1",
      demo: "https://example.com/play/legends-1",
    },
  },
  {
    slug: "legends-of-alden-2",
    title: "Legends of Alden: The Awakening",
    category: "Game",
    status: "In Development",
    shortPurpose: "Sequel expanding the Alden universe with real-time combat and multiplayer features.",
    systemsBullets: [
      "Developing real-time action combat with combo chains and dodge mechanics",
      "Building networked multiplayer supporting co-op dungeon crawling",
      "Implementing procedural dungeon generation with scalable difficulty",
      "Creating modular quest system with dynamic objectives",
    ],
    tech: ["Unreal Engine", "C++", "Blueprints", "Steam SDK"],
    links: {
      video: "https://youtube.com/watch?v=example",
    },
  },
  {
    slug: "legends-of-alden-3",
    title: "Legends of Alden: Mobile",
    category: "Game",
    status: "Prototype",
    shortPurpose: "Mobile adaptation bringing the Alden experience to iOS and Android platforms.",
    systemsBullets: [
      "Adapting control schemes for touch-based input systems",
      "Optimizing rendering pipeline for mobile GPU constraints",
      "Implementing cloud save synchronization across devices",
      "Building monetization framework with ethical design principles",
    ],
    tech: ["Unity", "C#", "Firebase", "iOS", "Android"],
  },
  {
    slug: "heist-gone-wrong",
    title: "Heist Gone Wrong",
    category: "Game",
    status: "Game Jam Winner",
    shortPurpose: "A stealth puzzle game where players navigate procedurally generated bank vaults.",
    systemsBullets: [
      "Designed AI patrol system with vision cones and alert states",
      "Built procedural level generation ensuring solvable layouts",
      "Implemented sound propagation system affecting enemy awareness",
      "Created time-rewind mechanic for puzzle solving",
    ],
    tech: ["Godot", "GDScript", "Aseprite"],
    links: {
      github: "https://github.com/example/heist-gone-wrong",
      demo: "https://example.itch.io/heist-gone-wrong",
    },
  },
  {
    slug: "abet-portal",
    title: "ABET Accreditation Portal",
    category: "Software",
    status: "Production",
    shortPurpose: "Web platform streamlining ABET accreditation documentation and assessment workflows.",
    systemsBullets: [
      "Built role-based access control for faculty, administrators, and reviewers",
      "Implemented document versioning with audit trail capabilities",
      "Created automated report generation from assessment data",
      "Designed dashboard visualizations for outcome achievement metrics",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
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
