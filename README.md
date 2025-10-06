# Dynamic Task Board with Drag-and-Drop and API Integration

A React-based Kanban-style task board application that allows users to manage tasks across three columns: **To Do**, **In Progress**, and **Done**. Tasks are fetched from a public API (JSONPlaceholder `/todos` endpoint), support drag-and-drop reordering/movement between columns, adding/deleting tasks, local persistence via `localStorage`, error handling with boundaries, and performance optimizations using memoization.

This project adheres to the specified requirements:

- **UI**: Kanban board with three columns.
- **Task Management**: Fetch on mount, add via form, delete tasks.
- **Drag-and-Drop**: Powered by `react-beautiful-dnd`.
- **Persistence**: State saved to `localStorage` on changes.
- **Custom Hook**: `useFetch` for API calls with loading/error states.
- **Error Handling**: React Error Boundary with retry fallback.
- **Optimization**: `React.memo` for task cards to avoid unnecessary re-renders.
- **Styling**: Tailwind CSS for responsive, clean design.

## Features

- Fetch and display tasks from JSONPlaceholder API.
- Drag tasks between columns or reorder within a column.
- Add new tasks via a simple form (added to "To Do" by default).
- Delete individual tasks.
- Persist all changes in `localStorage` (survives page refresh).
- Loading spinner and error messages during API fetch.
- Graceful error handling with a retry button.
- Responsive layout that works on desktop and mobile.

## Tech Stack

- **React 18+** with TypeScript for type-safe development.
- **react-beautiful-dnd** for drag-and-drop (with `@types/react-beautiful-dnd` for TS support).
- **Tailwind CSS** for styling.
- **Axios** for API requests (via custom `useFetch` hook).
- **useReducer** for complex state management (columns, loading, errors).
- **localStorage** for persistence.
- **React Error Boundary** for runtime error catching.

## Prerequisites

- Node.js (v18+ recommended).
- Yarn or npm.

## Installation

1. Clone the repository:
