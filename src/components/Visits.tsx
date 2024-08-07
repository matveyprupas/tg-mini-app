import { useTranslation } from "react-i18next";

interface VisitsProps {
  visits: number
}


export const Visits = ({visits}: VisitsProps) => {
  const {t} = useTranslation()

  return (
    <p>{t('visits', { visits: visits })}</p>
  );
}