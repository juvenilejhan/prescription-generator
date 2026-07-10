import Letterhead from "./Letterhead";
import PatientInfoBar from "./PatientInfoBar";
import PrescriptionBody from "./PrescriptionBody";
import Signature from "./Signature";
import "./PrescriptionPad.css";
import Footer from "../Footer/Footer";

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
  exercises, // ADD THIS
  onRemoveExercise, // ADD THIS
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
      />
      {/* <Signature /> */}
      <Footer />
    </div>
  );
}
