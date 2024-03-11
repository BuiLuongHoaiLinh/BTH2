
// Lấy các phần tử DOM
const formDangNhap = document.querySelector(".form-dang-nhap");
const taiKhoan = document.querySelector("#tai-khoan");
const matKhau = document.querySelector("#mat-khau");
const btnDangNhap = document.querySelector(".form-dang-nhap button");

// Thêm sự kiện submit cho form
formDangNhap.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn trình duyệt tải lại trang

  // Lấy giá trị từ các input
  const taiKhoanValue = taiKhoan.value;
  const matKhauValue = matKhau.value;

  // Xử lý đăng nhập
  // ... (Sử dụng AJAX để gửi dữ liệu đến server và kiểm tra đăng nhập)

  // Hiển thị thông báo thành công hoặc thất bại
  if (dangNhapThanhCong) {
    alert("
