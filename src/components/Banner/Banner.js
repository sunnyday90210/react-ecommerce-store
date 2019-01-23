import React, { Component } from 'react';
import SlideShow from '../SlideShow/SlideShow';
import styled from 'styled-components';

const BannerStyle = styled.section`
  grid-column: 2 / 10;
  grid-row: 4 /5;
  background-color: #ccc;
  position: relative;
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
`;

const BannerHeading = styled.h1`
  font-size: 10rem;
  color: #12376e;
  margin-bottom: 6rem;
`;

const BannerBtnTextOne = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  transition: top 0.2s;
`;

const BannerBtnTextTwo = styled.span`
  position: absolute;
  top: 150%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  transition: top 0.2s;
`;

const BannerBtn = styled.button`
  width: 16rem;
  height: 5rem;
  background: linear-gradient(to top, #00154c, #12376e, #23487f);
  color: #fff;
  border: 0.1rem solid #fff;
  border-radius: 0.3rem;
  outline: none;
  position: relative;
  overflow: hidden;

  &:hover ${BannerBtnTextOne} {
    top: -100%;
  }

  &:hover ${BannerBtnTextTwo} {
    top: 50%;
  }
`;

class Banner extends Component {
  render() {
    return (
      <BannerStyle>
        <BannerContent>
          <BannerHeading>Great Sale</BannerHeading>
          <BannerBtn>
            <BannerBtnTextOne>Shop Now</BannerBtnTextOne>
            <BannerBtnTextTwo>It's Interesting</BannerBtnTextTwo>
          </BannerBtn>
        </BannerContent>
        <SlideShow />
      </BannerStyle>
    );
  }
}

export default Banner;
