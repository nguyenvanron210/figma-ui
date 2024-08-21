import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import img5 from "../img/avatar1.png"
import ntc from "../img/ntc.png";

const TopActions = () => {
  return (
    <div className="top-actions">
      <input
        class="top-action-input"
        required
        type="text"
        placeholder="Search for products..."
      />
      <SearchOutlinedIcon className="top-action-icon-search" fontSize="large" />
      <div className="top-action-notication">
        <img srcSet={ntc} alt="ntc-2" className="ntc"/>
        <NotificationsNoneOutlinedIcon className="top-action-icon-notication" />
      </div>
      <div className="top-action-avatar">
        <img srcSet={img5} alt="product-1" className="img5" />
      </div>
    </div>
  );
};

export default TopActions;
