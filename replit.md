# Portfolio Website

## Overview

A professional, minimal portfolio website for showcasing games and software projects. Built with a React frontend and Express backend, the site is data-driven - all project and profile content is managed through simple TypeScript data files. The design follows GitHub's clean documentation style combined with Vercel's minimal aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state, React hooks for local state
- **Design System**: CSS custom properties for theming with light mode support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build**: esbuild for server bundling, Vite for client bundling
- **API Pattern**: RESTful routes prefixed with `/api`
- **Static Serving**: Express serves built frontend assets in production

### Data-Driven Content
Projects and profile information are stored in TypeScript data files rather than a database:
- `client/src/data/profile.ts` - Personal info, bio, social links
- `client/src/data/projects.ts` - Array of project objects with slugs, descriptions, tech stacks

This approach allows easy content editing without database management while maintaining type safety.

### Key Design Patterns
- **Layout Component**: Wraps all pages with consistent Navbar and Footer
- **Component Composition**: Reusable components like ProjectCard, Tag, StatusIndicator
- **Path Aliases**: `@/` maps to client/src, `@shared/` maps to shared folder

## External Dependencies

### Database
- **PostgreSQL**: Configured via Drizzle ORM with `DATABASE_URL` environment variable
- **Schema Location**: `shared/schema.ts` defines database tables
- **Migrations**: Managed through `drizzle-kit push` command

### UI Components
- **Radix UI**: Headless UI primitives for accessible components
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (GitHub, LinkedIn icons)

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment
- **TypeScript**: Strict mode enabled with path mapping

### Fonts
- **Inter**: Primary font for headings and UI (Google Fonts)
- **JetBrains Mono**: Monospace font for code/tech tags
- **DM Sans, Fira Code, Geist Mono**: Additional font options loaded