"use client";
import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import Link from "next/link";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";

const StyledHeader = styled.header`
  background-color: rgba(2, 3, 3, 1);
`;

const StyledLink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #fff;

  &[data-phone] {
    font-family: "Montserrat", sans-serif;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: 30px 0;
`;

const StyledImageWrapper = styled.div`
  margin-right: 180px;
`;

const StyledAdditionalWrapper = styled.div`
  margin-left: 180px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container variant="default">
        <StyledContentWrapper>
          <StyledImageWrapper>
            <StyledLink href="#">
              <Image src={Logo.src} alt="logo" width={149} height={34} />
            </StyledLink>
          </StyledImageWrapper>
          <nav>
            <StyledLink href="#">Каталог</StyledLink>
          </nav>
          <nav>
            <StyledLink href="#">FAQ</StyledLink>
          </nav>
          <nav>
            <StyledLink href="#">База знань</StyledLink>
          </nav>
          <nav>
            <StyledLink href="#">Контакти</StyledLink>
          </nav>
          <StyledAdditionalWrapper>
            <StyledLink data-phone href="tel:(067) 298-29-29">
              (067) 298-29-29
            </StyledLink>
          </StyledAdditionalWrapper>
          <LanguageSwitcher />
        </StyledContentWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
