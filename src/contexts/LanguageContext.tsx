import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'sv' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys
const translations = {
  sv: {
    // Navigation
    'nav.about': 'Om återvätning',
    'nav.services': 'Tjänster',
    'nav.team': 'Om oss',
    'nav.contact': 'Kontakt',
    'nav.more_services': 'Mer om våra tjänster',
    'nav.methodology': 'Vår certifierade metod',
    'nav.open_menu': 'Öppna meny',
    'nav.close_menu': 'Stäng meny',
    
    // Hero
    'hero.title': 'Experter på',
    'hero.title_highlight': 'återvätning',
    'hero.subtitle': 'Din partner för professionell projektering och uppföljning av återvätningsprojekt med fokus på grundvatten, växthusgaser och vegetation.',
    'hero.description': 'Vi är specialister inom Naturrestaureringsfördordningen (NRF) och återvätning för restaurering av torvmarker och våtmarker i Mellansverige.',
    'hero.contact_us': 'Kontakta oss',
    'hero.methodology': 'Vår certifierade metod',
    
    // Common
    'common.read_more': 'Läs mer',
    'common.back_to_home': 'Tillbaka till startsidan',
    'common.contact_us_today': 'Kontakta oss idag',
    'common.email': 'E-post',
  },
  en: {
    // Navigation
    'nav.about': 'About Rewetting',
    'nav.services': 'Services',
    'nav.team': 'About Us',
    'nav.contact': 'Contact',
    'nav.more_services': 'More about our services',
    'nav.methodology': 'Our certified method',
    'nav.open_menu': 'Open menu',
    'nav.close_menu': 'Close menu',
    
    // Hero
    'hero.title': 'Experts in',
    'hero.title_highlight': 'rewetting',
    'hero.subtitle': 'Your partner for professional design and monitoring of rewetting projects with focus on groundwater, greenhouse gases and vegetation.',
    'hero.description': 'We are specialists in the Nature Restoration Regulation (NRR) and rewetting for restoration of peatlands and wetlands in Central Sweden.',
    'hero.contact_us': 'Contact us',
    'hero.methodology': 'Our certified method',
    
    // Common
    'common.read_more': 'Read more',
    'common.back_to_home': 'Back to home',
    'common.contact_us_today': 'Contact us today',
    'common.email': 'Email',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then default to Swedish
    const saved = localStorage.getItem('preferred-language') as Language;
    return saved || 'sv';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['sv']] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};