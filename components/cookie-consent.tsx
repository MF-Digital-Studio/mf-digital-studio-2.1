"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("mf_cookie_consent");
    if (!consent) {
      setIsOpen(true);
    }

    // Listen for custom event to reopen preferences from footer
    const handleOpenPreferences = () => {
      setIsOpen(true);
      setShowPreferences(true);
    };

    window.addEventListener("mf-open-cookie-preferences", handleOpenPreferences);
    return () => {
      window.removeEventListener("mf-open-cookie-preferences", handleOpenPreferences);
    };
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("mf_cookie_consent", "accepted");
    setIsOpen(false);
    setShowPreferences(false);
    window.dispatchEvent(new Event("mf-cookie-consent-updated"));
  };

  const handleRejectAll = () => {
    localStorage.setItem("mf_cookie_consent", "rejected");
    setIsOpen(false);
    setShowPreferences(false);
    window.dispatchEvent(new Event("mf-cookie-consent-updated"));
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "mf_cookie_consent",
      analyticsEnabled ? "accepted" : "rejected"
    );
    setIsOpen(false);
    setShowPreferences(false);
    window.dispatchEvent(new Event("mf-cookie-consent-updated"));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-bottom justify-center sm:justify-start sm:bottom-6 sm:left-6 pointer-events-none p-4 sm:p-0">
          {!showPreferences ? (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-[420px] pointer-events-auto bg-background border border-border shadow-2xl rounded-none p-6 flex flex-col gap-4 dark:shadow-none"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Çerez Tercihleri
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Web sitemizde deneyiminizi iyileştirmek, performansı analiz etmek ve hizmetlerimizi geliştirmek için çerezler kullanıyoruz. Tercihlerinizi dilediğiniz zaman değiştirebilirsiniz.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2">
                <Button 
                  onClick={handleAcceptAll} 
                  className="w-full sm:w-auto rounded-none bg-foreground text-background hover:bg-foreground/90 font-medium"
                >
                  Tümünü Kabul Et
                </Button>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Button 
                    onClick={handleRejectAll} 
                    variant="outline" 
                    className="w-full sm:w-auto rounded-none font-medium hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground"
                  >
                    Reddet
                  </Button>
                  <Button 
                    onClick={() => setShowPreferences(true)} 
                    variant="ghost" 
                    className="w-full sm:w-auto rounded-none font-medium hover:bg-accent"
                  >
                    Tercihleri Yönet
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="fixed inset-0 sm:static sm:inset-auto z-50 flex items-center justify-center sm:block w-full h-full sm:h-auto sm:w-auto pointer-events-auto sm:pointer-events-auto bg-background/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[500px] bg-background border border-border shadow-2xl rounded-none overflow-hidden flex flex-col"
              >
                <div className="p-6 pb-4 border-b border-border flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">Tercihleri Yönet</h3>
                  <button 
                    onClick={() => setShowPreferences(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>
                
                <div className="p-6 flex flex-col gap-6 overflow-y-auto max-h-[60vh]">
                  {/* Necessary Cookies */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Gerekli Çerezler</span>
                      <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded-full">Zorunlu</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Sitenin temel işlevleri için gereklidir. Bu çerezler kapatılamaz.</p>
                  </div>
                  
                  {/* Analytics Cookies */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Analiz ve Performans</span>
                      <Switch 
                        checked={analyticsEnabled}
                        onCheckedChange={setAnalyticsEnabled}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Site trafiğini ve kullanıcı davranışlarını anonim olarak analiz etmemize yardımcı olur.</p>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-border bg-muted/20 flex flex-col sm:flex-row justify-end gap-3">
                  <Button 
                    onClick={handleRejectAll} 
                    variant="ghost" 
                    className="rounded-none font-medium hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground"
                  >
                    Tümünü Reddet
                  </Button>
                  <Button 
                    onClick={handleSavePreferences} 
                    variant="outline"
                    className="rounded-none font-medium"
                  >
                    Seçimi Kaydet
                  </Button>
                  <Button 
                    onClick={handleAcceptAll} 
                    className="rounded-none bg-foreground text-background hover:bg-foreground/90 font-medium"
                  >
                    Tümünü Kabul Et
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
