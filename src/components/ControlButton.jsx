/**
 * ControlButton.jsx
 * A generic, reusable button component for the main timer controls.
 */

function ControlButton({ handleClick, buttonContent }) {
    return (
        <button className="control-button" onClick={handleClick}>
            {buttonContent}
        </button>
    )
}

export default ControlButton