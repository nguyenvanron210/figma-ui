import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

import img1 from "../img/product-1.png";
import img2 from "../img/product-2.png";
import img3 from "../img/product-3.png";
import img4 from "../img/product-4.png";

const TopSellingProducts = () => {
  return (
    <div className="top-selling-products">
      <h3 className="tsp-h3">Top selling products</h3>
      <button className="btn-see-all">
        <div className="div">
          <p>See all</p>
          <ChevronRightOutlinedIcon className="ml-[18px] text-[#5840BB]" />
        </div>
      </button>
      <div className="position">
        <p className="mb">1</p>
        <p className="mb">2</p>
        <p className="mb">3</p>
        <p className="mb">4</p>
      </div>
      <div className="products-list">
        <div className="product">
          <img srcSet={img1} alt="product-1" />
          <div className="div-p">
            <p className="p-product-name">Tshirt Levis</p>
            <p className="p-product-price">$ 49,99</p>
          </div>
        </div>
        <div className="product">
          <img srcSet={img2} alt="product-2" />
          <div className="div-p">
            <p className="p-product-name">Long jeans jacket</p>
            <p className="p-product-price">$ 129,99</p>
          </div>
        </div>
        <div className="product">
          <img srcSet={img3} alt="product-3" />
          <div className="div-p">
            <p className="p-product-name">Fullcap</p>
            <p className="p-product-price">$ 20,99</p>
          </div>
        </div>
        <div className="product">
          <img srcSet={img4} alt="product-4" />
          <div className="div-p">
            <p className="p-product-name">Adidas pants</p>
            <p className="p-product-price">$ 49,99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
