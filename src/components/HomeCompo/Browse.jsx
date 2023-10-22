import React from "react";
import styled from "styled-components";
import {
  browse1,
  browse2,
  browse3,
  browse4,
  browse5,
  browse6,
  browse7,
  browse8,
} from "../../utils/Images";

const Browse = () => {
  return (
    <BrowseContainer>
      <div className="card">
        <h1>BROWSE BY DRESS STYLE</h1>
        <BrowseGrid>
          <div className="grid1">
            <div className="cardImg">
              <img src={browse1} alt="" className="noneImg" />
              <img src={browse5} alt="" className="resImg" />
            </div>
            <div className="cardImg">
              <img src={browse2} alt="" className="noneImg" />
              <img src={browse6} alt="" className="resImg" />
            </div>
          </div>
          <div className="grid2">
            <div className="cardImg">
              <img src={browse3} alt="" className="noneImg" />
              <img src={browse7} alt="" className="resImg" />
            </div>
            <div className="cardImg">
              <img src={browse4} alt="" className="noneImg" />
              <img src={browse8} alt="" className="resImg" />
            </div>
          </div>
        </BrowseGrid>
      </div>
    </BrowseContainer>
  );
};

export default Browse;

const BrowseContainer = styled.div`
  padding: 2.5rem 5rem;

  .card {
    background-color: #f0f0f0;
    padding: 3rem 3rem;
    border-radius: 25px;

    h1 {
      color: #000;
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      font-family: "IntegralBold";
      margin-bottom: 2.8rem;
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 2.5rem 0.8rem;

    .card {
      padding: 3rem 1rem;

      h1 {
        font-size: 30px;
      }
    }
  }
`;

const BrowseGrid = styled.div`
  .grid1 {
    display: grid;
    grid-template-columns: 1.3fr 2.3fr;
    grid-gap: 1.3rem;
    margin-bottom: 1.3rem;

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  .grid2 {
    display: grid;
    grid-template-columns: 2.3fr 1.3fr;
    grid-gap: 1.3rem;

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  .cardImg {
    img {
      width: 100%;
      height: 100%;
    }
    .resImg {
      display: none;
    }
    @media only screen and (max-width: 991px) {
      .noneImg {
        display: none;
      }
      .resImg {
        display: block;
      }
    }
  }
`;
