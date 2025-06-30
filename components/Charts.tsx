"use client";
import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { outreachData } from "@/constant";

const Charts = () => {
  const chartConfig = {
    Open_Rate: {
      label: "Open Rate",
      color: "#2dd4bf",
    },
    Reply_Rate: {
      label: "Reply Rate",
      color: "#60a5fa",
    },
    Conversion: {
      label: "Conversion",
      color: "#a78bfa",
    },
  } satisfies ChartConfig;

  return (
    <div className="rounded-xl w-full border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-900/30 p-6 shadow-lg backdrop-blur-sm h-full min-h-[500px] flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Outreach Performance
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Weekly email campaign metrics
          </p>
        </div>
        <div className="rounded-lg bg-gray-800 px-3 py-1 text-sm font-medium text-teal-400">
          Last 7 days
        </div>
      </div>

      <div className="flex-1">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={outreachData}
              margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#9CA3AF"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#9CA3AF" }}
              />
              <YAxis
                stroke="#9CA3AF"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#9CA3AF" }}
              />
              <Tooltip
                contentStyle={{
                  background: "#111827",
                  borderColor: "#1F2937",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
                itemStyle={{ color: "#F3F4F6" }}
                labelStyle={{
                  color: "#2DD4BF",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
                cursor={{ fill: "#1f2937" }}
              />
              <Bar
                dataKey="Open_Rate"
                fill="var(--color-Open_Rate)"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="Reply_Rate"
                fill="var(--color-Reply_Rate)"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
              <Bar
                dataKey="Conversion"
                fill="var(--color-Conversion)"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default Charts;
