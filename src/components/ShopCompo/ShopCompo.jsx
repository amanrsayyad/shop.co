import React from "react";
import styled from "styled-components";
import {
  arrowRightShort,
  filterIco,
  arrowUpShort,
  starFull,
  starHalf,
  arrowUpBottom
} from "../../utils/Icon";
import { Link } from "react-router-dom";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
} from "../../utils/Images";

const ShopCompo = () => {
  return (
    <ShopMain>
      <div className="border"></div>
      <div className="pageTitle jc_start">
        <p>Home</p>
        <img src={arrowRightShort} alt="" />
        <span>Casual</span>
      </div>
      <StoreGrid>
        <FilterSidebar>
          <div className="container">
            <div className="header_filter space_between">
              <h4>Filters</h4>
              <div>
                <img src={filterIco} alt="" />
              </div>
            </div>
            <div className="border"></div>
            <ul>
              <li className="space_between">
                <Link to="#">T-shirts</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Shorts</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Shirts</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Hoodie</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Jeans</Link>
                <img src={arrowRightShort} alt="" />
              </li>
            </ul>
            <div className="border"></div>
            <div className="headerList space_between">
              <h3>Price</h3>
              <img src={arrowUpShort} alt="" />
            </div>
            <div className="border"></div>
            <div className="headerList space_between">
              <h3>Colors</h3>
              <img src={arrowUpShort} alt="" />
            </div>
            <div className="border"></div>
            <div className="headerList space_between">
              <h3>Size</h3>
              <img src={arrowUpShort} alt="" />
            </div>
            <div className="border"></div>
            <div className="headerList space_between">
              <h3>Dress Style</h3>
              <img src={arrowUpShort} alt="" />
            </div>
            <ul>
              <li className="space_between">
                <Link to="#">T-shirts</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Shorts</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Shirts</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Hoodie</Link>
                <img src={arrowRightShort} alt="" />
              </li>
              <li className="space_between">
                <Link to="#">Jeans</Link>
                <img src={arrowRightShort} alt="" />
              </li>
            </ul>
            <div className="filterBtn">Apply Filter</div>
          </div>
        </FilterSidebar>
        <ProductContainer>
          <div className="header">
            <div>
              <h2>Casual</h2>
            </div>
            <div className="filter">
              <p>Showing 1-10 of 100 Products</p>
              <h4 className="flex_center">
                <span>Sort by:</span>Most Popular <img src={arrowUpBottom} alt="" />
              </h4>
            </div>
          </div>
          <div className="grid">
            <Link to="#" className="card">
              <img src={product9} alt="" />
              <h4>Gradient Graphic T-shirt</h4>
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
              <img src={product10} alt="" />
              <h4>Polo with Tipping Details</h4>
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
              <h3>$180</h3>
            </Link>
            <Link to="#" className="card">
              <img src={product11} alt="" />
              <h4>Black Striped T-shirt</h4>
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
              <h4>Skinny Fit Jeans</h4>
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
              <h3>$240</h3>
            </Link>
            <Link to="#" className="card">
              <img src={product3} alt="" />
              <h4>Checkered Shirt</h4>
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
              <h3>$180</h3>
            </Link>
            <Link to="#" className="card">
              <img src={product4} alt="" />
              <h4>Sleeve Striped T-Shirt</h4>
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
              <h3>$130</h3>
            </Link>
            <Link to="#" className="card">
              <img src={product5} alt="" />
              <h4>Vertical Striped Shirt</h4>
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
              <h4>Courage Graphic T-Shirt</h4>
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
              <h3>$80</h3>
            </Link>
          </div>
          <div className="border_product"></div>
        </ProductContainer>
      </StoreGrid>
    </ShopMain>
  );
};

export default ShopCompo;

const ShopMain = styled.div`
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
`;

const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr;
  grid-gap: 1.5rem;
`;

const FilterSidebar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 24px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  .container {
    position: sticky;
    top: 0%;
    left: 0%;
    width: 100%;
  }

  h4 {
    color: #000;
    font-family: "SatoshiMedium";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .header_filter {
    width: 100%;

    div {
      img {
        cursor: pointer;
      }
    }
  }
  .border {
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 1px;
    margin-top: 20px;
  }
  .headerList {
    width: 100%;
    margin-top: 20px;

    h3 {
      color: #000;
      font-family: "SatoshiMedium";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  ul {
    list-style: none;
    width: 100%;
    li {
      margin-top: 20px;
      a {
        color: rgba(0, 0, 0, 0.6);
        font-family: "SatoshiRegular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .filterBtn {
    display: flex;
    height: 48px;
    padding: 16px 54px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 62px;
    background: #000;
    color: #fff;
    font-family: "SatoshiRegular";
    margin-top: 2rem;
    cursor: pointer;
  }
`;

const ProductContainer = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #000;
      font-family: "SatoshiRegular";
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    p {
      color: rgba(0, 0, 0, 0.6);
      font-family: "SatoshiRegular";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .filter {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h4 {
      margin-left: 1rem;
      span {
        color: rgba(0, 0, 0, 0.6);
        font-family: "SatoshiRegular";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-right: 0.5rem;
      }
      color: #000;
      font-family: "SatoshiRegular";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      img {
        margin-left: 0.4rem;
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    margin-top: 1rem;

    .card {
      img {
        border-radius: 20px;
        width: 100%;
        height: 380px;
      }
      h4 {
        color: #000;
        font-family: "SatoshiMedium";
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        margin-top: 1rem;
      }
      h3 {
        color: #000;
        font-family: "SatoshiMedium";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .star_container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0.4rem 0rem;

        .star_full {
          width: 18.49px;
          height: 18.49px;
          margin-right: 0.3rem;
        }
        .star_half {
          width: 10px;
          height: 18.49px;
          margin-left: 0.3rem;
        }
        p {
          margin-left: 1rem;
          span {
            color: #000;
            font-family: SatoshiMedium;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          color: rgba(0, 0, 0, 0.6);
          font-family: SatoshiMedium;
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }
  }
  .border_product {
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.10);
    margin-top: 2rem;
  }
`;
