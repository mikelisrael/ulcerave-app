"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Feb",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Mar",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Apr",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "May",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Jun",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Jul",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Aug",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Sep",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Oct",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Nov",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
  {
    name: "Dec",
    appointments: Math.floor(Math.random() * 50) + 10,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          // @ts-ignore
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          // @ts-ignore
          fontSize={12}
          tickLine={false}
          axisLine={false}
          // tickFormatter={(value) => `$${value}`}
        />
        <Legend />
        <Bar dataKey="appointments" fill="#d286e4" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
