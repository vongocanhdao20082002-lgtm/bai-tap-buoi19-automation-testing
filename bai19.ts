console.log("Bai tap Git");
console.log("Dong moi them vao");
console.log("Dong nay chi co o nhanh thu-nghiem");

// === GIT - GHI NHO NGAN GON ===

// Git = so ghi lich su code (may minh) | GitHub = luu ban sao tren mang

// 4 lenh dung MOI NGAY:
//   git status           -> co gi thay doi

//   git add <file>       -> chon file (add . = chon het)
//   git add src/utils/helper.ts      ← file trong thư mục con
//   Đường dẫn tính từ chỗ bạn đang đứng. 
//   Nếu đang đứng trong src/utils, muốn add file ở gốc thì .. là lùi ra một cấp:
//   git add ../../ngay.ts
//   git add .        ← thêm mọi thay đổi từ thư mục hiện tại trở xuống
//   git add -A       ← thêm mọi thay đổi trong TOÀN repo, đứng đâu cũng vậy
//   . nghĩa là "từ chỗ tôi đang đứng trở xuống".
//   -A nghĩa là "toàn bộ repo, đứng đâu cũng thế".
//   git commit -m "..."  -> chot so, PHAI co loi nhan

//   git push             -> day len GitHub (hoc sau)
//   git push -u origin main
//   Dịch nghĩa:origin  = tên tắt của repo trên GitHub (git tự đặt lúc clone)
//   main    = tên nhánh đang làm
//   -u      = ghi nhớ cặp này lại
//   Trong git push -u origin main, chữ main chỉ là tên nhánh. 
//   Thay bằng tên nào cũng được.
//   git branch            ← xem có những nhánh nào, dấu * là nhánh đang đứng
//   git switch -c test    ← TẠO nhánh mới tên test, nhảy sang luôn
//   git switch test       ← nhảy sang nhánh test đã có sẵn
//   Làm xong, push nhánh đó lên:
//   git switch -c test
//   git add -A
//   git commit -m "thu nghiem"
//   git push -u origin test

//   git clone <url> <namefolder nếu muốn đặt tên khác> -> tải project về, một lần duy nhất

//   git init                ← biến folder thường thành repo (tự tạo .git)
//   git remote add origin <url>   ← tự tay nối dây tới GitHub

// Lenh XEM:
//   git diff   -> xem sua gi (dau - = cu, dau + = moi)
//   git log    -> xem lich su chot so

// Nhanh (branch):
//   git switch -c ten   -> tao nhanh moi + chuyen sang
//   git switch ten      -> doi qua nhanh khac
//   Moi nhanh = 1 dong lich su rieng, sua o nhanh A khong dinh nhanh B
//   Quy tac: khong sua thang vao nhanh chinh (master)

// .gitignore (file o goc du an):
//   node_modules/  .env  *.log
//   -> Git lam ngo, khong bao gio dua len. Rieng file .gitignore thi PHAI commit.

// 3 trang thai file: Untracked (Git chua biet) -> Staged (da add, cho chot)
//                     -> Committed (da ghi vao so)

//Vòng đời: clone (1 lần)  →  sửa file  →  add  →  commit  →  push  
// →  quay lại "sửa file"