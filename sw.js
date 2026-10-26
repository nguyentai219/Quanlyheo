// Đổi số phiên bản mỗi lần cập nhật app → điện thoại tự nhận bản mới
const CACHE_NAME = 'quanlyheo-v1.6.0';
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

// Kích hoạt: chỉ xoá cache cũ CỦA APP NÀY — cache dùng chung cả tên miền, không đụng tới app khác (VD Mủ Cao Su)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith('quanlyheo-') && k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: ưu tiên mạng, fallback cache (cho phép dùng offline)
self.addEventListener('fetch', e => {
  const req = e.request;
  // Chỉ xử lý GET cùng trang web; Google API/đăng nhập để trình duyệt tự gửi
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req)
      .then(res => {
        // Chỉ cache phản hồi thành công
        if (res.ok) {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true }).then(r =>
          r || (req.mode === 'navigate' ? caches.match('/Quanlyheo/index.html') : undefined)
        )
      )
  );
});
