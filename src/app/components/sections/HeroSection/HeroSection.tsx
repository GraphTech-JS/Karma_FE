"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Stack from "../../../../../public/stack.png";
import BgEl1 from "../../../../../public/bg-el-1.png";
import BgEl2 from "../../../../../public/bg-el-2.png";

const StyledHeroSection = styled.section`
  background: #fff;
  min-height: 485px;
  position: relative;
  overflow: hidden;
  padding: 80px 0;
  display: flex;
  align-items: center;
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 60px;
    text-align: center;
  }
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-family: "Unbounded", sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.2;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const StyledHighlight = styled.span`
  color: #ba0108;
  font-size: 64px;
`;

const StyledSubtitle = styled.h2`
  font-family: "Unbounded", sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
  color: #000;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const StyledButton = styled.button`
  background-color: #ba0108;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 400;
  max-width: 387px;
  padding: 16px 40px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9a0106;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledProductImage = styled(Image)`
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
`;

const StyledBgElement = styled(Image)`
  position: absolute;
  z-index: 1;
  opacity: 1;
`;

const StyledBgEl1 = styled(StyledBgElement)`
  top: 0;
  right: 0;
  width: 290px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const StyledBgEl2 = styled(StyledBgElement)`
  bottom: 0;
  left: 0;
  width: 270px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledBgEl1 src={BgEl1} alt="" />
      <StyledBgEl2 src={BgEl2} alt="" />

      <StyledContainer>
        <StyledContentWrapper>
          <StyledTextContent>
            <StyledTitle>
              <StyledHighlight>НОВИЙ СТЕК</StyledHighlight> KARMA FLIGHTS
            </StyledTitle>
            <StyledSubtitle>
              Високотехнологічне українське виробництво
            </StyledSubtitle>
            <StyledButton>Докладніше</StyledButton>
          </StyledTextContent>

          <StyledImageWrapper>
            <StyledProductImage
              src={Stack}
              alt="Karma Flights - високотехнологічне українське виробництво"
              width={500}
              height={400}
              priority
            />
          </StyledImageWrapper>
        </StyledContentWrapper>
      </StyledContainer>
    </StyledHeroSection>
  );
};

export default HeroSection;
