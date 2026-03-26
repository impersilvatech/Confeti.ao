// Service Worker — CONFETI
// Estratégia network-first: vai sempre ao servidor, usa cache só se offline
const CACHE_NAME = 'confeti-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Apagar caches antigas
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Só interceta pedidos do mesmo domínio
  if (url.origin !== location.origin) return;

  // Ficheiros HTML e catalogo.js — sempre da rede (network-first)
  const isHtml = url.pathname.endsWith('.html') || url.pathname === '/';
  const isCatalogo = url.pathname.includes('catalogo.js');

  if (isHtml || isCatalogo) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(response => {
          // Guardar cópia fresca em cache para uso offline
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(e.request)) // offline: usar cache
    );
    return;
  }

  // Outros recursos (CSS, fonts, imagens) — cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      });
    })
  );
});
