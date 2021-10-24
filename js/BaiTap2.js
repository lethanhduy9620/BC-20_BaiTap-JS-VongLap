/**
 * - Giải thích các biến dùng trong chương trình:
 * Biến số để chứa giá trị 1000 từ đề bài
 * Biến ketQua_For để chứa kết quả trả về từ hàm TimSoChiaHetCho3_BangFor
 * Biến ketQua_While để chứa kết quả trả về từ hàm TimSoChiaHetCho3_BangWhile
 * 
 */

//*Hàm main
function inKetQua() {
    var so = 1000;
    var ketQua_For = timSoChiaHetCho3_BangFor(so);
    var ketQua_While = timSoChiaHetCho3_BangWhile(so);
    if (ketQua_For == ketQua_While) {
        document.querySelector("#txtKetQua").value = "Số chia hết cho 3 nhỏ hơn 1000: " + ketQua_For + " số";
    }
}

document.querySelector("#btnTinh").onclick = inKetQua;

function timSoChiaHetCho3_BangFor(so) {
    var ketQua = 0;
    for (var i = 0; i < so; i++) {
        if (i % 3 == 0) {
            ketQua += 1;
        }
    }
    return ketQua;
}

function timSoChiaHetCho3_BangWhile(so) {
    var ketQua = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            ketQua += 1;
        }
        i++;
    }
    return ketQua;
}