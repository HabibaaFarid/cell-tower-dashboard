import type { CellTower } from "../types/CellTower";

function TowersTable({ towers }: { towers: CellTower[] }) {
  return (
    <div>
      <h3>Towers Data</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">City</th>
              <th className="table-header">Network Type</th>
              <th className="table-header">Status</th>
              <th className="table-header">Signal Strength</th>
            </tr>
          </thead>
          <tbody>
            {towers.map((tower) => (
              <tr key={tower.id}>
                <td>{tower.name}</td>
                <td>{tower.city}</td>
                <td>{tower.networkType}</td>
                <td className={`${tower.status}`}>
                  {tower.status}
                </td>
                <td>{tower.signalStrength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TowersTable;
