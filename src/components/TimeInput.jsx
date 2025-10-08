/**
 * TimeInput.jsx
 * A reusable input component for setting a unit of time (e.g., days, hours).
 */
function TimeInput({ label, value, onChange, disabled, min, max }) {
  return (
    <div className="input-group">
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        min={min}
        max={max}
      />
      <label>{label}</label>
    </div>
  );
}

export default TimeInput;