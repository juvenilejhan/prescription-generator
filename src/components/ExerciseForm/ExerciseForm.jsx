import '../../styles/forms.css'
import "./ExerciseForm.css";

export default function ExcerciseForm({ value, onChange }) {
  return (
    <div className="field-group excercise-form">
      <label className="group-label">Exercise</label>
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
