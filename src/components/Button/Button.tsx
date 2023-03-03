import { FC, ReactNode, MouseEvent } from "react";
import cn from "classnames";
import s from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: ({ currentTarget }: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button type="button" className={cn(s.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};
