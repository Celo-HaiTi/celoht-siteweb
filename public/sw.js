// CeloHT service worker — minimal, safe offline support.
// Strategy: cache-first for static assets (logo, icons, fonts we ship),
// network-first (falling back to cache) for HTML pages, so content never
// goes stale silently. This is intentionally conservative: it does not
// pre-cache every route, and it never intercepts POST/API-style requests.
const CACHE_NAME = "celoht-static-v1";
const STATIC_ASSETS = ["/celoht-logo.png", "/favicon.svg", "/manifest.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cached) => cached ?? fetch(request)),
    );
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match(request).then((cached) => cached ?? caches.match("/"))),
    );
  }
});
