'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'user_cookie_preferences';

const defaultPreferences = {
  necessary: true,    // Siempre true
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [showModal, setShowModal] = useState(false);

  // Carga las preferencias al montar
  useEffect(() => {
    const savedPrefs = Cookies.get(COOKIE_NAME);
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
      setShowBanner(false);
      loadScripts(JSON.parse(savedPrefs));
    } else {
      setShowBanner(true);
    }
  }, []);

  // Guarda preferencias y oculta banner/modal
  function savePreferences(prefs) {
    Cookies.set(COOKIE_NAME, JSON.stringify(prefs), { expires: 365 });
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);
    loadScripts(prefs);
  }

  // Ejemplo: cargar o bloquear scripts externos según preferencias
  function loadScripts(prefs) {
    if (prefs.analytics) {
      // Aquí podrías insertar dinámicamente el script de Google Analytics
      if (!window.gtag) {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=TU_ID_ANALYTICS';
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'TU_ID_ANALYTICS');
      }
    } else {
      // Si decides, puedes eliminar cookies de analytics o bloquear tracking aquí
    }

    // Similar para marketing u otros scripts
  }

  function handleAcceptAll() {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  }

  function handleRejectAll() {
    savePreferences({ necessary: true, analytics: false, marketing: false });
  }

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-xl text-sm">
            Usamos cookies para mejorar tu experiencia, analizar el tráfico y mostrar publicidad personalizada.{' '}
            <a href="/politica-cookies" className="underline">Más info</a>.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleRejectAll}
              className="px-3 py-1 rounded border border-white hover:bg-white hover:text-gray-900 transition"
            >
              Rechazar todas
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-3 py-1 rounded border border-white hover:bg-white hover:text-gray-900 transition"
            >
              Configurar
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-3 py-1 rounded bg-white text-gray-900 font-semibold hover:bg-gray-200 transition"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 space-y-4 text-gray-900">
            <h2 className="text-xl font-bold">Configuración de Cookies</h2>
            <p>
              Puedes personalizar qué tipos de cookies permites. Las cookies estrictamente necesarias son imprescindibles y siempre están activas.
            </p>

            <form
              onSubmit={e => {
                e.preventDefault();
                savePreferences(preferences);
              }}
              className="space-y-4"
            >
              <label className="flex items-center gap-3">
                <input type="checkbox" checked disabled />
                <span>Cookies estrictamente necesarias</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={e =>
                    setPreferences(p => ({ ...p, analytics: e.target.checked }))
                  }
                />
                <span>Cookies analíticas</span>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={e =>
                    setPreferences(p => ({ ...p, marketing: e.target.checked }))
                  }
                />
                <span>Cookies de marketing</span>
              </label>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
                >
                  Guardar preferencias
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
