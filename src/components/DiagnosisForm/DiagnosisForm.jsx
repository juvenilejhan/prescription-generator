import '../../styles/forms.css'
import './DiagnosisForm.css'

export default function DiagnosisForm({ value, onChange }) {
  return (
    <div className="field-group diagnosis-form">
      <label className="group-label">Diagnosis</label>
      <div className="field">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. Lumbar spondylosis with radiculopathy"
        />
      </div>
    </div>
  )
}
