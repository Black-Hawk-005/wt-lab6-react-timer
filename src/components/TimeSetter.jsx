/**
 * TimeSetter.jsx
 * This component acts as a form to let users input the desired countdown time.
 */
import { useState } from 'react';
import TimeInput from './TimeInput';
import SetTimerButton from './SetTimerButton';

function TimeSetter({ onSetTime, isActive }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    const totalMilliseconds =
      (parseInt(days, 10) * 24 * 60 * 60 +
       parseInt(hours, 10) * 60 * 60 +
       parseInt(minutes, 10) * 60 +
       parseInt(seconds, 10)) * 1000;

    onSetTime(totalMilliseconds);
  };

  return (
    <form onSubmit={handleSubmit} className="time-setter-form">
      <TimeInput label="Days" value={days} onChange={setDays} min="0" disabled={isActive} />
      <TimeInput label="Hours" value={hours} onChange={setHours} min="0" max="23" disabled={isActive} />
      <TimeInput label="Minutes" value={minutes} onChange={setMinutes} min="0" max="59" disabled={isActive} />
      <TimeInput label="Seconds" value={seconds} onChange={setSeconds} min="0" max="59" disabled={isActive} />
      <SetTimerButton isActive={isActive} />
    </form>
  );
}

export default TimeSetter;