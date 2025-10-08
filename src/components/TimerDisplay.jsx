/**
 * TimerDisplay.jsx
 * A presentational component responsible for displaying the formatted time.
 * readable format (DD:HH:MM:SS).
 */

function TimerDisplay({ time }) {
  const formatTime = (unit) => Math.max(0, unit).toString().padStart(2, '0');

  const days = formatTime(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = formatTime(Math.floor((time / (1000 * 60 * 60)) % 24));
  const mins = formatTime(Math.floor((time / (1000 * 60)) % 60));
  const secs = formatTime(Math.floor((time / 1000) % 60));

  return (
    <div className="timer-display">
      <span>{days}</span>:
      <span>{hours}</span>:
      <span>{mins}</span>:
      <span>{secs}</span>
    </div>
  );
}

export default TimerDisplay;