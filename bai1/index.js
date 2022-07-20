//Sắp xếp thứ tự giá trị tăng dần

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - 3 số tự nhiên bất kỳ(số tự nhiên hợp lệ)
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button sắp xếp
 * - Sau khi button được click
 * - Tạo biến value1 lưu giá trị được lấy từ thẻ input #value1
 * - Tạo biến value2 lưu giá trị được lấy từ thẻ input #value2
 * - Tạo biến value3 lưu giá trị được lấy từ thẻ input #value3
 * - Xét lần lượt các điều kiện theo thứ tự ,với 3 số tự nhiên sẽ có tổng 6 điều kiện
 * value1 < value2 < value3, value1 < value3 < value2,
 * value2 < value1 < value3, value3 < value1 < value2
 * value3 < value2 < value1, value32< value3 < value1
 * =========Đầu ra===========
 * - Xuất ra thứ tự các số theo giá trị tăng dần
 * 
 * 
 */


 document.getElementById('button').onclick = function () {
    var value1 = document.getElementById('value1').value*1;
    var value2 = document.getElementById('value2').value*1;
    var value3 = document.getElementById('value3').value*1;

    var output = document.getElementById('output');
    output.style.color = "unset"

    if(value1 <= value2 && value2 <= value3){
        output.innerText = value1 + ' <= ' + value2 + ' <= ' +value3;
    }
    else if(value1 <= value3 && value3 <= value2){
        output.innerText = value1 + ' <= ' + value3 + ' <= ' +value2;
    }
    else if(value2 <= value1 && value1 <= value3){
        output.innerText = value2 + ' <= ' + value1 + ' <= ' +value3;
    }   
    else if(value3 <= value1 && value1 <= value2){
        output.innerText = value3 + ' <= ' + value1 + ' <= ' +value2;
    }
    else if(value2 <= value3 && value3 <= value1){
        output.innerText = value2 + ' <= ' + value3 + ' <= ' +value1;
    }   
    else if(value3 <= value2 && value2 <= value1){
        output.innerText = value3 + ' <= ' + value2 + ' <= ' +value1;
    }
    else {
        output.style.color = "red"
        output.innerText ="Cần nhập số hợp lệ"
    }
    
}
