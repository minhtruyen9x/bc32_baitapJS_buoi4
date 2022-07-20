//Đọc số có 3 chữ số

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - số tự nhiên bất kỳ có 3 chữ số
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button Đọc số
 * - Sau khi button được click
 * - Tạo biến number lưu giá trị nhập từ thẻ input #number
 * - Tạo biến text đại diện giá trị chuỗi cần đọc ra từ number
 * 
 * - Kiểm tra tính hợp lệ của number
 * 
 * - Tạo biến hangTram lưu chử số hàng trăm của number
 * - Tạo biến hangChuc lưu chử số hàng chục của number
 * - Tạo biến hangDonVi lưu chử số hàng đơn vị của number
 * 
 * - Tạo hàm docSo(value,type) trả về giá trị là chuỗi đọc tương ứng cho các hàng
 * - text += docSo(hangTram,"tram") + docSo(hangChuc,"chuc") + docSo(handDonVi,"donvi") ;
 * 
 * - lưu text vào thẻ output để xuất ra màn hình
 * 
 * =========Đầu ra===========
 * - Xuất ra text 
 * 
 * 
 */

function calcXY(x,y){
    return Math.sqrt(x*x + y*y)
}

document.getElementById('button').onclick = function () {
    var sv1 = document.getElementById('sv1').value;
    var x1 = document.getElementById('x1').value * 1;
    var y1 = document.getElementById('y1').value * 1;

    var sv2 = document.getElementById('sv2').value;
    var x2 = document.getElementById('x2').value * 1;
    var y2 = document.getElementById('y2').value * 1;

    var sv3 = document.getElementById('sv3').value;
    var x3 = document.getElementById('x3').value * 1;
    var y3 = document.getElementById('y3').value * 1;

    var output = document.getElementById('output');
    output.style.color = "unset"
    var text = '';

    //kiểm tra tên sinh viên
    if(!sv1 || !sv2 || !sv3){
        output.style.color = 'red'
        output.innerHTML = "Yêu cầu nhập tên các sinh viên"
        return
    }

    //Tính quãng đường của các sinh viên
    var z1 = calcXY(x1,y1); 
    var z2 = calcXY(x2,y2); 
    var z3 = calcXY(x3,y3); 
    
    //kiểm tra tính hợp lệ các tọa độ x y
    if(Number.isNaN(z1) || Number.isNaN(z2) || Number.isNaN(z3)){
        output.style.color = 'red'
        output.innerHTML = "Yêu cầu nhập tọa độ các sinh viên"
        return
    }


    //Tìm quãng đường dài nhất
    var max = z1 > z2 ? z1:z2;
    max = max > z3 ? max:z3;
    if(max === z1) text += '<p class="m-0">👉  ' + sv1 + '</p>'
    if(max === z2) text += '<p class="m-0">👉  ' + sv2 + '</p>'
    if(max === z3) text += '<p class="m-0">👉  ' + sv3 + '</p>'
    

    output.innerHTML = 'Sinh viên ở xa trường nhất : '+ text
}