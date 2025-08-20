import { useMemo } from "react";
import type { CellTower } from "../types/CellTower";
import * as d3 from "d3";

const CHART_SIZE = 300;
const OUTER_RADIUS = CHART_SIZE / 2 - 20;
const COLORS = ["#008000", "#FF0000"];

function PieChart({ towers }: { towers: CellTower[] }) {
  const activeCount = useMemo(
    () => towers.filter((tower) => tower.status === "active").length,
    [towers]
  );
  const offlineCount = useMemo(
    () => towers.filter((tower) => tower.status === "offline").length,
    [towers]
  );

  const pie = d3.pie<{ name: string; value: number }>().value((d) => d.value);

  const data = pie([
    { name: "Active", value: activeCount },
    { name: "Offline", value: offlineCount },
  ]);

  const pieData = useMemo(() => data, [data]);

  const arcs = useMemo(() => {
    const arcPathGenerator = d3.arc();

    return pieData.map((p) =>
      arcPathGenerator({
        innerRadius: 0,
        outerRadius: OUTER_RADIUS,
        startAngle: p.startAngle,
        endAngle: p.endAngle,
      })
    );
  }, [pieData]);

  return (
    <div>
      <svg width={300} height={300}>
        <g transform={`translate(${300 / 2}, ${300 / 2})`}>
          {arcs.map((arc: string | null, i: number) => {
            return <path key={i} d={arc || ""} fill={COLORS[i]} />;
          })}
        </g>
      </svg>
    </div>
  );
}

export default PieChart;
