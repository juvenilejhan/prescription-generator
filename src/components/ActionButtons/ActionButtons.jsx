import './ActionButtons.css'

export default function ActionButtons({ onPrint }) {
  return (
    <div className="actions">
      <button className="btn btn-primary" onClick={onPrint}>
        Print
      </button>
    </div>
  )
}
