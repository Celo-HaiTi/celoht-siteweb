// CeloHT service worker  -  minimal, safe offline support.
// Strategy: cache-first for static assets (logo, icons, fonts we ship),
// network-first (falling back to cache) for HTML pages, so content never
// goes stale silently. This is intentionally conservative: it does not
// pre-cache every route, and it never intercepts POST/API-style requests.
const CACHE_NAME = "celoht-static-v3";
const BASE_PATH = new URL("./", self.registration.scope).pathname;
const BRAND_ASSETS = ["celoht-logo.png", "freclean-logo.jpg"].map(
  (asset) => `${BASE_PATH}${asset}`,
);
const STATIC_ASSETS = [
  ...BRAND_ASSETS,
  `${BASE_PATH}favicon.svg`,
  `${BASE_PATH}manifest.json`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        Promise.allSettled(STATIC_ASSETS.map((asset) => cache.add(asset))),
      ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (BRAND_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const cachedType = cached?.headers.get("content-type") ?? "";
        if (cached?.ok && cachedType.startsWith("image/")) return cached;

        return fetch(request).then((response) => {
          const contentType = response.headers.get("content-type") ?? "";
          if (response.ok && contentType.startsWith("image/")) {
            const copy = response.clone();
            void caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(request, copy));
          }
          return response;
        });
      }),
    );
    return;
  }

  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cached) => cached ?? fetch(request)),
    );
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches
          .match(request)
          .then((cached) => cached ?? caches.match(BASE_PATH)),
      ),
    );
  }
});
