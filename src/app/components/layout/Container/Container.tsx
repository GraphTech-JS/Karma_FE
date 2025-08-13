"use client";
import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
  variant?: "default" | "mobile";
}

const StyledContainer = styled.div`
  width: "1237px";
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Container = ({ children, variant = "default" }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
