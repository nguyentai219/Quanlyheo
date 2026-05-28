const CACHE_NAME = 'quanlyheo-v1';
const ASSETS = [
  '/Quanlyheo/',
  '/Quanlyheo/index.html',
  '/Quanlyheo/manifest.json',
  '/Quanlyheo/icon-192.png',
  '/Quanlyheo/icon-512.png'
];

// Cài đặt: cache các file cần thiết
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Kích hoạt: xóa cache cũ
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: ưu tiên mạng, fallback cache (cho phép dùng offline)
self.addEventListener('fetch', e => {
  // Bỏ qua các request tới Google APIs (cần mạng)
  if (e.request.url.includes('googleapis.com') || 
      e.request.url.includes('accounts.google.com')) {
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Cache lại response mới nhất
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
