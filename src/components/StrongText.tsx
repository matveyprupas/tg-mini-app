import { ReactNode } from "react";

interface StrongTextProps {
  children: ReactNode
}

export const StrongText = ({children}: StrongTextProps) => {
  return (
    <strong>{children}</strong>
  );
}