//Chương trình Chào hỏi đúng người
/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Chọn 1 trong các giá trị thẻ select , giả sử có 4 người, cha me ,anh ,em gái, sẽ có 4 ô chọn.
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button gửi lời chào
 * - Tạo biến value lưu giá trị ô select đã dược chọn
 * - Tạo biến text lưu các lời chào tương ứng 
 * - Kiểm tra điều kiện value bằng switch
 *  các trường hợp xảy ra, 
 *              "B" thì gán text bằng 'xin chào bố'
 *              "M" thì gán text bằng 'xin chào Mẹ'
 *              "A" thì gán text bằng 'xin chào Anh trai'
 *              "E" thì gán text bằng 'xin chào Em gái'
 *              còn lại thì gán text bằng 'xin chào người lạ'
 * =========Đầu ra===========
 * - Xuất ra lời chào tương ứng
 * 
 * 
 */


 document.getElementById('button').onclick = function () {
    var valueOutput = document.getElementById('value').value;


    var output = document.getElementById('output');
    var text = '';

    output.style.color = 'green'
    switch(valueOutput){
        case 'M':{
            text = '👋 Xin chào Mẹ!!';
            break;
        }
        case 'B':{
            text = '👋 Xin chào Bố!!';
            break;
        }
        case 'A':{
            text = '👋 Xin chào Anh trai!!';
            break;
        }
        case 'E':{
            text = '👋 Xin chào Em gái!!';
            break;
        }
        default: {
            text = 'Xin chào người lạ ❗❗❗❗'
            output.style.color = 'red'
        }
    }

    output.innerText = text;
    
}
