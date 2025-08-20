import React, { useState } from "react";
import type { CellTower } from "../types/CellTower";

function Filters({
  allTowers,
  setTowers,
}: {
  allTowers: CellTower[];
  setTowers: React.Dispatch<React.SetStateAction<CellTower[]>>;
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    const filtered = allTowers.filter((tower: CellTower) =>
      tower.name.toLowerCase().includes(search)
    );

    setTowers(filtered);
  };
  const handleSelect = (city: string) => {
    setCity(city);
    const filtered = allTowers.filter((tower: CellTower) =>
      tower.city.toLowerCase().includes(city.toLowerCase())
    );

    setTowers(filtered);
  };
  return (
    <div>
      <h3>Filters</h3>
      <div className="filter-section">
        <div className="filter-item">
          <label className="filter-item-label">Search by tower: </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
        <div className="filter-item">
          <label className="filter-item-label">Filter by city: </label>
          <select
            id="cities"
            value={city}
            onChange={(e) => handleSelect(e.target.value)}
          >
            <option value="">All Cities</option>
            {Array.from(new Set(allTowers.map((tower) => tower.city))).map(
              (c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              )
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
