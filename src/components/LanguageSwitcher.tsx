import { Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine current language based on path
  const isEnglish = location.pathname.startsWith('/en');
  
  const handleLanguageToggle = () => {
    if (isEnglish) {
      // Switch to Swedish - remove /en prefix
      const swedishPath = location.pathname.replace('/en', '') || '/';
      navigate(swedishPath + location.hash);
    } else {
      // Switch to English - add /en prefix
      const englishPath = '/en' + location.pathname;
      navigate(englishPath + location.hash);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-primary" />
      <button
        onClick={handleLanguageToggle}
        className="px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
      >
        {isEnglish ? 'SV' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;