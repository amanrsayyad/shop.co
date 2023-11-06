import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { arrowRightShort } from "../utils/Icon";
import CartCompo from "../components/ShopCompo/CartCompo";

const Cart = () => {
  return (
    <CartMain>
      <div className="border"></div>
      <div className="pageTitle jc_start">
        <p>Home</p>
        <img src={arrowRightShort} alt="" />
        <span>Casual</span>
      </div>
      <CartCompo />
    </CartMain>
  );
};

export default Cart;

const CartMain = styled.div`
  padding: 0rem 5rem;
  padding-bottom: 4rem;

  .border {
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 1px;
  }
  .pageTitle {
    padding: 2rem 0rem;

    p {
      color: rgba(0, 0, 0, 0.6);
      font-family: "SatoshiRegular";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    img {
      margin: 0px 8px;
    }
    span {
      color: #000;
      font-family: "SatoshiRegular";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  @media only screen and (max-width: 991px) {
    padding: 0rem 1rem;
  }
`;
