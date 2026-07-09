import '../../styles/forms.css'
import "./HistoryForm.css";

export default function ExcerciseForm({ value, onChange }) {
  return (
    <div className="field-group history-form">
      <label className="group-label">History</label>
      <div className="field">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Quadriceps strengthening with resistance band"
        />
      </div>
    </div>
  );
}
