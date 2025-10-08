/**
 * SetTimerButton.jsx
 * A specific button component for submitting the time-setter form.
 */
function SetTimerButton({ isActive }) {
    return (
        <button type="submit" disabled={isActive}>
            Set Timer
        </button>
    )
}

export default SetTimerButton