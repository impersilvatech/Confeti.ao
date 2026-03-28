// sw.js — CONFETI — Reset de emergência
// Quando este ficheiro chega ao servidor:
// 1. Apaga TODAS as caches antigas
// 2. Toma controlo imediato de todos os browsers abertos
// 3. Força reload em todos os dispositivos com o site aberto
// 4. Passa a usar a estratégia network-first correcta

const CACHE_NAME = 'confeti-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => {
        return self.clients.matchAll({ type: 'window', includeUncontrolled: true })
          .then(clients => {
            clients.forEach(client => {
              client.navigate(client.url);
            });
          });
      })
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  const isChave = url.pathname.endsWith('.html')
    || url.pathname === '/'
    || url.pathname.includes('catalogo.js');

  if (isChave) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(r => {
          if (r.ok) {
            const clone = r.clone();
            caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          }
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (r.ok) {
          const clone = r.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return r;
      });
    })
  );
});
