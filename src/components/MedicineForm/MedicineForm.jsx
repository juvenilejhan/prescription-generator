import '../../styles/forms.css'
import './MedicineForm.css'
import {
  DOSE_OPTIONS,
  FREQUENCY_OPTIONS,
  DURATION_OPTIONS,
  NOTE_OPTIONS,
} from '../../utils/medicineOptions'

export default function MedicineForm({ medicine, onChange, onAdd }) {
  return (
    <div className="field-group medicine-form">
      <label className="group-label">Add medicine</label>

      <datalist id="med-dose-options">
        {DOSE_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="med-frequency-options">
        {FREQUENCY_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="med-duration-options">
        {DURATION_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>
      <datalist id="med-note-options">
        {NOTE_OPTIONS.map((opt) => (
          <option value={opt} key={opt} />
        ))}
      </datalist>

      <div className="med-row">
        <div className="field" style={{ marginBottom: 8 }}>
          <label>Medicine name</label>
          <input
            value={medicine.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="e.g. Tab. Naproxen 250mg"
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label>Dose</label>
            <input
              value={medicine.dose}
              onChange={(e) => onChange('dose', e.target.value)}
              placeholder="Select or type"
              list="med-dose-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Frequency</label>
            <input
              value={medicine.frequency}
              onChange={(e) => onChange('frequency', e.target.value)}
              placeholder="Select or type"
              list="med-frequency-options"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label>Duration</label>
            <input
              value={medicine.duration}
              onChange={(e) => onChange('duration', e.target.value)}
              placeholder="Select or type"
              list="med-duration-options"
              autoComplete="off"
            />
          </div>
          <div className="field">
            <label>Note</label>
            <input
              value={medicine.note}
              onChange={(e) => onChange('note', e.target.value)}
              placeholder="Select or type"
              list="med-note-options"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <button className="add-med-btn" onClick={onAdd}>
        + Add medicine to prescription
      </button>
    </div>
  )
}
