# Kanban Job Tracker

A modern, responsive Kanban-style job application tracker built with React, TypeScript, Tailwind CSS, and DnD Kit.

The application helps users organize job applications across different stages of the hiring process using an interactive drag-and-drop board.

## Overview

Traditional list-based job trackers make it difficult to visualize where applications are within the hiring process. Kanban Job Tracker provides a visual workflow where each application can be moved between stages as its status changes.

## Screenshots

### Kanban Board

![Kanban Job Tracker](./doc/kanban-board.png)

### Add Job Modal

![Add Job Modal](./doc/add-job-modal.png)

### Mobbile Board

![Mobile View](./doc/mobile-board.png)

### Application workflow

```text
Applied → Interviewing → Offer
    ↓
 Rejected

Users can:

Add new job applications
Move applications between workflow stages
Delete applications
Persist application data in LocalStorage
View a loading skeleton while persisted data is loaded
Use the application across desktop, tablet, and mobile layouts
Features
Kanban Board

The application uses four workflow columns:

Applied
Interviewing
Offer
Rejected

Job cards can be dragged between columns using DnD Kit.

Add Job

Users can add a new job application through a modal form.

The form includes:

Company name
Position
Client-side validation
Accessible labels and error messages
Keyboard-friendly interaction

New applications are automatically added to the Applied column.

Drag and Drop

Drag-and-drop interactions are implemented with DnD Kit.

The implementation supports:

Dragging cards between columns
Dropping onto existing cards
Dropping into empty columns
Drag activation threshold
Visual drag state
Column drop highlighting
Safe handling of invalid drop targets
Delete Jobs

Users can remove applications directly from a job card.

Deleting a job immediately updates the board and persisted LocalStorage state.

LocalStorage Persistence

Job data is persisted in the browser using a reusable useLocalStorage custom hook.

The hook:

Loads saved data from LocalStorage
Falls back to initial data when no saved data exists
Persists state changes automatically
Handles LocalStorage errors safely
Simulates a network delay to demonstrate loading states
Loading Skeleton

A skeleton UI is displayed while persisted job data is being loaded.

This demonstrates how the application can provide visual feedback during asynchronous operations.

Responsive UI

The board adapts to different screen sizes:

Mobile: single-column layout
Tablet: two-column layout
Desktop: four-column layout
Tech Stack
Frontend
React
TypeScript
Vite
Tailwind CSS
UI and Interaction
DnD Kit
Lucide React
React Hook Form
Development and Code Quality
ESLint
Prettier
Husky
lint-staged
Data Persistence
Browser LocalStorage
Custom React hook
Project Structure
src/
├── components/
│   ├── board/
│   │   ├── Board.tsx
│   │   ├── BoardColumn.tsx
│   │   ├── BoardSkeleton.tsx
│   │   ├── JobCard.tsx
│   │   └── index.ts
│   │
│   ├── layout/
│   │   ├── Container.tsx
│   │   ├── Header.tsx
│   │   └── index.ts
│   │
│   ├── modal/
│   │   ├── AddJobModal.tsx
│   │   └── index.ts
│   │
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── EmptyState.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Skeleton.tsx
│       └── index.ts
│
├── constants/
│   ├── status.ts
│   ├── storage.ts
│   └── index.ts
│
├── data/
│   ├── initialJobs.ts
│   └── index.ts
│
├── hooks/
│   ├── useJobs.ts
│   └── useLocalStorage.ts
│
├── lib/
│   ├── dates.ts
│   ├── jobs.ts
│   ├── cn.ts
│   └── index.ts
│
├── types/
│   ├── job.ts
│   ├── common.ts
│   └── index.ts
│
├── App.tsx
└── main.tsx
Architecture

The application follows a lightweight separation-of-concerns approach.

Components

UI components are responsible for presentation and user interaction.

Examples:

Board
BoardColumn
JobCard
AddJobModal
Button
Input
Modal
Hooks

Application state and persistence logic are separated into custom hooks.

useJobs

Responsible for job-related operations:

Add Job
Move Job
Delete Job
Load Jobs
useLocalStorage

Provides reusable browser persistence and loading state management.

Lib

Pure application logic is kept outside React components.

For example:

groupJobsByStatus()
moveJob()
addJob()
deleteJob()
formatRelativeDate()

This keeps components focused on rendering and interaction.

Types

The project uses explicit TypeScript types for application data.

Example:

interface Job {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  createdAt: number;
}

No any type is used for application state.

Type Safety

TypeScript strictness is an important part of the implementation.

Job statuses are represented using a literal type derived from the application's status constants:

export const JOB_STATUS = {
  APPLIED: "Applied",
  INTERVIEWING: "Interviewing",
  OFFER: "Offer",
  REJECTED: "Rejected",
} as const;

export type JobStatus =
  (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

This prevents arbitrary strings from being assigned as job statuses.

For example:

moveJob(jobId, "Interviewing");

is valid, while an unknown status will produce a TypeScript error.

State Management

The application uses React state rather than introducing a global state management library.

The state flow is:

useJobs
   │
   ├── jobs
   ├── addJob()
   ├── moveJob()
   └── deleteJob()
          │
          ▼
   useLocalStorage
          │
          ▼
     LocalStorage

This keeps the application lightweight while still providing a clear state management model.

Drag and Drop Architecture

DnD Kit is used to distinguish between two types of drop targets:

Column
  └── type: "column"

Job Card
  └── type: "job"

This prevents a job ID from accidentally being interpreted as a job status when a card is dropped over another card.

For example:

data: {
  type: "column",
  status: column.id,
}

and:

data: {
  type: "job",
  job,
}

This approach provides safer drag-and-drop state transitions.

LocalStorage Strategy

The useLocalStorage hook uses a generic type parameter:

useLocalStorage<Job[]>({
  key: STORAGE_KEYS.JOBS,
  initialValue: initialJobs,
});

This allows the same hook to support different data types while maintaining TypeScript type safety.

The hook also includes a simulated delay:

delay = 1000

This is used to demonstrate a loading state through the skeleton UI.

Getting Started
Prerequisites

Make sure you have installed:

Node.js
npm

You can verify your installation with:

node --version
npm --version
Installation

Clone the repository:

git clone https://github.com/Psalmotee/kanban-job-tracker.git

Navigate into the project:

cd kanban-job-tracker

Install dependencies:

npm install
Start Development Server
npm run dev

The application will be available at the local Vite development URL shown in your terminal.

Available Scripts
Development
npm run dev

Starts the Vite development server.

Production Build
npm run build

Runs TypeScript compilation and creates the production build.

Lint
npm run lint

Checks the project for ESLint errors.

Fix Lint Issues
npm run lint:fix

Automatically fixes supported ESLint issues.

Format
npm run format

Formats the project using Prettier.

Check Formatting
npm run format:check

Checks whether files are correctly formatted.

Preview Production Build
npm run preview

Runs the production build locally.

Code Quality

The project uses several tools to maintain consistent code quality.

ESLint

ESLint checks the TypeScript and React codebase for potential issues and coding problems.

Prettier

Prettier maintains consistent formatting across the project.

Husky

Husky is used to manage Git hooks.

lint-staged

lint-staged runs formatting and linting against staged files before commits.

This helps prevent improperly formatted or invalid code from being committed.

Accessibility

Accessibility considerations include:

Semantic HTML
Accessible form labels
aria-label attributes where appropriate
aria-invalid form state
Keyboard-accessible controls
Escape key support for the modal
Visible focus states
Accessible delete buttons
Non-color-only status indicators

The interface also avoids relying solely on color to communicate interaction states.

Responsive Design

The Kanban board uses responsive breakpoints to adapt to different viewport sizes.

Mobile
   ↓
1 column

Tablet
   ↓
2 columns

Desktop
   ↓
4 columns

This allows the same application to remain usable across different screen sizes without requiring a separate mobile interface.

Development Decisions
Why DnD Kit?

DnD Kit provides a modern, extensible drag-and-drop system for React applications and gives more control over interaction behavior than implementing drag-and-drop from scratch.

Why LocalStorage?

The challenge requires persistence as a bonus feature. LocalStorage provides a simple browser-based solution without requiring a backend or database.

Why React Hook Form?

React Hook Form provides lightweight form state management and validation while minimizing unnecessary component re-renders.

Why Custom Hooks?

Application logic such as job management and persistence is separated from presentation components to improve maintainability and reuse.

Why TypeScript?

TypeScript provides compile-time validation for job data, statuses, component props, and state transitions. This is particularly useful for a Kanban application because job status changes are central to the application's behavior.

Future Improvements

Potential future enhancements include:

Search and filter jobs
Job notes
Application URLs
Salary information
Interview dates
Follow-up reminders
Job editing
Undo delete
Backend persistence
Authentication
Multiple boards
Analytics dashboard
Automated tests for drag-and-drop behavior
End-to-end testing

These features are intentionally outside the current scope of the internship challenge.

Project Status

Status: Completed

The project currently demonstrates:

React + TypeScript
Type-safe application state
Drag-and-drop interactions
React Hook Form
LocalStorage persistence
Custom React hooks
Loading skeletons
Responsive UI
Accessible interactions
ESLint
Prettier
Husky
lint-staged

Author

Samson Tolulope Moradeyo

Frontend Developer

GitHub: (Psalmotee)[https://github.com/Psalmotee]
LinkedIn: (Samson Moradeyo)[https://www.linkedin.com/in/samson-moradeyo-211b26187
]
License

This project was created as part of a frontend development learning journey, focusing on modern React development, reusable component architecture, accessibility, and scalable design systems.