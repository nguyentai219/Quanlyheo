# 🐷 Quản Lý Heo Nái PRO

PWA quản lý heo nái: lịch phối, dự sinh, lịch tiêm heo mẹ / heo con, chi phí, xuất chuồng — cài được lên
điện thoại như app thật, chạy offline, đồng bộ nhiều máy qua Supabase hoặc Google Drive.
Địa chỉ: https://nguyentai219.github.io/Quanlyheo/

## 🔢 Quy tắc đánh số phiên bản (`Z.X.Y`, giống app Mủ Cao Su)

- Số cuối bên phải (**Y**) tăng đúng **1 đơn vị** mỗi lần cập nhật, chạy từ **0 → 9**.
- Hết 9 thì **X** (số ở giữa) tăng lên 1, **Y** quay lại **0**.
- Khi **X.Y đạt tối đa `9.9`** thì tăng **Z** (số đầu) lên 1, đồng thời **X quay lại 1** (không phải 0) và **Y quay lại 0**.
- Ví dụ: `1.6.1` → `1.6.2` → … → `1.6.9` → `1.7.0` → … → `1.9.9` → `2.1.0` → `2.1.1` → …
- Mỗi lần cập nhật chỉ tăng đúng 1 bước, đổi ở **3 vị trí**: `<title>` và dòng `logo-ver` (đầu trang) trong
  `index.html`, hằng `CACHE_NAME` trong `sw.js` (bắt buộc — điện thoại chỉ tự cập nhật khi `sw.js` thay đổi).
  Sau khi đổi, `grep` số cũ để chắc không sót. **Không** ghi số phiên bản vào `manifest.json`.

## 📋 Lịch sử phiên bản

| Phiên bản | Ngày | Thay đổi |
|-----------|------|----------|
| **v1.6.1** | 2026-10-26 | 🏷️ Đầu trang mới: logo heo xoay, tên **Quản Lý Heo Nái PRO**, số phiên bản; áp dụng quy tắc đánh số `Z.X.Y` như app Mủ Cao Su. |
| v1.6.0 | 2026-10-26 | 🗑️ Xoá heo chuyển vào mục **Heo đã xoá** (xem lại đầy đủ, khôi phục hoặc xoá hẳn). |
| v1.5.0 | 2026-10-26 | 🔀 Đồng bộ nhiều máy giữ bản sửa sau cùng (gộp theo từng con); 🌖 âm lịch + icon mặt trăng; 💉 lịch tiêm tối ưu. |
| v1.4.1 | 2026-10-26 | 🛡️ Sửa các lỗi có thể gây mất dữ liệu; sao lưu / khôi phục bằng file. |
| v1.4.0 | 2026-10-26 | 🔗 Trang Kết nối & đồng bộ đầy đủ chức năng (đổi phương án, quên/đổi mật khẩu, xem dữ liệu, PDF, thư mục lưu trữ). |
| v1.3.x | 2026-10-26 | Nút + popup Thêm heo mới; thanh thông báo đa nhiệm; trang kết nối (nhấp đúp thanh thông báo). |
| v1.2.x | 2026-10-25 | ⚡ Đồng bộ Supabase (project riêng, Singapore); tách biệt hoàn toàn với app Mủ Cao Su. |
| v1.1.0 | 2026-10-25 | 🐛 Sửa lệch ngày theo UTC, khôi phục dữ liệu, ký tự đặc biệt, Service Worker. |
