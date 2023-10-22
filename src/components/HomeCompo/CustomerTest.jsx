import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { starFull, checkIco, arrowLeft, arrowRight } from "../../utils/Icon";

const CustomerTest = () => {
  return (
    <TestContainer>
      <div className="space_between test_header">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className="flex_center">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div className="flex-center flex_col">
              <img src={arrowLeft} alt="" className="arrow-left arrow" />
            </div>
            <div className="flex-center flex_col">
              <img src={arrowRight} alt="" className="arrow-right arrow" />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 1000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestCard>
            <div className="star_container">
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
            </div>
            <div className="title_test jc_start">
              <h4>Sarah M.</h4>
              <img src={checkIco} alt="" />
            </div>
            <p>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </TestCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestCard>
            <div className="star_container">
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
            </div>
            <div className="title_test jc_start">
              <h4>Alex K.</h4>
              <img src={checkIco} alt="" />
            </div>
            <p>
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </TestCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestCard>
            <div className="star_container">
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
            </div>
            <div className="title_test jc_start">
              <h4>James L.</h4>
              <img src={checkIco} alt="" />
            </div>
            <p>
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </TestCard>
        </SwiperSlide>
        <SwiperSlide>
          <TestCard>
            <div className="star_container">
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
              <img src={starFull} alt="" />
            </div>
            <div className="title_test jc_start">
              <h4>Alex K.</h4>
              <img src={checkIco} alt="" />
            </div>
            <p>
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </TestCard>
        </SwiperSlide>
      </Swiper>
    </TestContainer>
  );
};

export default CustomerTest;

const TestContainer = styled.div`
  padding: 2.5rem 5rem;
  padding-bottom: 7rem;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  h2 {
    color: #000;
    font-family: "IntegralBold";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 2.4rem;
  }
  .arrow {
    margin-left: 1rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 991px) {
    padding: 2.5rem 1rem;

    .test_header {
      margin-bottom: 1rem;

      h2 {
        font-size: 32px;
      }
    }
  }
`;

const TestCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 28px 32px;

  .star_container {
    img {
      margin-right: 5px;
    }
  }
  .title_test {
    margin-top: 10px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      margin-left: 0.6rem;
    }
    h4 {
      color: #000;
      font-family: "SatoshiMedium";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
    }
  }
  p {
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.6);
    font-family: "SatoshiRegular";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
