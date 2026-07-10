import { formatDate } from "../../utils/prescription";
import "./PrescriptionBody.css";

export default function PrescriptionBody({
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
  modalities, // NEW
  onRemoveModality, // NEW
}) {
  const filledMedicines = medicines.filter((m) => m.name.trim() !== "");
  const filledExercises = exercises.filter((ex) => ex.name.trim() !== "");
  const filledModalities = modalities.filter((mod) => mod.name.trim() !== ""); // NEW

  return (
    <div className="rx-body">
      <div className="rx-watermark">℞</div>

      <div className="rx-body-grid">
        {/* LEFT COLUMN */}
        <div className="rx-body-left">
          <div className="rx-section rx-section--tight">
            <p className="k">C/C</p>
            <p className="v">
              {chiefComplaint || (
                <span className="rx-empty">Not specified</span>
              )}
            </p>
          </div>
          <div className="rx-section rx-section--tight">
            <p className="k">O/E</p>
            <p className="v">
              {examination || <span className="rx-empty">Not specified</span>}
            </p>
          </div>
          <div className="rx-section rx-section--tight">
            <p className="k">H/O</p>
            <p className="v">
              {history || <span className="rx-empty">Not specified</span>}
            </p>
          </div>
          <div className="rx-section rx-section--tight">
            <p className="k">Diagnosis</p>
            <p className="v">
              {diagnosis || <span className="rx-empty">Not specified</span>}
            </p>
          </div>
          <div className="rx-section rx-section--tight">
            <p className="k">Advice</p>
            <p className="v">
              {advice || <span className="rx-empty">None</span>}
            </p>
          </div>
          <div className="rx-section rx-section--tight">
            <p className="k">Follow-up</p>
            <p className="v">
              {followUp ? (
                formatDate(followUp)
              ) : (
                <span className="rx-empty">Not scheduled</span>
              )}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="rx-body-right">
          {/* --- PHYSICAL THERAPY (Contains Exercises & Modalities) --- */}
          <div className="rx-section">
            <p className="k">Physical Therapy</p>

            {filledExercises.length === 0 && filledModalities.length === 0 ? (
              <p className="rx-empty">No physical therapy added</p>
            ) : (
              <>
                {/* Exercises Sub-section */}
                {filledExercises.length > 0 && (
                  <div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        marginBottom: "4px",
                        color: "#555",
                      }}
                    >
                      Exercises:
                    </p>
                    <ul className="rx-med-list">
                      {filledExercises.map((ex, i) => (
                        <li className="rx-med-item" key={ex.id}>
                          <span className="rx-med-num">{i + 1}.</span>
                          <div className="rx-med-content">
                            <div className="rx-med-name">{ex.name}</div>
                            <div className="rx-med-detail">
                              {[
                                ex.side,
                                ex.position,
                                ex.type,
                                ex.sets && ex.reps
                                  ? `${ex.sets} × ${ex.reps}`
                                  : null,
                                ex.holdTime,
                                ex.frequency,
                                ex.duration,
                                ex.note,
                              ]
                                .filter(Boolean)
                                .join(" · ")}
                            </div>
                          </div>
                          <button
                            type="button"
                            className="rx-med-remove"
                            onClick={() => onRemoveExercise(ex.id)}
                            aria-label={`Remove ${ex.name}`}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Modalities Sub-section */}
                {filledModalities.length > 0 && (
                  <div
                    style={{
                      marginBottom: filledExercises.length > 0 ? "12px" : "0",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        marginBottom: "4px",
                        color: "#555",
                      }}
                    >
                      Modalities:
                    </p>
                    <ul className="rx-med-list">
                      {filledModalities.map((mod) => (
                        <li className="rx-med-item" key={mod.id}>
                          <span className="rx-med-num">•</span>
                          <div className="rx-med-content">
                            <div className="rx-med-name">{mod.name}</div>
                            <div className="rx-med-detail">
                              {[
                                mod.area,
                                mod.mode,
                                mod.intensity,
                                mod.duration,
                                mod.frequency,
                              ]
                                .filter(Boolean)
                                .join(" · ")}
                            </div>
                          </div>
                          <button
                            type="button"
                            className="rx-med-remove"
                            onClick={() => onRemoveModality(mod.id)}
                            aria-label={`Remove ${mod.name}`}
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          {/* --- MEDICINES SECTION --- */}
          <div className="rx-section">
            <p className="k">Medicines</p>
            {filledMedicines.length === 0 ? (
              <p className="rx-empty">No medicines added</p>
            ) : (
              <ul className="rx-med-list">
                {filledMedicines.map((m, i) => (
                  <li className="rx-med-item" key={m.id}>
                    <span className="rx-med-num">{i + 1}.</span>
                    <div className="rx-med-content">
                      <div className="rx-med-name">{m.name}</div>
                      <div className="rx-med-detail">
                        {[m.dose, m.frequency, m.duration, m.note]
                          .filter(Boolean)
                          .join(" · ")}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="rx-med-remove"
                      onClick={() => onRemoveMedicine(m.id)}
                      aria-label={`Remove ${m.name}`}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
