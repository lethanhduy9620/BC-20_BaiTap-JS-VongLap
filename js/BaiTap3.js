/**
 * 
 * - Giải thích các biến dùng trong chương trình:
 * Biến so chứa giá trị 10000 như đề bài yêu cầu
 * Biến tong chứa giá trị của tổng của các số từ 1 đến số n
 * Biến n chứa giá trị của  số cuối cùng của chuỗi số thỏa mãn yêu cầu đề bài
 * 
 */



//*Hàm main
function timSoNguyenDuongNhoNhat() {
    var so = 10000;
    var tong = 0;
    var n = 0;
    for (var i = 0; tong < so; i++) {
        tong += i;
        n = i;
    }
    document.querySelector("#txtKetQua").value = "Số nguyên dương nhỏ nhất là " + n;
}
document.querySelector("#btnTinh").onclick = timSoNguyenDuongNhoNhat;








