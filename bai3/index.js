//Bao nhiêu số chẳn, bao nhiêu số lẻ

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
 * - tạo biến i = 0 đại diện cho số số chẳn hiện tại 
 * 
 * - Xét lần lượt các điều kiện theo thứ tự ,với 3 số tự nhiên sẽ có 3 điều kiện
 *  value1 % 2 ===0 thì i +=1 không thì i giữ nguyên giá trị;
 *  value2 % 2 ===0 thì i +=1 không thì i giữ nguyên giá trị;
 *  value3 % 2 ===0 thì i +=1 không thì i giữ nguyên giá trị;
 * =========Đầu ra===========
 * - Xuất i số chẳn và (3-i) số lẻ
 * 
 * 
 */


 document.getElementById('button').onclick = function () {
    var value1 = document.getElementById('value1').value*1;
    var value2 = document.getElementById('value2').value*1;
    var value3 = document.getElementById('value3').value*1;

    var i = 0;
    var output = document.getElementById('output');

    //kiểm tra giá trị nhập có phải là số không
    if(Number.isNaN(value1) || Number.isNaN(value1) || Number.isNaN(value1)){
        output.innerText = "Cần nhập số hợp lệ"
        return
    }

    i = value1%2 === 0 ? i+1 : i;
    i = value2%2 === 0 ? i+1 : i;
    i = value3%2 === 0 ? i+1 : i;
    
    output.innerText = "Số chẳn: " + i +"    &    " + "Số lẻ: " + (3 - i);
}
