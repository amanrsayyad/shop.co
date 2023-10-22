import React from "react";
import styled from "styled-components";
import { mailIco } from "../utils/Icon";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterMain>
        <div>
          <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        </div>
        <div>
          <div className="input_container">
            <img src={mailIco} alt="" className="icon" />
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div className="subscribe">Subscribe to Newsletter</div>
        </div>
      </NewsletterMain>
    </NewsletterContainer>
  );
};

export default Newsletter;

const NewsletterContainer = styled.div`
  position: relative;
`;

const NewsletterMain = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 1240px;
  padding: 36px 64px;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: #000;
  margin: auto;

  div {
    h2 {
      color: #fff;
      font-family: "IntegralBold";
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px;
    }
    .input_container {
      position: relative;
      display: flex;
      width: 349px;
      align-items: flex-start;
      gap: 12px;
      border-radius: 62px;
      background: #fff;
      padding: 12px 16px;

      .icon {
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
      }

      input {
        width: 100%;
        padding: 7px 16px;
        padding-left: 35px;
        border: none;
        outline: none;
        color: rgba(0, 0, 0, 0.4);
        font-family: "SatoshiRegular";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    .subscribe {
      display: flex;
      width: 349px;
      padding: 12px 16px;
      justify-content: center;
      align-items: center;
      gap: 12px;
      color: #000;
      border-radius: 62px;
      background: #fff;
      font-family: "SatoshiMedium";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-top: 0.8rem;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 991px) {
    top: 50%;
    justify-content: center;
    flex-direction: column;
    width: 95%;
    padding: 20px 20px;
    margin-bottom: -15rem;

    div {
      h2 {
        font-size: 32px;
        margin-bottom: 1rem;
      }
      .input_container {
        width: 320px;
        margin: auto;
      }
      .subscribe {
        display: flex;
        width: 320px;
      }
    }
  }
`;
