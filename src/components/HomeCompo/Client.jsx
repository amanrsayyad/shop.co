import React from "react";
import styled from "styled-components";
import { brand1, brand2, brand3, brand4, brand5 } from "../../utils/Images";

const Client = () => {
  return (
    <ClientContainer>
      <div>
        <img src={brand1} alt="" />
      </div>
      <div>
        <img src={brand2} alt="" />
      </div>
      <div>
        <img src={brand3} alt="" />
      </div>
      <div>
        <img src={brand4} alt="" />
      </div>
      <div>
        <img src={brand5} alt="" />
      </div>
    </ClientContainer>
  );
};

export default Client;

const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  height: 122px;
  padding: 0px 45px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 85%;
    }
  }

  @media only screen and (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 786px) {
    height: 330px;
  }
`;
