import { useMemo } from "react";
import type { CellTower } from "../types/CellTower";
import SummaryCard from "./SummaryCard";

function Header({ allTowers }: { allTowers: CellTower[] }) {
  const totalTowers = allTowers.length;

  const activeTowers = useMemo(
    () => allTowers.filter((tower: CellTower) => tower.status === "active").length,
    [allTowers]
  ); 

  const averageSignal = useMemo(
    () =>
      allTowers.reduce((sum, tower: CellTower) => sum + tower.signalStrength, 0) /
      totalTowers,
    [allTowers, totalTowers]
  );

  return (
    <div className="section">
      <h2>Cell Tower Dashboard</h2>
      <div className="summary-cards-wrapper">
        <SummaryCard title="Total Towers" data={totalTowers} />
        <SummaryCard title="Active Towers" data={activeTowers} />   
        <SummaryCard title="Average Signal" data={averageSignal.toFixed(2)} />
      </div>
    </div>
  );
}

export default Header;
