import React from "react";
import "../components-css/SummaryStats.css";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const SummaryStats = () => {
  return (
    <div className="summary-stats">
      <div className="summary-stats__orders">
        <div className="summary-stats__shares">
          <ShoppingCartOutlinedIcon className="text-[#5840BB]" />
        </div>
        <div className="summary-stats__group">
          <p className="summary-stats__h2">23 789</p>
          <p className="summary-stats__order  ">Orders</p>
        </div>
        <div className="retangle-3-badge-order bg-[#5840BB] rounded-[20px] text-[#FFFFFF]">
          <p className="pt-[5px]">+20</p>
        </div>
      </div>
      <div className="summary-stats__profits">
        <div className="summary-stats__shares">
          <SavingsOutlinedIcon className="text-[#5840BB]" />
        </div>
        <div className="summary-stats__group">
          <p className="summary-stats__h2">23 789</p>
          <p className="summary-stats__order">Orders</p>
        </div>
        <div className="retangle-3-badge-profit bg-[#5840BB] rounded-[20px] text-[#FFFFFF]">
          <p className="pt-[5px]">+$ 840,00</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryStats;
