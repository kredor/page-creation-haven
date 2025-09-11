import { Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Determine current language based on path
  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/en')) return 'en';
    if (location.pathname.startsWith('/de')) return 'de';
    return 'sv';
  };

  const currentLanguage = getCurrentLanguage();
  
  const languages = [
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  const handleLanguageChange = (newLang: string) => {
    let newPath = location.pathname;
    
    // Remove current language prefix
    if (currentLanguage === 'en') {
      newPath = newPath.replace('/en', '');
    } else if (currentLanguage === 'de') {
      newPath = newPath.replace('/de', '');
    }
    
    // Add new language prefix
    if (newLang === 'en') {
      newPath = '/en' + newPath;
    } else if (newLang === 'de') {
      newPath = '/de' + newPath;
    } else {
      newPath = newPath || '/';
    }
    
    navigate(newPath + location.hash);
    setIsOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span>{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center space-x-2 ${
                currentLanguage === lang.code ? 'bg-gray-50 font-medium' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;