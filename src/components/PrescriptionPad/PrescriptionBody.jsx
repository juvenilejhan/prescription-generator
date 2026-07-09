import { formatDate } from '../../utils/prescription'
import './PrescriptionBody.css'

export default function PrescriptionBody({
  chiefComplaint,
  examination,
  history,
  advice,
  diagnosis,
  followUp,
  medicines,
  onRemoveMedicine,
}) {
  const filledMedicines = medicines.filter((m) => m.name.trim() !== '')

  return (
    <div className="rx-body">
      <div className="rx-watermark">℞</div>

      <div className="rx-body-grid">
        <div className="rx-body-left">
          <div className="rx-section rx-section--tight">
            <p className="k">C/C</p>
            <p className="v">
              {chiefComplaint || <span className="rx-empty">Not specified</span>}
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
            <p className="k">Advice</p>
            <p className="v">
              {advice || <span className="rx-empty">None</span>}
            </p>
          </div>
          <div className="rx-section rx-section--tight">
            <p className="k">Diagnosis</p>
            <p className="v">
              {diagnosis || <span className="rx-empty">Not specified</span>}
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

        <div className="rx-body-right">
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
