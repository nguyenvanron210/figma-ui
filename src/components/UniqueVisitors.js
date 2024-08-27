import React from "react";
import ChartUniqueVisitors from "./ChartUniqueVisitors";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import "../components-css/UniqueVisitors.css";

const UniqueVisitors = () => {
  return (
    <div className="unique-visitors">
      <div className="unique-visitors__group">
        <h3 className="unique-visitors__h3">Unique visitors</h3>
        <button className="unique-visitors__retangle-weekly">
          Weekly
          <ExpandMoreOutlinedIcon className="ml-[30px] text-[#7979B2]" />
        </button>
      </div>

      <ChartUniqueVisitors />
    </div>
  );
};

export default UniqueVisitors;
