# FlowSpark HR - Human Resource Management System

A modern, intuitive HR management system built with React, TypeScript, and Tailwind CSS. Designed to streamline employee attendance tracking, leave management, salary processing, and team collaboration.

## Features

- **Dashboard**: Overview of key HR metrics and quick actions
- **Attendance Tracking**: Monitor employee attendance patterns
- **Leave Management**: Request and approve leaves
- **Salary Management**: Process and track employee salaries
- **Community**: Team collaboration and announcements
- **Theme Support**: Light and dark mode for better user experience

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **State Management**: React Query
- **Backend Integration**: Supabase
- **Routing**: React Router

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd flowspark-hr
```

2. Install dependencies:
```sh
npm install
# or
bun install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your Supabase credentials.

4. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── integrations/   # External service integrations
├── lib/            # Utility functions
└── main.tsx        # Application entry point
```

## License

MIT
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
