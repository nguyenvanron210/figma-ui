import React from 'react'
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const Navigation = () => {
  return (
    <div className="navigation">
      <span className="navigation-span bg-white rounded-[20px] font-weight-700 text-[#5840BB]">
        <StorefrontOutlinedIcon className="mr-[41px] text-[#5840BB]" />
        Dashboard
      </span>
      <span className="navigation-span text-white">
        <ShoppingCartOutlinedIcon className="mr-[41px]" />
        Orders
      </span>
      <span className="navigation-span text-white">
        <SellOutlinedIcon className="mr-[41px]" />
        Products
      </span>
      <span className="navigation-span text-white">
        <CampaignOutlinedIcon className="mr-[41px]" />
        Marketing
      </span>
      <span className="navigation-span text-white">
        <GradeOutlinedIcon className="mr-[41px]" />
        Rates
      </span>
      <span className="navigation-span text-white">
        <AssessmentOutlinedIcon className="mr-[41px]" />
        Reports
      </span>
    </div>
  );
}

export default Navigation