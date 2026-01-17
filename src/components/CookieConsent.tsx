import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
      <div className="container max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. 
                Read our{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/legal" className="text-primary hover:underline">
                  Cookie Policy
                </Link>{" "}
                for more information.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={acceptAll} className="font-semibold">
                  Accept All Cookies
                </Button>
                <Button onClick={acceptEssential} variant="outline" className="font-semibold">
                  Essential Only
                </Button>
              </div>
            </div>
            <button
              onClick={acceptEssential}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
