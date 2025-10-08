/**
 * ControlButtons.jsx
 * This component groups the main action buttons (Start/Pause and Reset).
 */
import ControlButton from "./ControlButton"

function ControlButtons({ isActive, onStartPause, onReset }) {
    return (
        <div className="buttons-section">
            <ControlButton
                handleClick={onStartPause}
                buttonContent={isActive ? 'Pause' : 'Start'}>
            </ControlButton>

            <ControlButton
                handleClick={onReset}
                buttonContent={'Reset'}>
            </ControlButton>
        </div>
    )
}

export default ControlButtons