import '../../styles/forms.css'
import "./ExcerciseForm.css";

export default function ExcerciseForm({ value, onChange }) {
  return (
    <div className="field-group excercise-form">
      <label className="group-label">Excercise</label>
      <div className="field">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Hand Stetching, Walking 20 minutes"
        />
      </div>
    </div>
  );
}
