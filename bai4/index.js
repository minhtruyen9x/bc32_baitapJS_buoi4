//Dự đoán tam giác
/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - 3 số tự nhiên bất kỳ(số tự nhiên hợp lệ) tương ứng 3 cạnh tam giác
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button dự đoán
 * - Sau khi button được click
 * - Tạo biến edge1 lưu giá trị được lấy từ thẻ input #edge1
 * - Tạo biến edge2 lưu giá trị được lấy từ thẻ input #edge2
 * - Tạo biến edge3 lưu giá trị được lấy từ thẻ input #edge3
 * - tạo biến i = 0 đại diện cho số số chẳn hiện tại 
 * 
 * - Xét lần lượt các điều kiện theo thứ tự ,với tam giác sẽ gồm 3 loại tam giác tam giác cơ bản.
 * tạo biến isTriangle lưu giá trị boolean của điều kiện nó là một tam giác
 * tạo biến vuông lưu giá trị boolean của điều kiện tam giác vuông
 * tạo biến cân lưu giá trị boolean của điều kiện tam giác cân
 * tạo biến đêu lưu giá trị boolean của điều kiện tam giác đêu
 * 
 * kiểm tra từng biến điều kiện, cái nào đúng thì gán text tương ứng
 * 
 * =========Đầu ra===========
 * - Xuất ra loại tam giác tương ứng
 * 
 * 
 */


 document.getElementById('button').onclick = function () {
    var edge1 = document.getElementById('edge1').value*1;
    var edge2 = document.getElementById('edge2').value*1;
    var edge3 = document.getElementById('edge3').value*1;
    //tam giác phải có cạnh lớn hơn 0
    var isTriangle = edge1 > 0 && edge2 > 0 && edge3 > 0;
    //tìm cạnh lớn nhất
    var maxEdge = edge1 > edge2 ? edge1 : edge2
    maxEdge = maxEdge > edge3 ? maxEdge : edge3

    //điều kiện vuông
    var vuong = maxEdge*maxEdge === edge1*edge1 + edge2*edge2 ||
                maxEdge*maxEdge === edge2*edge2 + edge3*edge3 ||
                maxEdge*maxEdge === edge1*edge1 + edge3*edge3;

    //điều kiện cân
    var can = edge1 === edge2 || edge1 == edge3 || edge2 == edge3;

    //điều kiện đều
    var deu = edge1 === edge2 && edge1 == edge3 && edge2 == edge3;

    output.style.color = 'black';
    if(!isTriangle){
        output.style.color = 'red'
        output.innerHTML = 
        "Đây là không phải là một tam giác"+
        "<p>(xin nhập giá trị hợp lệ)</p>";
    }
    else if(deu){
        output.innerText = "Đây là tam giác đều";

    }

    else if(can) {
        if(vuong){
        output.innerText = "Đây là tam giác vuông cân";
        }
        output.innerText = "Đây là tam giác cân";
    }

    else if(vuong) {
        output.innerText = "Đây là tam giác vuông";
    }

    else {
        output.innerText = "Đây là một loại tam giác khác";
    }
}
