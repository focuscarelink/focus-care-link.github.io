import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import Sitemap from "./pages/Sitemap";
import SpecialistCareIndex from "./pages/SpecialistCareIndex";
import SpecialistCare from "./pages/SpecialistCare";
import CaseStudies from "./pages/CaseStudies";
import PriceGuide from "./pages/PriceGuide";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/specialist-care" element={<SpecialistCareIndex />} />
          <Route path="/specialist-care/:condition" element={<SpecialistCare />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/price-guide" element={<PriceGuide />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
