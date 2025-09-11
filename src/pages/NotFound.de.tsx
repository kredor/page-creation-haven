import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundDE = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-primary mb-4">Seite nicht gefunden</h2>
          <p className="text-lg text-gray-600 mb-8">
            Entschuldigung, wir konnten die Seite, die Sie suchen, nicht finden. Sie wurde möglicherweise verschoben, gelöscht oder die URL könnte falsch sein.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/de" 
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-accent rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Home className="mr-2 h-4 w-4" />
            Zur Startseite gehen
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 text-primary rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück gehen
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Benötigen Sie Hilfe? <a href="mailto:kontakt@markovattenbyran.se" className="text-secondary hover:text-primary">Kontaktieren Sie uns</a></p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundDE;