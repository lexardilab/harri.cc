'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    const rejected = localStorage.getItem('cookiesRejected');
    if (!accepted && !rejected) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    localStorage.removeItem('cookiesRejected');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesRejected', 'true');
    localStorage.removeItem('cookiesAccepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: 8,
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <p style={{ margin: 0 }}>Usamos cookies para mejorar tu experiencia.</p>
      <div>
        <button
          onClick={handleReject}
          style={{
            marginRight: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ddd',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Rechazar
        </button>
        <button
          onClick={handleAccept}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#000',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
