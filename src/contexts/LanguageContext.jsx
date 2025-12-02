import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Always use English, no language switching
  const [language] = useState('en');

  const value = {
    language: 'en',
    setLanguage: () => {}, // No-op function
    toggleLanguage: () => {}, // No-op function
    isEnglish: true,
    isChinese: false
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
