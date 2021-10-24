/**
 * - Giải thích các biến dùng trong chương trình:
 * Biến chuoiTheDiv chứa giá trị chuỗi để truyền vào thẻ có id là div-container ở file html
 * Biến divChan chứa định dạng của thẻ div chẵn
 * Biến divLe chứa định dạng của thẻ div lẻ
 * 
*/


function taoTheDiv() {
    var chuoiTheDiv = "";
    var divChan = '<div class="bg-danger text-white p-2">Div chẵn</div>';
    var divLe = '<div class="bg-primary text-white p-2">Div lẻ</div>';
    for (i = 1; i <= 10; i++) {
        i % 2 == 0 ? chuoiTheDiv += divChan : chuoiTheDiv += divLe;
    }
    document.querySelector("#div-container").innerHTML = chuoiTheDiv;
}
document.querySelector("#btnTaoThe").onclick = taoTheDiv;