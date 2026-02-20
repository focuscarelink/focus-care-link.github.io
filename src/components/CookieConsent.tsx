import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type CookiePreferences = {
  essential: boolean; // always true
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ essential: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
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
                Cookie Notice
              </h3>
              
              {!showPreferences ? (
                <>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    If you are happy for us to use cookies (as detailed in our cookie policy, which is available{" "}
                    <Link to="/legal" className="text-primary hover:underline font-medium">
                      here
                    </Link>
                    ), please click "Accept" below to enable them. If you would prefer to choose which cookies we use, please click{" "}
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="text-primary hover:underline font-medium"
                    >
                      here
                    </button>
                    . You may reject our use of all cookies except strictly necessary cookies by clicking "Reject" below.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={acceptAll} className="font-semibold">
                      Accept
                    </Button>
                    <Button onClick={rejectAll} variant="outline" className="font-semibold">
                      Reject
                    </Button>
                    <Button
                      onClick={() => setShowPreferences(true)}
                      variant="ghost"
                      className="font-semibold"
                    >
                      <Settings2 className="w-4 h-4 mr-2" />
                      Cookie Preferences
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Manage your cookie preferences below. Strictly necessary cookies cannot be disabled as they are essential for the website to function.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-foreground text-sm">Strictly Necessary</p>
                        <p className="text-xs text-muted-foreground">Required for the website to function</p>
                      </div>
                      <Switch checked disabled />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-foreground text-sm">Analytics Cookies</p>
                        <p className="text-xs text-muted-foreground">Help us improve our website</p>
                      </div>
                      <Switch
                        checked={preferences.analytics}
                        onCheckedChange={(checked) => setPreferences(p => ({ ...p, analytics: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <p className="font-medium text-foreground text-sm">Marketing Cookies</p>
                        <p className="text-xs text-muted-foreground">Used for targeted advertising</p>
                      </div>
                      <Switch
                        checked={preferences.marketing}
                        onCheckedChange={(checked) => setPreferences(p => ({ ...p, marketing: checked }))}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={savePreferences} className="font-semibold">
                      Save Preferences
                    </Button>
                    <Button onClick={() => setShowPreferences(false)} variant="ghost" className="font-semibold">
                      Back
                    </Button>
                  </div>
                </>
              )}
            </div>
            <button
              onClick={rejectAll}
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
