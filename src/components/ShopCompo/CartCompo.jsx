import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { product2, product3, product9 } from "../../utils/Images";
import { Delete, plus, minus, label, arrowRightBold } from "../../utils/Icon";

const CartCompo = () => {
  return (
    <CartContainer>
      <h1>Your cart</h1>
      <div className="grid">
        <div className="card">
          <div className="product_grid">
            <div className="product_space">
              <img src={product9} alt="" />
              <div>
                <div className="product_item">
                  <div>
                    <h4>Gradient Graphic T-shirt</h4>
                    <p>
                      <span>Size:</span> Large
                    </p>
                    <p>
                      <span>Color:</span> White
                    </p>
                  </div>
                  <div>
                    <img src={Delete} alt="" />
                  </div>
                </div>
                <div className="product_cart">
                  <div>
                    <h5>$145</h5>
                  </div>
                  <div>
                    <div className="add">
                      <img src={minus} alt="" />
                      <p>1</p>
                      <img src={plus} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_space">
              <img src={product2} alt="" />
              <div>
                <div className="product_item">
                  <div>
                    <h4>Checkered Shirt</h4>
                    <p>
                      <span>Size:</span> Medium
                    </p>
                    <p>
                      <span>Color:</span> Red
                    </p>
                  </div>
                  <div>
                    <img src={Delete} alt="" />
                  </div>
                </div>
                <div className="product_cart">
                  <div>
                    <h5>$180</h5>
                  </div>
                  <div>
                    <div className="add">
                      <img src={minus} alt="" />
                      <p>1</p>
                      <img src={plus} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_space">
              <img src={product3} alt="" />
              <div>
                <div className="product_item">
                  <div>
                    <h4>Skinny Fit Jeans</h4>
                    <p>
                      <span>Size:</span> Large
                    </p>
                    <p>
                      <span>Color:</span> Blue
                    </p>
                  </div>
                  <div>
                    <img src={Delete} alt="" />
                  </div>
                </div>
                <div className="product_cart">
                  <div>
                    <h5>$240</h5>
                  </div>
                  <div>
                    <div className="add">
                      <img src={minus} alt="" />
                      <p>1</p>
                      <img src={plus} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Order Summary</h2>
          <ul>
            <li>
              <p>Subtotal</p>
              <h3 className="price">$565</h3>
            </li>
            <li>
              <p>Discount (-20%)</p>
              <h3 className="discount">-$113</h3>
            </li>
            <li>
              <p>Delivery Fee</p>
              <h3 className="price">$15</h3>
            </li>
          </ul>
          <div className="border_cart"></div>
          <div className="total">
            <h6>Total</h6>
            <h1>$467</h1>
          </div>
          <div className="promo_code">
            <div className="promo_container">
              <img src={label} alt="" />
              <input type="text" placeholder="Add promo code" />
            </div>
            <div className="apply">Apply</div>
          </div>
          <div className="checkout">
            Go to Checkout <img src={arrowRightBold} alt="" />
          </div>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartCompo;

const CartContainer = styled.div`
  h1 {
    color: #000;
    font-family: "IntegralBold";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 1rem;
    margin-top: 2rem;

    .card {
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: #fff;
      padding: 20px 24px;

      &:nth-child(2) {
        height: 458px;
      }

      h2 {
        color: #000;
        font-family: "SatoshiRegular";
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .border_cart {
        width: 100%;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
      }
      .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        h6 {
          color: #000;
          font-family: "SatoshiRegular";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        h1 {
          color: #000;
          text-align: right;
          font-family: "SatoshiMedium";
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
      ul {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 1.5rem;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 1rem;

          p {
            color: rgba(0, 0, 0, 0.6);
            font-family: "SatoshiRegular";
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          .price {
            color: #000;
            text-align: right;
            font-family: "SatoshiRegular";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
          .discount {
            color: #f33;
            text-align: right;
            font-family: "SatoshiRegular";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
      }
      .promo_code {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 1.5rem;
        .promo_container {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 62px;
          padding: 12px 16px;
          background: #f0f0f0;

          img {
            margin-right: -0.3rem;
          }
          input {
            padding: 0px 16px;
            background-color: transparent;
            outline: none;
            border: none;
            width: 330px;
            font-family: "SatoshiRegular";
            color: rgba(0, 0, 0, 0.4);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          @media only screen and (max-width: 991px) {
            input {
              width: 100%;
            }
          }
        }
        .apply {
          display: flex;
          width: 119px;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          border-radius: 62px;
          background: #000;
          color: #fff;
          font-family: "SatoshiRegular";
          margin-left: 12px;
          cursor: pointer;
        }
      }
      .checkout {
        display: flex;
        height: 60px;
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
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: 2rem;
      }

      .product_grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1.5rem;

        .product_space {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;

          img {
            width: 185px;
            height: 185px;
            border-radius: 20px;
          }

          .product_item {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-left: 1rem;
            width: 100vh !important;

            img {
              width: 24px;
              height: 24px;
              cursor: pointer;
            }
            h4 {
              color: #000;
              font-family: "SatoshiRegular";
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
            p {
              color: rgba(0, 0, 0, 0.6);
              font-family: "SatoshiRegular";
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              margin-bottom: 0.1rem;

              span {
                color: #000;
                font-family: "SatoshiRegular";
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
            @media only screen and (max-width: 991px) {
              width: 100% !important;

              h4 {
                font-size: 16px;
              }
            }
          }
          .product_cart {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 1rem;
            margin-top: 0.5rem;
            width: 100%;
            h5 {
              color: #000;
              font-family: "SatoshiRegular";
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            }
            .add {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-radius: 62px;
              background: #f0f0f0;
              padding: 12px 20px;
              width: 130px;

              img {
                width: 20px;
                height: 20px;
                cursor: pointer;
              }
              p {
                color: #000;
                font-family: "SatoshiRegular";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
              }
            }
          }
          @media only screen and (max-width: 991px) {
            img {
              width: 99px;
              height: 120px;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
      margin-bottom: 2rem;

      .card {
        width: 375px;
        padding: 14px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    h1 {
      color: #000;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
