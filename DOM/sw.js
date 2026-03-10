// sw.js - basic cache-first service worker
const CACHE_NAME = 'dic-app-v1';
const ASSETS = [
  '/',
  '/index.html',
  // If you host fonts or images add them here
];

// On install: pre-cache basic shell
self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(()=> self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

// Fetch: try cache, then network (cache-first for app shell; fetches for API use network-first with fallback)
self.addEventListener('fetch', ev => {
  const url = new URL(ev.request.url);

  // If API call to dictionaryapi.dev -> network-first then cache fallback
  if(url.hostname.includes('api.dictionaryapi.dev')){
    ev.respondWith(
      fetch(ev.request).then(res => {
        // optionally cache the response clone
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(ev.request, copy));
        return res;
      }).catch(_ => caches.match(ev.request).then(r => r || new Response(JSON.stringify({message:'Offline or failed'}), {status:503, headers:{'Content-Type':'application/json'}})))
    );
    return;
  }

  // For app shell and other assets: cache-first
  ev.respondWith(
    caches.match(ev.request).then(cached => cached || fetch(ev.request).then(netRes => {
      // optional cache static assets for future use
      return caches.open(CACHE_NAME).then(cache => { cache.put(ev.request, netRes.clone()); return netRes; });
    })).catch(()=> caches.match('/index.html')) // fallback
  );
});
