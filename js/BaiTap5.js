/**
 * - Giải thích các biến dùng trong chương trình:
 * Biến n là giá trị lấy từ ô Nhập số n
 * Biến ketQua chứa giá trị kết quả của phép toán giai thừa. Giả sử giá trị ban đầu là 1
 */

//*Hàm main
function tinhGiaThua() {
    var n = document.querySelector("#txtSoN").value;
    var ketQua = 1;
    for (var i = 1; i <= n; i++) {
        ketQua *= i;
    }
    if (n !== "")
        document.querySelector("#txtKetQua").value = "Giai thừa của " + n + " là: " + ketQua;
    else {
        document.querySelector("#txtKetQua").value = "";
    }
}
document.querySelector("#btnTinh").onclick = tinhGiaThua;