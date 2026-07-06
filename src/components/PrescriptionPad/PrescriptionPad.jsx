import Letterhead from './Letterhead'
import PatientInfoBar from './PatientInfoBar'
import PrescriptionBody from './PrescriptionBody'
import Signature from './Signature'
import './PrescriptionPad.css'

export default function PrescriptionPad({
  patient,
  diagnosis,
  medicines,
  onRemoveMedicine,
  advice,
  exercise,
  followUp,
}) {
  return (
    <div className="rx-pad">
      <Letterhead />
      <PatientInfoBar patient={patient} />
      <PrescriptionBody
        diagnosis={diagnosis}
        medicines={medicines}
        onRemoveMedicine={onRemoveMedicine}
        advice={advice}
        excercise={exercise}
        followUp={followUp}
      />
      <Signature />
    </div>
  )
}
