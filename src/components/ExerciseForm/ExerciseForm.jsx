import "../../styles/forms.css";
import "./ExerciseForm.css";
import {
  EXERCISE_OPTIONS,
  SIDE_OPTIONS,
  POSITION_OPTIONS,
  TYPE_OPTIONS,
  SETS_REPS_OPTIONS,
  HOLD_TIME_OPTIONS,
  EX_FREQUENCY_OPTIONS,
  EX_DURATION_OPTIONS,
  EX_NOTE_OPTIONS,
} from "../../utils/therapyOptions";

export default function ExerciseForm({ exercise, onChange, onAdd }) {
  return (
    <div className="field-group exercise-form">
      <label className="group-label">Add physical therapy exercise</label>

      <datalist id="ex-name-options">
        {EXERCISE_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="ex-position-options">
        {POSITION_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="ex-type-options">
        {TYPE_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="ex-sets-options">
        {SETS_REPS_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="ex-hold-options">
        {HOLD_TIME_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="ex-freq-options">
        {EX_FREQUENCY_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="ex-dur-options">
        {EX_DURATION_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="ex-note-options">
        {EX_NOTE_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>

      <div className="med-row">
        <div className="field-row">
          <div className="field" style={{ flex: 2, marginBottom: 8 }}>
            <label>Exercise Name</label>
            <input
              value={exercise.name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="Type or select"
              list="ex-name-options"
              autoComplete="off"
            />
          </div>
          <div className="field" style={{ flex: 1, marginBottom: 8 }}>
            <label>Side</label>
            <select
              value={exercise.side}
              onChange={(e) => onChange("side", e.target.value)}
            >
              <option value="">Select...</option>
              {SIDE_OPTIONS.map((opt) => (
                <option value={opt} key={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field-row" style={{ marginBottom: 8 }}>
          <div className="field">
            <label>Type</label>
            <input
              value={exercise.type}
              onChange={(e) => onChange("type", e.target.value)}
              placeholder="Type or select"
              list="ex-type-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Position</label>
            <input
              value={exercise.position}
              onChange={(e) => onChange("position", e.target.value)}
              placeholder="Type or select"
              list="ex-position-options"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="field-row" style={{ marginBottom: 8 }}>
          <div className="field">
            <label>Sets</label>
            <input
              value={exercise.sets}
              onChange={(e) => onChange("sets", e.target.value)}
              placeholder="e.g. 3"
              list="ex-sets-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Reps</label>
            <input
              value={exercise.reps}
              onChange={(e) => onChange("reps", e.target.value)}
              placeholder="e.g. 10"
              list="ex-sets-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Hold Time</label>
            <input
              value={exercise.holdTime}
              onChange={(e) => onChange("holdTime", e.target.value)}
              placeholder="If stretch"
              list="ex-hold-options"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label>Frequency</label>
            <input
              value={exercise.frequency}
              onChange={(e) => onChange("frequency", e.target.value)}
              placeholder="Select or type"
              list="ex-freq-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Duration</label>
            <input
              value={exercise.duration}
              onChange={(e) => onChange("duration", e.target.value)}
              placeholder="Select or type"
              list="ex-dur-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Note</label>
            <input
              value={exercise.note}
              onChange={(e) => onChange("note", e.target.value)}
              placeholder="Cue / Caution"
              list="ex-note-options"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <button className="add-med-btn" onClick={onAdd}>
        + Add exercise to prescription
      </button>
    </div>
  );
}
