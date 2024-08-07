import { getContentText, LANGUAGE_CODE } from "../utils/textUtils";
import { useInitData } from "@vkruglikov/react-telegram-web-app";

interface VisitsProps {
  visits: number | null
}


export const Visits = ({visits}: VisitsProps) => {
  const [initDataUnsafe] = useInitData();

  const languageCode: LANGUAGE_CODE = initDataUnsafe?.user?.language_code as LANGUAGE_CODE || LANGUAGE_CODE.EN;
  return (
    <p>{getContentText(languageCode, visits)}</p>
  );
}