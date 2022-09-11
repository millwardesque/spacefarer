import React from 'react';

interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  heading: string | JSX.Element;
}
export const Card: React.FC<CardProps> = ({ children, className, heading }) => {
  const headingElement =
    typeof heading === 'string' ? <h1>{heading}</h1> : heading;

  return (
    <div className={`card ${className ?? ''}`}>
      {headingElement}
      {children}
    </div>
  );
};
