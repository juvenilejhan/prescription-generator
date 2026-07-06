import { formatDate } from '../../utils/prescription'
import './PatientInfoBar.css'

export default function PatientInfoBar({ patient }) {
  return (
    <div className="rx-patient-row">
      <div className="rx-patient-field">
        <span className="k">Patient</span>
        <span className="v">{patient.name || '—'}</span>
      </div>
      <div className="rx-patient-field">
        <span className="k">Age / sex</span>
        <span className="v">
          {patient.age || '—'}
          {patient.sex ? ` / ${patient.sex}` : ''}
        </span>
      </div>
      <div className="rx-patient-field">
        <span className="k">Contact</span>
        <span className="v">{patient.contact || '—'}</span>
      </div>
      <div className="rx-patient-field">
        <span className="k">Date</span>
        <span className="v">{formatDate(patient.date)}</span>
      </div>
    </div>
  )
}
