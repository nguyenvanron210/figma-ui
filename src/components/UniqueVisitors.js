import React from "react";
import ChartUniqueVisitors from "./ChartUniqueVisitors";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import "../components-css/UniqueVisitors.css";

const UniqueVisitors = () => {
  return (
    <div className="unique-visitors">
      <h3 className="h3-unique-visitors">Unique visitors</h3>
      <button className="retangle-weekly">
        Weekly
        <ExpandMoreOutlinedIcon className="ml-[30px] text-[#7979B2]" />
      </button>
      <ChartUniqueVisitors />
    </div>
  );
};

export default UniqueVisitors;
