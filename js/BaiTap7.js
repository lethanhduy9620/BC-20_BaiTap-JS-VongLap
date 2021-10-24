/**
 * - Giải thích các biến dùng trong chương trình:
 * Biến n chứa giá trị lấy từ ô Nhập số n
 * Biến ketQua chứa chuỗi giá trị của số nguyên tố
*/

//*Hàm main
function inSoNguyenTo() {
    var n = document.querySelector("#txtSoN").value;
    var ketQua = "";
    for (var i = 2; i <= n; i++) {
        if (checkSoNguyenTo(i)) {
            ketQua += i + " ";
        }
    }
    document.querySelector("#txtKetQua").value = ketQua;

}
document.querySelector("#btnInSo").onclick = inSoNguyenTo;

function checkSoNguyenTo(so) {
    if (so < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(so); i++) {
        if (so % i == 0) {
            return false
        }
    }
    return true;
}