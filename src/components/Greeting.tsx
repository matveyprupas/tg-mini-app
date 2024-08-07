import { ReactNode } from "react";
import { StrongText } from "./StrongText";
import { useTranslation } from "react-i18next";

interface GreetingProps {
  children: ReactNode
}
export const Greeting = ({children}: GreetingProps) => {
  const {t} = useTranslation()

  return (
    <h1 className='text-xl font-bold'>
      {t('greeting')}
      <StrongText>
        {children}
      </StrongText>
    </h1>
  );
}