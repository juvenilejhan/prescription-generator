import '../../styles/forms.css'
import "./ExaminationForm.css";

export default function ExcerciseForm({ value, onChange }) {
  return (
    <div className="field-group examination-form">
      <label className="group-label">Examination</label>
      <div className="field">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Gait antalgic, favoring right leg, no visible deformity"
        />
      </div>
    </div>
  );
}
