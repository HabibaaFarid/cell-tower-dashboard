import { useMemo } from "react";
import type { CellTower } from "../types/CellTower";

const SVG_WIDTH = 300;
const SVG_HEIGHT = 400;
const BAR_WIDTH = 40;
const BAR_GAP = 40;

function BarChart({ towers }: { towers: CellTower[] }) {
  const cityCounts = useMemo(() => {
    return towers.reduce((acc, item) => {
      acc[item.city] = (acc[item.city] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [towers]);

  const result = Object.entries(cityCounts).map(([name, value]) => ({
    name,
    value,
  }));

  const maxValue = Math.max(...result.map((item) => item.value), 1);

  return (
    <div>
      <h4>Number of Towers per City</h4>
      <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        {result.map((item, index) => {
          const barHeight = (item.value / maxValue) * (SVG_HEIGHT - 50);
          const x = index * (BAR_WIDTH + BAR_GAP);
          const y = SVG_HEIGHT - barHeight - 30;
          return (
            <g key={index}>
              <rect
                x={x}
                y={y}
                width={BAR_WIDTH}
                height={barHeight}
                rx={6}
                fill="#5b84d3"
              />
              <text
                x={x + BAR_WIDTH / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize={14}
                fill="#375c8c"
              >
                {item.value}
              </text>
              <text
                x={x + BAR_WIDTH / 2}
                y={SVG_HEIGHT - 10}
                textAnchor="middle"
                fontSize={14}
                fill="#375c8c"
              >
                {item.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default BarChart;
