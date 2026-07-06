import '../../styles/forms.css'
import './AdviceForm.css'

export default function AdviceForm({ value, onChange }) {
  return (
    <div className="field-group advice-form">
      <label className="group-label">Advice</label>
      <div className="field">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Hot fomentation twice daily, avoid heavy lifting"
        />
      </div>
    </div>
  )
}
