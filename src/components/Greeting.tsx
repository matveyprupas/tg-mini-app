import { ReactNode } from "react";
import { StrongText } from "./StrongText";
import { getGreetingText, LANGUAGE_CODE } from "../utils/textUtils";
import { useInitData } from "@vkruglikov/react-telegram-web-app";

interface GreetingProps {
  children: ReactNode
}
export const Greeting = ({children}: GreetingProps) => {
  const [initDataUnsafe] = useInitData();

  const languageCode: LANGUAGE_CODE = initDataUnsafe?.user?.language_code as LANGUAGE_CODE || LANGUAGE_CODE.EN;
  return (
    <h1 className='text-xl font-bold'>
      {getGreetingText(languageCode)}
      <StrongText>
        {children}
      </StrongText>
    </h1>
  );
}