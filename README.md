### Fitness Session Tracker (Frontend)

Frontend application for managing guided workout sessions, allowing users to create structured training flows using goals and YouTube playlists.

The project focuses on providing a distraction-free environment where users can follow video-based workouts while tracking notes and session progress.

## ⚠️ This repository contains only the frontend. The backend is currently under development.

## Features
* User authentication (register & login flow)
* Dashboard with session history and playlists (in progress)
* Create custom goals for training sessions
* Create and manage YouTube playlists
* Session builder with:
  * Goal selection
  * Playlist selection
  * Optional timer
  * Optional notes panel
* Guided session experience:
  * Automatic YouTube video playback
  * Display of selected goal
  * Toggleable notes sidebar with auto-save
  * Session start control

## Frontend
* Next.js
* React
* TailwindCSS
* shadcn/ui
* Radix UI

## Libraries & Tools
* React Hook Form
* Zod
* Lucide React (icons)
* React YouTube
  
## Installation
Clone the repository
```bash
git clone git@github.com:Rafhael-Augusto/fitness.git
```

Navigate to the project folder
```bash
cd fitness
```

Install dependencies
```bash
npm install
```

Running the project
```bash
npm run dev
```

* Access the application at: http://localhost:3000

## Project Status

🚧 This project is currently under active development.

* Backend not implemented yet
* Some dashboard features are still in progress
* Data persistence is not finalized
* Future Improvements
* Backend integration (API + database)
* Persistent user data
* Improved session tracking
* Analytics and progress insights
*Better UX for session flow
