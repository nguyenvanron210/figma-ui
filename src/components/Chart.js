import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: " ",
    shirts: 20,
    shorts: 10,
  },
  {
    name: "Week 1",
    shirts: 38,
    shorts: 28,
  },
  {
    name: "Week 2",
    shirts: 55,
    shorts: 41,
  },
  {
    name: "Week 3",
    shirts: 70,
    shorts: 60,
  },
  {
    name: "Week 4",
    shirts: 90,
    shorts: 80,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="shirts"
            stroke="#000"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="shorts" stroke="#ff0000" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
