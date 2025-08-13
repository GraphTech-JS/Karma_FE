"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import Facebook from "../../../../../public/facebook.svg";
import Insta from "../../../../../public/insta.svg";
import Signal from "../../../../../public/signal.png";
import Whatsapp from "../../../../../public/whatsapp.svg";

const StyledFooter = styled.footer`
  background-color: rgba(2, 3, 3, 1);
  height: 308px;
  padding: 30px 0 40px;
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  margin-bottom: 18px;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

const StyledLogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLogoLink = styled(Link)`
  display: inline-block;
`;

const StyledContactsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledSectionTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
`;

const StyledContactLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ba0108;
  }
`;

const StyledContactText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #fff;
  margin-left: 10px;
`;

const StyledMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledMenuLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ba0108;
  }
`;

const StyledSocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: 968px) {
    align-items: center;
  }
`;

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledSocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBottomSection = styled.div`
  text-align: center;
`;

const StyledPrivacyLink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: rgba(146, 146, 146, 1);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ba0108;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterContent>
          <StyledLogoSection>
            <StyledLogoLink href="#">
              <Image src={Logo} alt="Karma" width={149} height={34} />
            </StyledLogoLink>
          </StyledLogoSection>

          <StyledContactsSection>
            <StyledSectionTitle>Контакти</StyledSectionTitle>
            <div>
              <StyledContactLink href="tel:+380956156713">
                +380 95 61 56713
              </StyledContactLink>
              <StyledContactText>Контактний відділ</StyledContactText>
            </div>
            <div>
              <StyledContactLink href="tel:+380956156713">
                +380 95 61 56713
              </StyledContactLink>
              <StyledContactText>Контактний відділ</StyledContactText>
            </div>
            <div>
              <StyledContactLink href="tel:+380956156713">
                +380 95 61 56713
              </StyledContactLink>
              <StyledContactText>Контактний відділ</StyledContactText>
            </div>
          </StyledContactsSection>

          <StyledMenuSection>
            <StyledSectionTitle>Меню</StyledSectionTitle>
            <StyledMenuLink href="#">Каталог</StyledMenuLink>
            <StyledMenuLink href="#">FAQ</StyledMenuLink>
            <StyledMenuLink href="#">База знань</StyledMenuLink>
            <StyledMenuLink href="#">Контакти</StyledMenuLink>
          </StyledMenuSection>

          <StyledSocialSection>
            <StyledSocialLinks>
              <StyledSocialLink href="#" aria-label="Facebook">
                <img src={Facebook.src} alt="facebook social link" />
              </StyledSocialLink>
              <StyledSocialLink href="#" aria-label="Instagram">
                <img src={Insta.src} alt="instagram social link" />
              </StyledSocialLink>
              <StyledSocialLink href="#" aria-label="Telegram">
                <img src={Signal.src} alt="signal social link" />
              </StyledSocialLink>
              <StyledSocialLink href="#" aria-label="WhatsApp">
                <img src={Whatsapp.src} alt="whatsapp social link" />
              </StyledSocialLink>
            </StyledSocialLinks>
          </StyledSocialSection>
        </StyledFooterContent>

        <StyledBottomSection>
          <StyledPrivacyLink href="#">
            Політика конфеденційності
          </StyledPrivacyLink>
        </StyledBottomSection>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
