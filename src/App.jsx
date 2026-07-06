import { useState } from "react";

import Header from "./components/Header/Header";
import PatientForm from "./components/PatientForm/PatientForm";
import DiagnosisForm from "./components/DiagnosisForm/DiagnosisForm";
import MedicineForm from "./components/MedicineForm/MedicineForm";
import AdviceForm from "./components/AdviceForm/AdviceForm";
import FollowUpForm from "./components/FollowUpForm/FollowUpForm";
import ExerciseForm from "./components/ExerciseForm/ExerciseForm";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import PrescriptionPad from "./components/PrescriptionPad/PrescriptionPad";

import { emptyMedicine, todayISO } from "./utils/prescription";
import "./App.css";

export default function App() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    sex: "",
    contact: "",
    date: todayISO(),
  });
  const [diagnosis, setDiagnosis] = useState("");

  // `draftMedicine` is the single composer field set in the form panel.
  // `medicines` is the committed list that actually appears on the
  // prescription — an entry only lands there once "Add medicine" is
  // clicked.
  const [draftMedicine, setDraftMedicine] = useState(emptyMedicine());
  const [medicines, setMedicines] = useState([]);

  const [advice, setAdvice] = useState("");
  const [exercise, setExercise] = useState("");
  const [followUp, setFollowUp] = useState("");

  const updatePatient = (key, value) =>
    setPatient((p) => ({ ...p, [key]: value }));

  const updateDraftMedicine = (key, value) =>
    setDraftMedicine((d) => ({ ...d, [key]: value }));

  const addMedicine = () => {
    if (draftMedicine.name.trim() === "") return;
    setMedicines((list) => [...list, draftMedicine]);
    setDraftMedicine(emptyMedicine());
  };

  const removeMedicine = (id) =>
    setMedicines((list) => list.filter((m) => m.id !== id));

  const handlePrint = () => window.print();

  return (
    <div className="app">
      <Header />

      <div className="layout">
        <div className="form-panel">
          <PatientForm patient={patient} onChange={updatePatient} />
          <DiagnosisForm value={diagnosis} onChange={setDiagnosis} />
          <MedicineForm
            medicine={draftMedicine}
            onChange={updateDraftMedicine}
            onAdd={addMedicine}
          />
          <AdviceForm value={advice} onChange={setAdvice} />
          <ExerciseForm value={exercise} onChange={setExercise} />
          <FollowUpForm value={followUp} onChange={setFollowUp} />
          <ActionButtons onPrint={handlePrint} />
        </div>

        <div className="preview-panel">
          <PrescriptionPad
            patient={patient}
            diagnosis={diagnosis}
            medicines={medicines}
            onRemoveMedicine={removeMedicine}
            advice={advice}
            excercise={exercise}
            followUp={followUp}
          />
        </div>
      </div>
    </div>
  );
}
