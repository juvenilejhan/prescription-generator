import '../../styles/forms.css'
import "./ChiefComplaintForm.css";

export default function ExcerciseForm({ value, onChange }) {
  return (
    <div className="field-group complaint-form">
      <label className="group-label">Chief Complaint</label>
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
