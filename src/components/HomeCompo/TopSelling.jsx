import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./CompoStyles";
import { product5, product6, product7, product8 } from "../../utils/Images";
import { starFull, starHalf } from "../../utils/Icon";

const TopSelling = () => {
  return (
    <HomeContainer>
      <h2>top selling</h2>
      <div className="grid">
        <Link to="#" className="card">
          <img src={product5} alt="" />
          <h4>Vertical Stripped Shirt</h4>
          <div className="star_container">
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starHalf} alt="" className="star_half" />
            <p>
              <span>4.5/</span>5
            </p>
          </div>
          <h3>$212</h3>
        </Link>
        <Link to="#" className="card">
          <img src={product6} alt="" />
          <h4>Courage Graphic T-shirt</h4>
          <div className="star_container">
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starHalf} alt="" className="star_half" />
            <p>
              <span>4.5/</span>5
            </p>
          </div>
          <h3>$145</h3>
        </Link>
        <Link to="#" className="card">
          <img src={product7} alt="" />
          <h4>Loose Fit Bermuda Shorts</h4>
          <div className="star_container">
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starHalf} alt="" className="star_half" />
            <p>
              <span>4.5/</span>5
            </p>
          </div>
          <h3>$80</h3>
        </Link>
        <Link to="#" className="card">
          <img src={product8} alt="" />
          <h4>Faded Skinny Jeans</h4>
          <div className="star_container">
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starFull} alt="" className="star_full" />
            <img src={starHalf} alt="" className="star_half" />
            <p>
              <span>4.5/</span>5
            </p>
          </div>
          <h3>$210</h3>
        </Link>
      </div>
      <Link to="#" className="view_all">
        View All
      </Link>
      <div className="border"></div>
    </HomeContainer>
  );
};

export default TopSelling;
