import { HTMLAttributes } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: "primary" | "secondary";
}
