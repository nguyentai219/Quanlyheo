# Hướng dẫn cho Claude — app Quản Lý Heo

- **Luôn trả lời người dùng hoàn toàn bằng tiếng Việt** (mọi tin nhắn chat, báo cáo, câu hỏi).
- PWA quản lý heo nái, chạy trên GitHub Pages tại `/Quanlyheo/`. Toàn bộ app nằm trong `index.html`;
  `sw.js` là Service Worker; `manifest.json` là thông tin cài đặt app.
- App này **riêng biệt hoàn toàn** với app Mủ Cao Su (`/Mucaosu/`) dù chung tên miền `nguyentai219.github.io`:
  mọi khoá localStorage bắt đầu bằng `QUANLYHEO`/`quanlyheo`, tên cache bắt đầu bằng `quanlyheo-`, và
  `sw.js` chỉ được xoá cache có tiền tố `quanlyheo-`.
- Mỗi lần cập nhật phải đổi số phiên bản trong hằng `CACHE_NAME` của `sw.js` để điện thoại tự nhận bản mới.
- Sửa xong và kiểm tra xong (`node --check sw.js`, cú pháp script nội tuyến, chạy thử bằng Playwright ở
  đường dẫn `/Quanlyheo/`): commit, push, tạo pull request vào `main` rồi gộp, sau đó báo lại cho người dùng.
