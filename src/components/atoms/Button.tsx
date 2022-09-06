import React, { useCallback } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const handleClick = useCallback(() => {
    console.log("[CPM] Caught click!"); // @DEBUG
    onClick();
  }, [onClick]);

  return (
    <div className="button" onClick={handleClick}>
      {children}
    </div>
  );
};
