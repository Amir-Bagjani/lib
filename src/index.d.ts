import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
}

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: "primary" | "secondary";
}
