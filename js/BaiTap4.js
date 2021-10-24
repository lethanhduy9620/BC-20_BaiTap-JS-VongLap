/**
 * - Giải thích các biến dùng trong chương trình:
 * Biến x chứa giá trị lấy từ ô nhập số x
 * Biến n chứa giá trị lấy từ ô nhập số n
 * Biến tong chứa tổng của phép toán như đề bài yêu cầu
 */

//*Hàm main
function xuatKetQuaTinhTongS() {
    var x = document.querySelector("#txtSoX").value;
    var n = document.querySelector("#txtSoN").value;

    document.querySelector("#txtKetQua").value = "Tổng: " + TongS(x, n);
}
document.querySelector("#btnTinh").onclick = xuatKetQuaTinhTongS;

function TongS(x, n) {
    var tong = 0;
    for (var i = 1; i <= n; i++) {
        tong += Math.pow(x, i);
    }
    return tong;
}

