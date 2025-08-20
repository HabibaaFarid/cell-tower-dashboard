import type { Summary } from "../types/Summary";

function SummaryCard({ title, data }: Summary) {
  return (
    <div className="summary-card">
      <p className="summary-card-title">{title}</p>
      <p className="summary-card-data">{data}</p>
    </div>
  );
}

export default SummaryCard;
