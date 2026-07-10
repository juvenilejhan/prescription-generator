import Letterhead from "./Letterhead";
import PatientInfoBar from "./PatientInfoBar";
import PrescriptionBody from "./PrescriptionBody";
import Signature from "./Signature";
import "./PrescriptionPad.css";
import Footer from "../Footer/Footer";

// At the top of the function:
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
  exercises,
  onRemoveExercise,
  modalities, // ADD THIS
  onRemoveModality, // ADD THIS
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
        exercises={exercises} // ADD THIS
        onRemoveExercise={onRemoveExercise} // ADD THIS
        modalities={modalities}
        onRemoveModality={onRemoveModality}
      />
      {/* <Signature /> */}
      <Footer />
    </div>
  );
}
