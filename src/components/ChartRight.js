import React from "react";
import "../components-css/ChartRight.css";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Chart from "./Chart";
export const ChartRight = () => {
  return (
    <div className="chart-right">
      <div className="chart-right__group">
        <h3 className="chart-right__h3">Sales statistics</h3>
        <button className="chart-right__retangle-monthly">
          Monthly
          <ExpandMoreOutlinedIcon className="ml-[30px] text-[#7979B2]" />
        </button>
      </div>
      <Chart />
    </div>
  );
};
