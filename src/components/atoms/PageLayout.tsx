import React from 'react';

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
  header?: JSX.Element;
  leftSide?: JSX.Element;
}
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  header,
  leftSide,
}) => {
  return (
    <div className="pageLayout">
      {header && <header>{header}</header>}
      <main>
        {leftSide && <div className="leftSide">{leftSide}</div>}
        <div className="rightSide">{children}</div>
      </main>
    </div>
  );
};
