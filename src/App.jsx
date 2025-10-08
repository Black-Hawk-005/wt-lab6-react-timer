/**
 * App.jsx
 * This is the main component that orchestrates the entire countdown timer application.
 */

import { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimeSetter from './components/TimeSetter';
import ControlButtons from './components/ControlButtons';
import './App.css';

function App() {
  const [initialTime, setInitialTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1000);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleSetTime = (timeInMs) => {
    setInitialTime(timeInMs);
    setTimeLeft(timeInMs);
    setIsActive(false);
  };

  const handleStartPause = () => {
    if (timeLeft > 0) {
        setIsActive(!isActive);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(initialTime);
  };

  return (
    <div className="app-container">
      <h1>Timer</h1>
      <TimeSetter onSetTime={handleSetTime} isActive={isActive} />
      <TimerDisplay time={timeLeft} />
      <ControlButtons
        isActive={isActive}
        onStartPause={handleStartPause}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;