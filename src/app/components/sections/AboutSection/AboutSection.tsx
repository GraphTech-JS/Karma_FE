"use client";
import React from "react";
import styled from "styled-components";
import BgEl3 from "../../../../../public/bg-el-3.png";
import About from "../../../../../public/about.png";
import Image from "next/image";

const StyledAboutSection = styled.section`
  position: relative;
  background: #fff;
  min-height: 400px;
`;

const StyledContainer = styled.div`
  max-width: 1237px;
  margin: 0 auto;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 60px;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAboutImage = styled.img`
  width: auto;
  height: 400px;
  border-radius: 5px;
  object-fit: cover;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 649px;
  margin-bottom: 20px;
`;

const StyledTitle = styled.h2`
  font-family: "Unbounded", sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: rgba(2, 3, 3, 1);
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const StyledHighlight = styled.span`
  color: #ba0108;
`;

const StyledDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  line-height: 1.7;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledBgElement = styled(Image)`
  position: absolute;
  z-index: 1;
  opacity: 1;
`;

const StyledBgEl3 = styled(StyledBgElement)`
  bottom: 0;
  right: 0;
  width: 180px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <StyledBgEl3 src={BgEl3} alt="" />
      <StyledContainer>
        <StyledContentWrapper>
          <StyledImageWrapper>
            <StyledAboutImage
              src={About.src}
              alt="Про нас - українська компанія високотехнологічного виробництва"
              loading="lazy"
            />
          </StyledImageWrapper>

          <StyledTextContent>
            <StyledTitle>
              <StyledHighlight>П</StyledHighlight>РО НАС
            </StyledTitle>
            <StyledDescription>
              Ми — українська компанія, що спеціалізується на розробці та
              виробництві високотехнологічної техніки для сучасного світу. Наше
              виробництво поєднує інновації, точну інженерію та найсучасніше
              обладнання, щоб створювати надійні рішення для промисловості,
              енергетики, агросектору та оборонної сфери.
            </StyledDescription>
            <StyledDescription>
              Ми впроваджуємо повний цикл: від ідеї та прототипу — до серійного
              виробництва. Усе — на українських потужностях, з дотриманням
              міжнародних стандартів якості.
            </StyledDescription>
          </StyledTextContent>
        </StyledContentWrapper>
      </StyledContainer>
    </StyledAboutSection>
  );
};

export default AboutSection;
