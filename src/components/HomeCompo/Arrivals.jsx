import React from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./CompoStyles";
import { product1, product2, product3, product4 } from "../../utils/Images";
import { starFull, starHalf } from "../../utils/Icon";

const Arrivals = () => {
  return (
    <HomeContainer>
      <h2>NEW ARRIVALS</h2>
      <div className="grid">
        <Link to="#" className="card">
          <img src={product1} alt="" />
          <h4>T-Shirt with Tape Details</h4>
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
          <h3>$120</h3>
        </Link>
        <Link to="#" className="card">
          <img src={product2} alt="" />
          <h4>Skinnt Fit Jeans</h4>
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
          <h3>$120</h3>
        </Link>
        <Link to="#" className="card">
          <img src={product3} alt="" />
          <h4>Checkred Shirt</h4>
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
          <h3>$120</h3>
        </Link>
        <Link to="#" className="card">
          <img src={product4} alt="" />
          <h4>Sleev Striped T-Shirt</h4>
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
          <h3>$120</h3>
        </Link>
      </div>
      <Link to="#" className="view_all">
        View All
      </Link>
      <div className="border"></div>
    </HomeContainer>
  );
};

export default Arrivals;

