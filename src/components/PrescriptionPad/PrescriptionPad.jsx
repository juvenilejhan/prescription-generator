import Letterhead from "./Letterhead";
import PatientInfoBar from "./PatientInfoBar";
import PrescriptionBody from "./PrescriptionBody";
import Signature from "./Signature";
import "./PrescriptionPad.css";

export default function PrescriptionPad({
  patient,
  chiefComplaint,
  examination,
  history,
  advice,
  diagnosis,
  followUp,
  medicines,
  onRemoveMedicine,
}) {
  return (
    <div className="rx-pad">
      <Letterhead />
      <PatientInfoBar patient={patient} />
      <PrescriptionBody
        chiefComplaint={chiefComplaint}
        examination={examination}
        history={history}
        advice={advice}
        diagnosis={diagnosis}
        followUp={followUp}
        medicines={medicines}
        onRemoveMedicine={onRemoveMedicine}
      />
      <Signature />
    </div>
  );
}
