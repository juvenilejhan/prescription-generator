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
  const [chiefComplaint, setChiefComplaint] = useState("");
  const [examination, setExamination] = useState("");
  const [history, setHistory] = useState("");
  const [advice, setAdvice] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [followUp, setFollowUp] = useState("");

  // `draftMedicine` is the single composer field set in the form panel.
  // `medicines` is the committed list that actually appears on the
  // prescription — an entry only lands there once "Add medicine" is
  // clicked.
  const [draftMedicine, setDraftMedicine] = useState(emptyMedicine());
  const [medicines, setMedicines] = useState([]);

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
          <ChiefComplaintForm
            value={chiefComplaint}
            onChange={setChiefComplaint}
          />
          <ExaminationForm value={examination} onChange={setExamination} />
          <HistoryForm value={history} onChange={setHistory} />
          <AdviceForm value={advice} onChange={setAdvice} />
          <DiagnosisForm value={diagnosis} onChange={setDiagnosis} />
          <FollowUpForm value={followUp} onChange={setFollowUp} />
          <MedicineForm
            medicine={draftMedicine}
            onChange={updateDraftMedicine}
            onAdd={addMedicine}
          />
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
          />
        </div>
      </div>
    </div>
  );
}
