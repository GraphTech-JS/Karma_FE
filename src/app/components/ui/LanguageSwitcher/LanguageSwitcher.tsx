import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledLangSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 30px;
`;

const StyledLangLink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  color: #fff;

  &:active,
  &:focus,
  &:focus-visible,
  &:focus-within {
    color: rgba(186, 1, 8, 1);
    font-weight: bold;
  }
`;

const StyledLine = styled.span`
  color: #fff;
  font-size: 20px;
`;

const LanguageSwitcher = () => {
  return (
    <StyledLangSwitcherWrapper>
      <StyledLangLink href="#">UA</StyledLangLink>
      <StyledLine>|</StyledLine>
      <StyledLangLink href="#">EN</StyledLangLink>
    </StyledLangSwitcherWrapper>
  );
};

export default LanguageSwitcher;
