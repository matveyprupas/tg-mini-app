import { useTranslation } from "react-i18next";

export const Forbidden = () => {
  const {t} = useTranslation();
  return (
    <div className="">
      <p>{t('forbidden')}</p>
    </div>
  );
}