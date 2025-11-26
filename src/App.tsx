
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import IndexEN from "./pages/Index.en";
import Services from "./pages/Services";
import ServicesEN from "./pages/Services.en";
import Methodology from "./pages/Methodology";
import MethodologyEN from "./pages/Methodology.en";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyEN from "./pages/PrivacyPolicy.en";
import IndexDE from "./pages/Index.de";
import ServicesDE from "./pages/Services.de";
import MethodologyDE from "./pages/Methodology.de";
import PrivacyPolicyDE from "./pages/PrivacyPolicy.de";
import NotFound from "./pages/NotFound";
import NotFoundDE from "./pages/NotFound.de";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Swedish routes */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
            
            {/* English routes */}
            <Route path="/en" element={<IndexEN />} />
            <Route path="/en/services" element={<ServicesEN />} />
            <Route path="/en/methodology" element={<MethodologyEN />} />
            <Route path="/en/privacy-policy" element={<PrivacyPolicyEN />} />
            
            {/* German routes */}
            <Route path="/de" element={<IndexDE />} />
            <Route path="/de/services" element={<ServicesDE />} />
            <Route path="/de/methodology" element={<MethodologyDE />} />
            <Route path="/de/privacy-policy" element={<PrivacyPolicyDE />} />
            
            {/* 404 routes - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
