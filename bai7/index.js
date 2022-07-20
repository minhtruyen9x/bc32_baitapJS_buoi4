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
function docSo(number,text){
    
    if(text === "tram") {
        text = "trăm";
    }
    else if(text === "chuc") {
        text = "mươi";
    }
    else if(text === "donvi") {
        text = "";
    }
    else {
        text = "";
    }

    var output = ''
    switch(number){
        case 0: {
            //hàng trăm là 0 thì trả về chuỗi rỗng
            if(text === 'trăm') {
                output += ''
            }
            //hàng chục là 0 thì trả về string "lẻ"
            else if (text === "mươi") {
                output += "lẻ";
            }
            //hàng đơn vị là 0 thì trả về chuỗi rỗng
            else {
                output += '';
            }
            break;
        }
        case 1: {
            if(text === ""){
                output += "mốt " + text + " "
                break;
            }
            else if(text === "mươi"){
                output += 'mười '
                break;
            }
            else {
                output += "một " + text + " "
                break;
            }
        }
        case 2: {
            output += "hai " + text + " "
            break
        }
        case 3: {
            output += "ba " + text + " "
            break
        }
        case 4: {
            output += "bốn " + text + " "
            break
        }
        case 5: {
            output += "năm " + text + " "
            break
        }
        case 6: {
            output += "sáu " + text + " "
            break
        }
        case 7: {
            output += "bảy " + text + " "
            break
        }
        case 8: {
            output += "tám " + text + " "
            break
        }
        case 9: {
            output += "chín " + text + " "
            break
        }
        default: {
            output +="### "
        }
    }
    return output;

}
document.getElementById('button').onclick = function () {
    var number = document.getElementById('number').value * 1;
    var output = document.getElementById('output');
    var text = '';

    output.style.color ="black"
    //nếu là số âm thì thêm "Âm" và chuyển number về dương
    if(number < 0){
        text += "âm ";
        number = Math.abs(number);
    }
    //kiểm tra số cần đọc có nhiều nhất 3 chữ số
    if(number > 999 ){
        output.style.color ="red"
        output.innerText ="Cần nhập số có 3 chữ số"
        return
    }

    //lưu các chữ số vào các hàng trăm ,chục ,đơn vị tương ứng 
    var hangTram = Math.floor(number/100);
    var hangChuc =  Math.floor(number%100/10)
    var handDonVi = number%10;
    
    if(number < 10){
        text += docSo(handDonVi,"donvi");
        if(number === 0) {
            text += 'Không'
        }
    }
    else {
        text += docSo(hangTram,"tram") + docSo(hangChuc,"chuc") + docSo(handDonVi,"donvi") ;
    }
    

    output.innerText = text;
}