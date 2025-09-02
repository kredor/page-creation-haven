import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-primary" />
      <button
        onClick={() => setLanguage(language === 'sv' ? 'en' : 'sv')}
        className="px-3 py-1 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
      >
        {language === 'sv' ? 'EN' : 'SV'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;