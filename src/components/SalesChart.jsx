import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

import Title from "./Title";
import { useState } from "react";
import { salesTrend } from "../data/data";
import { formatCurrency } from "../utils/helpers";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-tooltip-bgColor rounded-lg px-4 py-2">
        <p className="text-neutral-gray-50">
          {formatCurrency(payload[0].payload.amount)}
        </p>
      </div>
    );
  }
};

export function SalesChart() {
  const [hoverBarIndex, setHoverBarIndex] = useState(null);

  return (
    <section className="w-full rounded-[14px] border border-border-color bg-white-color px-5 pt-[18px] text-stat-color">
      <Title title="Sales Trends" expand="sort-by " />

      <div className="h-[294px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            margin={{
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            }}
            data={salesTrend}
            onMouseMove={(currentBar) => {
              if (currentBar.isTooltipActive) {
                setHoverBarIndex(currentBar.activeTooltipIndex);
              } else {
                setHoverBarIndex(null);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              fontSize="12px"
              tick={{ fill: "var(--stat-color)" }}
            />
            <YAxis fontSize="12px" tick={{ fill: "var(--stat-color)" }} />
            <Tooltip
              cursor={{ fill: "transparent" }}
              strokeDasharray={null}
              content={<CustomTooltip />}
            />
            <Bar
              dataKey="amount"
              unit="$"
              radius={[100, 100, 0, 0]}
              barSize={30}
            >
              {salesTrend.map((entry, index) => (
                <Cell
                  fill={hoverBarIndex === index ? "#34caa5" : "#34caa533"}
                  key={entry.name}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default SalesChart;
