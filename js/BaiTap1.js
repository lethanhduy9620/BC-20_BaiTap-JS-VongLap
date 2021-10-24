/*** 
 * - Giải thích các biến dùng trong chương trình:
 * Biến so chứa giá trị 100 như đề bài yêu cầu
 * Biến ketQua_SoChan dùng để chứa giá trị số chẵn để xuất ra màn hình
 * Biến ketQua_SoLe dùng để chứa giá trị số lẻ để xuất ra màn hình
 * Biến soNguyenDuongChan_For chứa các số nguyên dương chẵn từ hàm timSoNguyenDuongChan_BangFor 
 * Biến soNguyenDuongChan_While chứa các số nguyên dương lẻ từ hàm timSoNguyenDuongChan_BangWhile
 * Biến soNguyenDuongLe_For chứa các số nguyên dương lẻ từ hàm timSoNguyenDuongLe_BangFor
 * Biến soNguyenDuongLe_While chứa các số nguyên dương tẻ từ hàm timSoNguyenDuongLe_BangWhile
 * 
 * */

//*Hàm main
function inKetQua() {
    var so = 100;
    var ketQua_SoChan, ketQua_SoLe = "";

    var soNguyenDuongChan_For = timSoNguyenDuongChan_BangFor(so);
    var soNguyenDuongChan_While = timSoNguyenDuongChan_BangWhile(so);
    if (soNguyenDuongChan_For == soNguyenDuongChan_While) {
        var ketQua_SoChan = "Số chẵn: " + soNguyenDuongChan_For;
    }

    var soNguyenDuongLe_For = timSoNguyenDuongLe_BangFor(so);
    var soNguyenDuongLe_While = timSoNguyenDuongLe_BangWhile(so);
    if (soNguyenDuongLe_For == soNguyenDuongLe_While) {
        var ketQua_SoLe = "Số lẻ: " + soNguyenDuongLe_While;
    }

    document.querySelector("#txtKetQua").innerHTML = ketQua_SoChan + "\n" + ketQua_SoLe;
}
document.querySelector("#btnTinh").onclick = inKetQua;

//*Tìm các số nguyên dương chẵn bằng cách dùng hàm For
function timSoNguyenDuongChan_BangFor(so) {
    var ketQua = "";
    for (var i = 0; i < so; i++) {
        if (i % 2 == 0) {
            ketQua += i + " ";
        }
    }
    return ketQua;
}

//*Tìm các số nguyên dương chẵn bằng cách dùng hàm While
function timSoNguyenDuongChan_BangWhile(so) {
    var ketQua = "";
    var i = 0;
    while (i < so) {
        if (i % 2 == 0) {
            ketQua += i + " ";
        }
        i++;
    }
    return ketQua;
}

//*Tìm các số nguyên dương lẻ bằng cách dùng hàm For
function timSoNguyenDuongLe_BangFor(so) {
    var ketQua = "";
    for (var i = 0; i < so; i++) {
        if (i % 2 != 0) {
            ketQua += i + " ";
        }
    }
    return ketQua;
}

//*Tìm các số nguyên dương lẻ bằng cách dùng hàm While
function timSoNguyenDuongLe_BangWhile(so) {
    var ketQua = "";
    var i = 0;
    while (i < so) {
        if (i % 2 != 0) {
            ketQua += i + " ";
        }
        i++;
    }
    return ketQua;
}