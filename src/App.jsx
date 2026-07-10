import { useState } from "react";

import Header from "./components/Header/Header";
import PatientForm from "./components/PatientForm/PatientForm";
import ChiefComplaintForm from "./components/ChiefComplaintForm/ChiefComplaintForm";
import ExaminationForm from "./components/ExaminationForm/ExaminationForm";
import HistoryForm from "./components/HistoryForm/HistoryForm";
import AdviceForm from "./components/AdviceForm/AdviceForm";
import DiagnosisForm from "./components/DiagnosisForm/DiagnosisForm";
import FollowUpForm from "./components/FollowUpForm/FollowUpForm";
import MedicineForm from "./components/MedicineForm/MedicineForm";
import ExerciseForm from "./components/ExerciseForm/ExerciseForm";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import PrescriptionPad from "./components/PrescriptionPad/PrescriptionPad";

import { emptyMedicine, todayISO } from "./utils/prescription";
import { emptyExercise } from "./utils/therapyOptions";
import "./App.css";

export default function App() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    sex: "",
    contact: "",
    date: todayISO(),
  });
  const [chiefComplaint, setChiefComplaint] = useState("");
  const [examination, setExamination] = useState("");
  const [history, setHistory] = useState("");
  const [advice, setAdvice] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [followUp, setFollowUp] = useState("");

  // Medicine States
  const [draftMedicine, setDraftMedicine] = useState(emptyMedicine());
  const [medicines, setMedicines] = useState([]);

  // Exercise States
  const [draftExercise, setDraftExercise] = useState(emptyExercise());
  const [exercises, setExercises] = useState([]);

  // Patient Handler
  const updatePatient = (key, value) =>
    setPatient((p) => ({ ...p, [key]: value }));

  // Medicine Handlers
  const updateDraftMedicine = (key, value) =>
    setDraftMedicine((d) => ({ ...d, [key]: value }));

  const addMedicine = () => {
    if (draftMedicine.name.trim() === "") return;
    setMedicines((list) => [...list, draftMedicine]);
    setDraftMedicine(emptyMedicine());
  };

  const removeMedicine = (id) =>
    setMedicines((list) => list.filter((m) => m.id !== id));

  // Exercise Handlers
  const updateDraftExercise = (key, value) =>
    setDraftExercise((d) => ({ ...d, [key]: value }));

  const addExercise = () => {
    if (draftExercise.name.trim() === "") return;
    setExercises((list) => [...list, draftExercise]);
    setDraftExercise(emptyExercise());
  };

  const removeExercise = (id) =>
    setExercises((list) => list.filter((ex) => ex.id !== id));

  const handlePrint = () => window.print();

  return (
    <div className="app">
      <Header />

      <div className="layout">
        <div className="form-panel">
          <PatientForm patient={patient} onChange={updatePatient} />
          <ExerciseForm
            exercise={draftExercise}
            onChange={updateDraftExercise}
            onAdd={addExercise}
          />
          <MedicineForm
            medicine={draftMedicine}
            onChange={updateDraftMedicine}
            onAdd={addMedicine}
          />
          <ChiefComplaintForm
            value={chiefComplaint}
            onChange={setChiefComplaint}
          />
          <ExaminationForm value={examination} onChange={setExamination} />
          <HistoryForm value={history} onChange={setHistory} />
          <DiagnosisForm value={diagnosis} onChange={setDiagnosis} />
          <AdviceForm value={advice} onChange={setAdvice} />
          <FollowUpForm value={followUp} onChange={setFollowUp} />
          <ActionButtons onPrint={handlePrint} />
        </div>

        <div className="preview-panel">
          <PrescriptionPad
            patient={patient}
            chiefComplaint={chiefComplaint}
            examination={examination}
            history={history}
            advice={advice}
            diagnosis={diagnosis}
            followUp={followUp}
            medicines={medicines}
            onRemoveMedicine={removeMedicine}
            exercises={exercises}
            onRemoveExercise={removeExercise}
          />
        </div>
      </div>
    </div>
  );
}
