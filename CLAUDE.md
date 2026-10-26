# Hướng dẫn cho Claude — app Quản Lý Heo

- **Luôn trả lời người dùng hoàn toàn bằng tiếng Việt** (mọi tin nhắn chat, báo cáo, câu hỏi).
- PWA quản lý heo nái, chạy trên GitHub Pages tại `/Quanlyheo/`. Toàn bộ app nằm trong `index.html`;
  `sw.js` là Service Worker; `manifest.json` là thông tin cài đặt app.
- App này **riêng biệt hoàn toàn** với app Mủ Cao Su (`/Mucaosu/`) dù chung tên miền `nguyentai219.github.io`:
  mọi khoá localStorage bắt đầu bằng `QUANLYHEO`/`quanlyheo`, tên cache bắt đầu bằng `quanlyheo-`, và
  `sw.js` chỉ được xoá cache có tiền tố `quanlyheo-`.
- **Đánh số phiên bản** theo quy tắc `Z.X.Y` ghi ở đầu `README.md` (giống app Mủ Cao Su). Mỗi lần cập nhật tăng
  đúng 1 bước và đổi ở đủ 3 vị trí: `<title>` + dòng `logo-ver` trong `index.html`, `CACHE_NAME` trong `sw.js`
  (bắt buộc — điện thoại chỉ tự cập nhật khi `sw.js` đổi). `grep` số cũ để chắc không sót; không ghi số phiên bản
  vào `manifest.json`. Thêm 1 dòng vào bảng "Lịch sử phiên bản" trong `README.md` (dòng mới nhất ở trên cùng).
- Sửa xong và kiểm tra xong (`node --check sw.js`, cú pháp script nội tuyến, chạy thử bằng Playwright ở
  đường dẫn `/Quanlyheo/`): commit, push, tạo pull request vào `main` rồi gộp, sau đó báo lại cho người dùng.
