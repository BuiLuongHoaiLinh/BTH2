<script type="bài 4">

    Mã lệnh JavaScript;
    
    </script>
    // Lấy các phần tử DOM
const formTinhBMI = document.querySelector(".form-tinh-bmi");
const canNang = document.querySelector("#can-nang");
const chieuCao = document.querySelector("#chieu-cao");
const loaiTuoi = document.querySelector("#loai-tuoi");
const chiSoBMI = document.querySelector("#chi-so-bmi");
const phanLoai = document.querySelector("#phan-loai");
const khuyenNghi = document.querySelector("#khuyen-nghi");

// Thêm sự kiện submit cho form
formTinhBMI.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn trình duyệt tải lại trang

  // Lấy giá trị từ các input
  const canNangValue = parseFloat(canNang.value);
  const chieuCaoValue = parseFloat(chieuCao.value);
  const loaiTuoiValue = loaiTuoi.value;

  // Tính toán chỉ số BMI
  const bmi = canNangValue / (chieuCaoValue * chieuCaoValue);

  // Hiển thị chỉ số BMI
  chiSoBMI.textContent = bmi.toFixed(2);

  // Phân loại BMI
  let phanLoaiText;
  let khuyenNghiText = [];
  if (bmi < 18.5) {
    phanLoaiText = "Dưới chuẩn";
    khuyenNghiText.push("Tăng cường dinh dưỡng, ăn uống đầy đủ.");
  } else if (bmi < 25) {
    phanLoaiText = "Bình thường";
    khuyenNghiText.push("Duy trì chế độ ăn uống cân bằng và tập luyện thể dục thường xuyên.");
  } else if (bmi < 30) {
    phanLoaiText = "Thừa cân";
    khuyenNghiText.push("Giảm lượng calo nạp vào, tăng cường vận động để giảm cân.");
  } else if (bmi < 35) {
    phanLoaiText = "Béo phì cấp độ 1";
    khuyenNghiText.push("Có kế hoạch giảm cân nghiêm ngặt, kết hợp chế độ ăn uống và tập luyện.", "Tham khảo ý kiến bác sĩ để được tư vấn cụ thể.");
  } else if (bmi < 40) {
    phanLoaiText = "Béo phì cấp độ 2";
    khuyenNghiText.push("Cần có sự can thiệp y tế để giảm cân.", "Tham khảo ý kiến bác sĩ để được tư vấn phương pháp điều trị phù hợp.");
  } else {
    phanLoaiText = "Béo phì cấp độ 3";
    khuyenNghiText.push("Cần có sự can thiệp y tế khẩn cấp.", "Tham khảo ý kiến bác sĩ để được điều trị.");
  }

  // Hiển thị phân loại và khuyến nghị
  phanLoai.textContent = phanLoaiText;
  khuyenNghi.innerHTML = "";
  khuyenNghiText.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    khuyenNghi.appendChild(li);
  });
});
