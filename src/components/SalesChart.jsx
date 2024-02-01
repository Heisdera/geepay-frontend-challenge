import {
  ResponsiveContainer,
  BarChart as RechartBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Cell,
  Tooltip,
} from "recharts";
import Title from "./Title";
import { salesTrend } from "../data/data";
import { useState } from "react";
import { formatCurrency } from "../utils/helpers";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div
        className="relative mx-2"
        style={{
          transform: `translate(-60%, -0px)`,
        }}
      >
        <div className="rounded-md bg-tooltip-bgColor px-2 py-[5px] text-sm text-neutral-gray-50">
          {formatCurrency(payload[0].value)}
          <svg
            className="absolute left-0 top-full h-2 w-full text-stat-color"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon
              className="fill-current"
              points="0, 0 127.5, 127.5 255, 0"
            />
          </svg>
        </div>
      </div>
    );
  }
};

const BARS_HEIGHT = 220;

function BarChart() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [barPos, setBarPos] = useState({ x: 0, y: 0 });

  return (
    <section className="w-full rounded-[14px] border border-border-color bg-white-color px-5 pt-[18px] text-stat-color">
      <Title title="Sales Trends" expand="sort-by " />

      <div className="h-[294px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartBarChart
            width={500}
            height={255}
            data={salesTrend}
            margin={{ top: 10, right: 8, left: -8, bottom: 10 }}
            onMouseMove={(currentBar, e) => {
              if (
                currentBar.isTooltipActive &&
                e.target.classList.contains("recharts-rectangle")
              ) {
                const bounds = e.target.getBoundingClientRect();
                const x = currentBar.activeCoordinate.x;
                const y = BARS_HEIGHT - bounds.height;
                setActiveIndex(currentBar.activeTooltipIndex);
                setBarPos({ x, y });
              } else {
                setActiveIndex(null);
              }
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="20%" stopColor="#34caa5" />
                <stop offset="100%" stopColor="rgba(52, 202, 165, 0.2)" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              fontSize={12}
              tickMargin={5}
              axisLine={false}
              tick={{ fill: "var(--stat-color)" }}
              tickLine={false}
              scale="point"
              padding={{ left: 15, right: 15 }}
            />
            <YAxis
              tickLine={false}
              fontSize={12}
              tick={{ fill: "var(--stat-color)" }}
              axisLine={false}
            />
            <Tooltip
              content={<CustomTooltip isActive={activeIndex} />}
              cursor={false}
              allowEscapeViewBox={{ x: true, y: false }}
              position={barPos}
              active={activeIndex !== null ? true : false}
              defaultIndex={activeIndex === null ? 0 : activeIndex}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Bar dataKey="amount" barSize={30} radius={[20, 20, 0, 0]}>
              {salesTrend.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  className="cursor-pointer"
                  fill={
                    activeIndex === index
                      ? "url(#colorUv)"
                      : "rgba(52, 202, 165, 0.2)"
                  }
                />
              ))}
            </Bar>
          </RechartBarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default BarChart;
