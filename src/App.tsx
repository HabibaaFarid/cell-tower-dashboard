import "./App.scss";
import { useState } from "react";
import BarChart from "./components/BarChart";
import Filters from "./components/Filters";
import Header from "./components/Header";
import PieChart from "./components/PieChart";
import TowersTable from "./components/TowersTable";
import type { CellTower } from "./types/CellTower";
import towersData from "./data/Towers";

function App() {
  const allTowers: CellTower[] = towersData;
  const [towers, setTowers] = useState<CellTower[]>(allTowers);
  
  return (
    <div className="app">
      <Header allTowers={towers} />
      <div className="section">
        <Filters allTowers={allTowers} setTowers={setTowers} />
        <TowersTable towers={towers} />
      </div>
      <div className="section">
        <h3>Charts</h3>
        <div className="charts-section">
          <BarChart towers={towers} />
          <PieChart towers={towers} />
        </div>
      </div>
    </div>
  );
}

export default App;
