import '../../styles/forms.css'
import './PatientForm.css'

export default function PatientForm({ patient, onChange }) {
  return (
    <div className="field-group patient-form">
      <label className="group-label">Patient details</label>

      <div className="field-row">
        <div className="field">
          <label>Name</label>
          <input
            value={patient.name}
            onChange={(e) => onChange('name', e.target.value)}
            placeholder="Patient's full name"
          />
        </div>
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            value={patient.date}
            onChange={(e) => onChange('date', e.target.value)}
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label>Age</label>
          <input
            value={patient.age}
            onChange={(e) => onChange('age', e.target.value)}
            placeholder="e.g. 42"
          />
        </div>
        <div className="field">
          <label>Sex</label>
          <select
            value={patient.sex}
            onChange={(e) => onChange('sex', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label>Contact (optional)</label>
        <input
          value={patient.contact}
          onChange={(e) => onChange('contact', e.target.value)}
          placeholder="Phone number"
        />
      </div>
    </div>
  )
}
