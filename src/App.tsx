
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
import NotFound from "./pages/NotFound";
import NotFoundEN from "./pages/NotFound.en";

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
            <Route path="/services/en" element={<ServicesEN />} />
            <Route path="/methodology/en" element={<MethodologyEN />} />
            <Route path="/integritetspolicy/en" element={<PrivacyPolicyEN />} />
            
            {/* 404 routes */}
            <Route path="*" element={<NotFound />} />
            <Route path="/en/*" element={<NotFoundEN />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
