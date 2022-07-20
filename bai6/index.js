//Tính toán số ngày trong tháng 

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - 3 số tự nhiên bất kỳ(số tự nhiên hợp lệ) cho tháng và năm
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button ngày kế tiếp
 * - Sau khi button được click
 * - Tạo biến month lưu giá trị được lấy từ thẻ input #month
 * - Tạo biến year lưu giá trị được lấy từ thẻ input #year
 * - Sử dụng điều kiện switch để chọn ra những tháng có 31 ngày(1,3,5,7,8,10,12), tháng 2 có 28 ngày
    , và nhũng tháng còn lại tương dương có 30 ngày
    Trong những tháng có 31 ngày, gán date = 31
    Trong những tháng có 30 ngày, gán date = 30
    Trong tháng 2 có 28 ngày, gán date = 28, và xét điều kiện năm nhuận
        nếu là năm nhuận gán lại date = 29,
 *
 * =========Đầu ra===========
 * - Xuất ra số ngày trong tháng tương ứng
 * 
 * 
 */

document.getElementById('button').onclick = function () {
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;
    
    var output = document.getElementById('output');
    var date;

    //Điều kiện năm không hợp lệ
    if(Number.isNaN(year)) {
        output.innerText = "Ngày tháng không hợp lệ" 
        return 
    }
    switch (month) {
        case 1: case 3: case 5: 
        case 7: case 8: case 10:
        case 12: {
            date = 31;
            break;
        };
        case 2: {
            date = 28;
            if(year%4 === 0 || year%400 === 0){
                date = 29;
            }
            break;
        }
        case 4: case 6: case 9: 
        case 11: {
            date = 30;
            break;
        }
        default: {
            output.innerText = "Ngày tháng không hợp lệ" ;
            return
        }
    }
    output.innerText = 'Số ngày trong tháng: ' + date + ' ngày';
}