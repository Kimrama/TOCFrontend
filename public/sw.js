// public/sw.js — แบบเรียบ ไม่วน
const CACHE_NAME = "song-images-v1";
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || req.destination !== "image") return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    const network = fetch(req)
      .then(async (res) => {
        if (res && (res.ok || res.type === "opaque")) {
          try { await cache.put(req, res.clone()); } catch {}
        }
        return res;
      })
      .catch(() => null);

    if (cached) {
      event.waitUntil(network); // อัปเดตพื้นหลังครั้งเดียว
      return cached;
    }
    const fresh = await network;
    return fresh || new Response("", { status: 504 });
  })());
});
