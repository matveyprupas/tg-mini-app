import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface GreetingProps {
  children: ReactNode
}
export const Greeting = ({children}: GreetingProps) => {
  const {t} = useTranslation()

  return (
    <h1 className='text-xl font-bold'>
      {t('greeting')}
      {children}
    </h1>
  );
}