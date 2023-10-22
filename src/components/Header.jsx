import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  cartIco,
  profileIco,
  IoIosArrowDown,
  BiSearch,
  searchIco,
  menuIco,
} from "../utils/Icon";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="menuDiv">
        <img src={menuIco} alt="" className="menuIco" />
        <Link to="/" className="logo">SHOP.CO</Link>
      </div>
      <HeaderLinks className="flex_center">
        <li>
          <Link to="/shop" className="flex_center">
            Shop <IoIosArrowDown className="icon" />
          </Link>
        </li>
        <li>
          <Link to="#">On Sale</Link>
        </li>
        <li>
          <Link to="#">New Arrivals</Link>
        </li>
        <li>
          <Link to="#">Brands</Link>
        </li>
      </HeaderLinks>
      <SearchContainer className="jc_start">
        <div className="search flex_center">
          <BiSearch className="icon" />
        </div>
        <div className="flex_center">
          <input type="text" placeholder="Search for products..." />
        </div>
      </SearchContainer>
      <IconList className="flex_center">
        <Link to="#" className="icon search">
          <img src={searchIco} alt="" />
        </Link>
        <Link to="#" className="icon">
          <img src={cartIco} alt="" />
        </Link>
        <Link to="#" className="icon">
          <img src={profileIco} alt="" />
        </Link>
      </IconList>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;

  .logo {
    font-family: "IntegralBold";
    font-size: 28px;
    color: #000;
  }
  .menuIco {
    display: none;
  }

  @media only screen and (max-width: 991px) {
    justify-content: space-between;
    padding: 20px 10px;

    .menuDiv {
      display: flex;
      align-items: center;
      justify-content: center;

      .menuIco {
        display: block;
        margin-bottom: -5px;
        margin-right: 10px;
      }
    }
  }
`;

const HeaderLinks = styled.ul`
  list-style: none;
  margin-left: 2.5rem;
  margin-right: 0.5rem;

  li {
    margin-right: 1.9rem;
    a {
      font-weight: 600;
      color: #000000;
      font-family: "SatoshiLight";

      .icon {
        margin-left: 0.2rem;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  height: 48px;
  width: 550px;
  background-color: #f0f0f0;
  padding: 0px 15px;
  border-radius: 25px;

  .search {
    margin-right: 0.7rem;
    .icon {
      color: gray;
      font-size: 24px;
    }
  }
  input {
    background-color: #f0f0f0;
    border: none;
    outline: none;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

const IconList = styled.div`
  margin-left: 30px;

  .search {
    display: none;
  }
  .icon {
    margin-right: 15px;
  }
  @media only screen and (max-width: 991px) {
    .search {
      display: block;
    }
  }
`;
