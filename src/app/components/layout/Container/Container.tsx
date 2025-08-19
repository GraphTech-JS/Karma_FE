'use client';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'mobile';
}

const Container = ({ children, variant = 'default' }: ContainerProps) => {
  return <div className='max-w-[1440px] w-full mx-auto '>{children}</div>;
};

export default Container;
