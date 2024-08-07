// import { useTelegram } from "../hooks/useTelegram";
import { StrongText } from "./StrongText";

export const Greeting = ({children}) => {
  // const {tg} = useTelegram();
  return (
    <h1 className='text-xl font-bold'>
      Hello, <StrongText>{children}</StrongText>
    </h1>
  );
}