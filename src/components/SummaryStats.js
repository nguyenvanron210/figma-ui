import React from 'react'
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const SummaryStats = () => {
  return (
    <div className="summary-stats">
      <div className="orders">
        <div className="retangle-3">
          <ShoppingCartOutlinedIcon className="retangle-3-order text-[#5840BB]" />
          <div className="number-order">
            <h2 className="h2-23789">23 789</h2>
            <p className="order">Orders</p>
          </div>
          <div className="retangle-3-badge-order bg-[#5840BB] rounded-[20px] text-[#FFFFFF]">
            <p className="pt-[5px]">+20</p>
          </div>
        </div>
      </div>
      <div className="profits">
        <div className="retangle-3">
          <SavingsOutlinedIcon className="retangle-3-profit text-[#5840BB]" />
          <div className="number-profit">
            <h2 className="h2-12890">$ 12 890,89</h2>
            <p className="profit">Profit</p>
          </div>
          <div className="retangle-3-badge-profit bg-[#5840BB] rounded-[20px] text-[#FFFFFF]">
            <p className="pt-[5px]">+$ 840,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryStats