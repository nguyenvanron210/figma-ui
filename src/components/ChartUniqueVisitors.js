import React, { PureComponent } from "react";
import "../components-css/Welcome.css";

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
  { name: "Mon", uv: 47 },
  { name: "Tue", uv: 27 },
  { name: "Wed", uv: 47 },
  { name: "Thu", uv: 27 },
  { name: "Fri", uv: 23 },
  { name: "Sat", uv: 49 },
  { name: "Sun", uv: 30 },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-connect-nulls-mql3pj";

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              connectNulls
              type="monotone"
              dataKey="uv"
              stroke="#7979B2"
              fill="#7979B2"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
