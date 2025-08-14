"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  variant?: "default" | "mobile";
}

const Container = ({ children, variant = "default" }: ContainerProps) => {
  return (
    <div className="max-w-[1237px] mx-auto px-5">
      {children}
    </div>
  );
};

export default Container;
