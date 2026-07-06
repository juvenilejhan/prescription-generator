import '../../styles/forms.css'
import './FollowUpForm.css'

export default function FollowUpForm({ value, onChange }) {
  return (
    <div className="field-group followup-form">
      <label className="group-label">Follow-up</label>
      <div className="field">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}
