//Tính toán ngày tháng năm

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - 3 số tự nhiên bất kỳ(số tự nhiên hợp lệ) cho ngày tháng và năm
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button ngày kế tiếp
 * - Sau khi button được click
 * - Tạo biến date lưu giá trị được lấy từ thẻ input #date
 * - Tạo biến month lưu giá trị được lấy từ thẻ input #month
 * - Tạo biến year lưu giá trị được lấy từ thẻ input #year
 * - Tạo biến nextDay đại diện giá trị ngày tiếp theo( mặc định date + 1 )
 * - Tạo biến nextMonth đại diện giá trị tháng tiếp theo( mặc định month + 1 )
 * - Tạo biến nextYear đại diện giá trị năm tiếp theo(mặc định bằng year)
 * - Sử dụng điều kiện switch để chọn ra những tháng có 31 ngày(1,3,5,7,8,10,12), tháng 2 có 28 ngày
    , và nhũng tháng còn lại tương dương có 30 ngày
    Trong những tháng có 31 ngày, nếu date = 31, thì gán nextDay = 1 đồng thời xét điều kiện nếu month = 12
    thì gán nextMonth = 1 và nextYear = year + 1;

 * - Lắng nghe sự kiện click button ngày trước đó
 * - Sau khi button được click
 * - cách tính giống như khi click button next như trên
 * 
 * =========Đầu ra===========
 * - Xuất ra ngày tháng năm tương ứng
 * 
 * 
 */

document.getElementById('buttonNext').onclick = function () {
    var date = document.getElementById('date').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;
    var output = document.getElementById('output');

    //mặc định các ngày nằm ở giữa tháng
    var nextDay = date + 1;
    var nextMonth = month;
    var nextYear = year;
    //Điều kiện ngày tháng không hợp lệ
    if (date < 1 || Number.isNaN(year) || Number.isNaN(date)) {
        output.innerText = "Ngày tháng không hợp lệ";
        return;
    }
    switch (month) {
        case 1: case 3: case 5:
        case 7: case 8: case 10:
        case 12: {
            if (date === 31) {
                nextDay = 1;
                if (month === 12) {
                    nextMonth = 1;
                    nextYear = year + 1;
                }
                else {
                    nextMonth = month + 1;
                }
            }
            break;
        };
        case 2: {
            //tháng 2 chỉ có 28 ngày, nên date > 28 không hợp lệ
            if (date > 28) {
                output.innerText = "Ngày tháng không hợp lệ"
                return 
            }
            if (date === 28) {
                nextDay = 1;
                nextMonth = month + 1;
            }
            break;
        }
        case 4: case 6: case 9: 
        case 11: {
            //các tháng còn lại chỉ có 30 ngày, nên date = 31 không hợp lệ
            if (date === 31) {
                output.innerText = "Ngày tháng không hợp lệ"
                return 
            }
            if (date === 30) {
                nextDay = 1;
                nextMonth = month + 1;
            }
            break;
        }
        default: {
            output.innerText = "Ngày tháng không hợp lệ";
            return
        }
    }
    output.innerText = nextDay + '/' + nextMonth + '/' + nextYear
}

document.getElementById('buttonPrev').onclick = function () {
    var date = document.getElementById('date').value * 1;
    var month = document.getElementById('month').value * 1;
    var year = document.getElementById('year').value * 1;
    var output = document.getElementById('output');

    //mặc định các ngày nằm ở giữa tháng
    var prevDay = date - 1;
    var prevMonth = month;
    var prevYear = year;
    //Kiểm tra tính hợp lệ của ngày năm
    if (date < 1 || Number.isNaN(year) || Number.isNaN(date)) {
        output.innerText = "Ngày tháng không hợp lệ";
        return
    }

    switch (month) {
        case 1: case 3: case 5:
        case 7: case 8: case 10:
        case 12: {
            if (date === 1) {
                prevDay = 31;
                if (month === 1) {
                    prevMonth = 12;
                    prevYear = year - 1;
                }
                else {
                    prevMonth = month - 1;
                }
            }
            break;
        };
        case 2: {
            if (date > 28) {
                output.innerText = "Ngày tháng không hợp lệ";
                return
            }
            if (date === 1) {
                prevDay = 31;
                prevMonth = month - 1;
            }
            break;
        }
        case 4: case 6: case 9: 
        case 11: {
            if (date === 31) {
                output.innerText = "Ngày tháng không hợp lệ"
                return 
            }
            if (date === 1) {
                prevDay = 30;
                prevMonth = month - 1;
            }
            break;
        }
        default: {
            output.innerText = "Ngày tháng không hợp lệ";
            return
        }
    }
    output.innerText = prevDay + '/' + prevMonth + '/' + prevYear;
}

