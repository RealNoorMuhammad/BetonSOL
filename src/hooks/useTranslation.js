import { useLanguage } from '../contexts/LanguageContext';
import { en } from '../translations/en';
import { zh } from '../translations/zh';

const translations = {
  en,
  zh
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Return key if translation not found
  };
  
  return { t, language };
};
