import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { socialIco } from "../utils/Icon";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="grid">
        <div className="card">
          <div className="logo">SHOP.CO</div>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <img src={socialIco} alt="" className="socialIco" />
        </div>
        <div className="card">
          <h5>COMPANY</h5>
          <ul>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Features</Link>
            </li>
            <li>
              <Link to="#">Works</Link>
            </li>
            <li>
              <Link to="#">Career</Link>
            </li>
          </ul>
        </div>
        <div className="card">
          <h5>Help</h5>
          <ul>
            <li>
              <Link to="#">Customer Support</Link>
            </li>
            <li>
              <Link to="#">Delivery Details</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="card">
          <h5>FAQ</h5>
          <ul>
            <li>
              <Link to="#">Account</Link>
            </li>
            <li>
              <Link to="#">Manage Deliveries</Link>
            </li>
            <li>
              <Link to="#">Orders</Link>
            </li>
            <li>
              <Link to="#">Payments</Link>
            </li>
          </ul>
        </div>
        <div className="card">
          <h5>Resources</h5>
          <ul>
            <li>
              <Link to="#">Free eBooks</Link>
            </li>
            <li>
              <Link to="#">Development Tutorial</Link>
            </li>
            <li>
              <Link to="#">How to - Blog</Link>
            </li>
            <li>
              <Link to="#">Youtube Playlist</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border"></div>
      <FooterCopy className="space_between">
        <div>
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background: #f0f0f0;
  padding: 5rem;
  padding-top: 12rem;
  margin-top: 5rem;

  .border {
    margin-top: 2rem;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  .grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    grid-gap: 3rem;
    .card {
      .logo {
        font-family: "IntegralBold";
        font-size: 28px;
      }
      p {
        color: rgba(0, 0, 0, 0.6);
        margin-top: 1rem;
        font-family: SatoshiMedium;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
      .socialIco {
        margin-top: 1.3rem;
        width: 148px;
        height: 30px;
      }
      h5 {
        color: #000;
        font-family: SatoshiMedium;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }
      ul {
        list-style: none;
        li {
          margin-bottom: 1rem;
          a {
            color: rgba(0, 0, 0, 0.6);
            font-family: SatoshiRegular;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 19px;
          }
        }
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 5rem 1rem;
    padding-top: 18rem;
  }
`;

const FooterCopy = styled.div`
  padding-top: 1.5rem;

  p {
    color: rgba(0, 0, 0, 0.6);
    text-align: right;
    font-family: SatoshiRegular;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
