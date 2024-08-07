import { useTelegram } from "../../hooks/useTelegram";
import { StrongText } from "../StrongText";
import { getGreetingText } from "./utils";

export const Greeting = ({children}) => {
  const {tg} = useTelegram();
  const languageCode = tg.initDataUnsafe.user.language_code;
  return (
    <h1 className='text-xl font-bold'>
      {/* {getGreetingText(languageCode)} */}
      {getGreetingText(languageCode)}
      <StrongText>
        {children}
      </StrongText>
    </h1>
  );
}