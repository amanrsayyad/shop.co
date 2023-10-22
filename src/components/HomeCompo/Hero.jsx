import React from "react";
import styled from "styled-components";
import { heroBg, hero } from "../../utils/Images";
import { star1, star2 } from "../../utils/Icon";

const Hero = () => {
  return (
    <HeroContainer>
      <img src={star1} alt="" className="star1" />
      <img src={star2} alt="" className="star2" />
      <div className="card">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="shop">Shop Now</div>
        <div className="counters">
          <div className="counter_data">
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div className="border"></div>
          <div className="counter_data">
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div className="border borderNone"></div>
          <div className="counter_data">
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <img src={hero} alt="" className="hero_res" />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  height: 85vh;
  width: 100%;
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;

  .star1 {
    position: absolute;
    top: 55%;
    left: 52%;
  }
  .star2 {
    position: absolute;
    top: 28%;
    right: 5%;
  }
  .hero_res {
    display: none;
  }

  .card {
    padding-top: 4rem;
    padding-left: 5rem;
    width: 520px;
    h1 {
      font-family: "IntegralBold";
      font-size: 45px;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 15px;
      font-family: "SatoshiLight";
      color: grey;
      font-weight: 600;
      margin-bottom: 1.2rem;
    }
    .shop {
      padding: 13px 20px;
      border-radius: 25px;
      background-color: #000;
      color: #fff;
      width: 170px;
      text-align: center;
      font-size: 14px;
      font-family: "SatoshiLight";
    }
    .counters {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 600px;
      margin-top: 2rem;

      .counter_data {
        h2 {
          font-family: "SatoshiMedium";
          font-weight: 700;
          font-size: 35px;
        }
        p {
          font-family: "SatoshiLight";
          font-size: 17px;
        }
      }
      .border {
        background-color: #dad9d9;
        height: 80px;
        width: 1px;
        margin: 0px 25px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    height: 100%;
    background-image: none;
    background-color: #f2f0f1;

    .borderNone {
      display: none;
    }
    .hero_res {
      display: block;
      width: 100%;
      height: 470px;
      flex-shrink: 0;
      margin-bottom: -1rem;
    }

    .star1 {
      position: absolute;
      top: 95%;
      left: 5%;
    }
    .star2 {
      position: absolute;
      top: 80%;
      right: 5%;
    }

    .card {
      padding-top: 4rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: 100%;

      .counters {
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;

        .border {
          background-color: #dad9d9;
          height: 80px;
          width: 1px;
          margin: 0px 0px;
          margin-right: 2rem;
          margin-left: 1rem;
        }
      }
    }
  }
`;
