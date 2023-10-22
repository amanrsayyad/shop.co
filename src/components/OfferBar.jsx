import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const OfferBar = ({ setOfferBar }) => {
  return (
    <OfferContainer className="rel flex_center m-auto">
      <p>
        Sign up and get 20% off to your first order.&nbsp;
        <Link to="#">Sign Up Now</Link>
      </p>
      <div className="close" onClick={() => setOfferBar(false)}>
        <AiOutlineClose className="closeIco" />
      </div>
    </OfferContainer>
  );
};

export default OfferBar;

const OfferContainer = styled.div`
  background-color: #000;
  width: 100%;
  height: 38px;

  p {
    color: #fff;
    text-align: center;
    font-size: 15px;
    font-family: "SatoshiLight";

    a {
      color: #fff;
      font-weight: 600;
      border-bottom: 1px solid #fff;
      font-family: "SatoshiLight";
    }

    @media only screen and (max-width: 500px) {
      font-size: 14px;
    }
  }
  .close {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    cursor: pointer;

    .closeIco {
      color: #fff;
      font-size: 17px;
    }

    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;
