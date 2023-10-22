import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  padding-bottom: 0rem;

  .border {
    margin-top: 5rem;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #000;
    text-align: center;
    font-family: "IntegralBold";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    margin: 3rem 0rem;

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
        font-family: SatoshiMedium;
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
          margin-left: 0.3rem;
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

    @media only screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }
  .view_all {
    padding: 8px 50px;
    background-color: #eee;
    border-radius: 62px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #000;
    font-family: SatoshiRegular;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media only screen and (max-width: 991px) {
    padding: 5rem 1rem;
    padding-bottom: 0rem;

    h2 {
      font-size: 32px;
    }
  }
`;
