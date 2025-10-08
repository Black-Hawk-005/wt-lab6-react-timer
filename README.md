# React Timer Application

A countdown timer application built with React and Vite for Web Technology Lab 6.

🔗 **Live Demo**: [https://YOUR_USERNAME.github.io/wt-lab6-react-timer/](https://YOUR_USERNAME.github.io/wt-lab6-react-timer/)

## Features

- **Time Setting**: Set custom countdown time in hours, minutes, and seconds
- **Timer Controls**: Start, pause, and reset the timer
- **Live Countdown**: Real-time countdown display with millisecond precision
- **Component Architecture**: Modular React components for maintainability

## Project Structure

```
src/
├── App.jsx                      # Main application component
├── components/
│   ├── TimerDisplay.jsx         # Displays the countdown
│   ├── TimeSetter.jsx           # Time input container
│   ├── TimeInput.jsx            # Individual time input field
│   ├── SetTimerButton.jsx       # Button to set the timer
│   ├── ControlButtons.jsx       # Timer control buttons container
│   └── ControlButton.jsx        # Individual control button
└── App.css                      # Styling
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. Enter the desired time in hours, minutes, and seconds
2. Click "Set Timer" to initialize the countdown
3. Use "Start" to begin the countdown
4. Use "Pause" to pause the countdown
5. Use "Reset" to return to the initial time set

## Technologies Used

- **React 19**: Frontend framework
- **Vite**: Build tool and dev server
- **ESLint**: Code linting
- **CSS**: Styling
