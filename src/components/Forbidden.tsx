import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useTranslation } from "react-i18next";

export const Forbidden = () => {
  const {t} = useTranslation();
  const [initDataUnsafe] = useInitData();

  return (
    <div className="text-center">
      <h2>{t('forbidden', { name: initDataUnsafe?.user?.first_name })}</h2>
    </div>
  );
}