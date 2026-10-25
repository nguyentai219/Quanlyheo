-- Chạy 1 lần trong Supabase → SQL Editor (project riêng rqthturqwljxpoeyelrb, Singapore) để bật đồng bộ cho app Quản Lý Heo.
-- Mỗi tài khoản 1 dòng; cột pigs chứa toàn bộ dữ liệu heo. Chỉ chủ tài khoản đọc/ghi được dòng của mình.
create table if not exists public.quanlyheo_data (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  pigs       jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.quanlyheo_data enable row level security;

drop policy if exists "quanlyheo own rows" on public.quanlyheo_data;
create policy "quanlyheo own rows" on public.quanlyheo_data
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
