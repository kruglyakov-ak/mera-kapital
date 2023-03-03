import { FC, ReactNode } from "react";
import cn from "classnames";
import s from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button type="button" className={cn(s.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
