import "./App.css";
import BarChart from "./components/BarChart";
import Filters from "./components/Filters";
import Header from "./components/Header";
import PieChart from "./components/PieChart";
import TowersTable from "./components/TowersTable";

function App() {
  return (
    <>
      <Header />
      <Filters />
      <TowersTable />
      <BarChart />
      <PieChart />
    </>
  );
}

export default App;
