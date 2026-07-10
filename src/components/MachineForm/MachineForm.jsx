import "../../styles/forms.css";
import "./MachineForm.css";
import {
  MACHINE_OPTIONS,
  AREA_OPTIONS,
  MODE_OPTIONS,
  INTENSITY_OPTIONS,
  MOD_DURATION_OPTIONS,
  MOD_FREQUENCY_OPTIONS,
} from "../../utils/modalityOptions";

export default function MachineForm({ modality, onChange, onAdd }) {
  return (
    <div className="field-group machine-form">
      <label className="group-label">Add therapy modality / machine</label>

      <datalist id="mod-name-options">
        {MACHINE_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="mod-area-options">
        {AREA_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="mod-mode-options">
        {MODE_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="mod-intensity-options">
        {INTENSITY_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="mod-dur-options">
        {MOD_DURATION_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="mod-freq-options">
        {MOD_FREQUENCY_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>

      <div className="med-row">
        {/* Row 1: Machine & Area */}
        <div className="field-row" style={{ marginBottom: 8 }}>
          <div className="field" style={{ flex: 1.5 }}>
            <label>Machine</label>
            <input
              value={modality.name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="e.g. IFT"
              list="mod-name-options"
              autoComplete="off"
            />
          </div>
          <div className="field" style={{ flex: 1 }}>
            <label>Body Area</label>
            <input
              value={modality.area}
              onChange={(e) => onChange("area", e.target.value)}
              placeholder="e.g. Lumbar"
              list="mod-area-options"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Row 2: Mode, Intensity, Duration */}
        <div className="field-row" style={{ marginBottom: 8 }}>
          <div className="field">
            <label>Mode</label>
            <input
              value={modality.mode}
              onChange={(e) => onChange("mode", e.target.value)}
              placeholder="e.g. Burst"
              list="mod-mode-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Intensity</label>
            <input
              value={modality.intensity}
              onChange={(e) => onChange("intensity", e.target.value)}
              placeholder="Tolerance"
              list="mod-intensity-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Duration</label>
            <input
              value={modality.duration}
              onChange={(e) => onChange("duration", e.target.value)}
              placeholder="e.g. 15 mins"
              list="mod-dur-options"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Row 3: Frequency */}
        <div className="field-row">
          <div className="field">
            <label>Frequency</label>
            <input
              value={modality.frequency}
              onChange={(e) => onChange("frequency", e.target.value)}
              placeholder="e.g. Daily"
              list="mod-freq-options"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <button className="add-med-btn" onClick={onAdd}>
        + Add modality to prescription
      </button>
    </div>
  );
}
