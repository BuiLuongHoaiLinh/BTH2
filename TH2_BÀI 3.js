<script type="bài 3">

Mã lệnh JavaScript;

</script>
// Lấy các phần tử DOM
const formLienHe = document.querySelector(".form-lien-he");
const hoTen = document.querySelector("#ho-ten");
const email = document.querySelector("#email");
const tieuDe = document.querySelector("#tieu-de");
const noiDung = document.querySelector("#noi-dung");
const btnGui = document.querySelector(".form-lien-he button");

// Thêm sự kiện submit cho form
formLienHe.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn trình duyệt tải lại trang

  // Kiểm tra dữ liệu
  if (!hoTen.value || !email.value || !tieuDe.value || !noiDung.value) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Gửi dữ liệu
  // ... (Sử dụng AJAX để gửi dữ liệu đến server)

  // Hiển thị thông báo thành công
  alert("Gửi tin nhắn thành công!");

  // Xóa dữ liệu trong form
  hoTen.value = "";
  email.value = "";
  tieuDe.value = "";
  noiDung.value = "";
});
