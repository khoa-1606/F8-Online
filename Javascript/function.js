/*
Hàm (function) trong Javascript

1. Hàm?
    - Một khối mã
    - Làm 1 việc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
*/

//4. Tạo hàm đầu tiên
// Quy tắc đặt tên hàm: a->z A->Z 0->9 _ $
// Không đặt tên hàm có kí tự đầu tiên là số

// function showDialog() {
//     alert('Hi everyone!')
// }

//Gọi hàm để thực thi
// showDialog();

/*
function showMessage(message) {
    console.log(message);
}
showMessage("Hi anh em F8!");

            => message là tham số.
*/

/*
Tham số hàm trong Js
1. Tham số
    - Đinh nghĩa? 
        giá trị có thể truyền vào thông qua function
    - Kiểu dữ liêu? 
        không quy định kiểu dữ liệu, không giới hạn
    - Tính private?
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments - console.log(arguments)
    - Giới thiệu vòng lặp for-of
*/

//E.x: Định nghĩa tham số và gọi tham số
// function writeLog(message, message2, message3) {
//     Tính private? ->chỉ sử dụng đc trong fuction writeLog
//     console.log(message)
//     console.log(message2)
//     console.log(message3)
// }
// writeLog('Day la 1 dong log', 'PHP');

// function writeLog() {
//     var myString = '';
//     Lấy giá trị của arguments gán cho param
//     for(var param of arguments) {
//          console.log(param)
//         myString += `${param} - `
//     }
//     console.log(myString)
// }
// Vì giá trị của argument là 3 nên dòng for sẽ chạy 3 lần
// In ra mh 3 kết quả
// writeLog('Log1', 'Log2', 'Log3', 'Log4')

//Return trong hàm Js
// var isConfirm = confirm('Message?');
// console.log(isConfirm);

//tao ham tinh cong
// function sum(a, b) {
//     return a + b;
    //return [a, b]; => trả về giá trị là mảng

    //return a.toString() + b.toString(); => trả về chuỗi: 28

// những function ở phía dưới return sẽ không hoạt động
//}

// var result = sum(2, 8);
// console.log(result);

/*
Một số điều cần biết về function:
1. Khi function đặt trùng tên?
    function showMessage() {
        console.log('Message 1');
    }
    function showMessage() {
        console.log('Message 2');
    }
    showMessage();s
=> kết quả console.log: Message 2
=> Vì nếu trong các function có tên trùng với nhau thì sẽ
ghi đè lên nhau. Và in ra giá trị của function cuối cùng
2. Khai báo biến trong hàm?
E.x:
    function showMessage() {
        var fullName = 'Phuong Pham';
        console.log(fullName);
    }
    showMessage();
3. Định nghĩa hàm trong hàm?
E.x:
    function showMessage() {
        function showMessage2(){
            console.log('Message 2');
        }
        showMessage2();
    }
    showMessage();
*/

//-------------------------------------------------//
/*
CÁC LOẠI HÀM:
1- Declaration function
    function showMessage () {

    }
2- Expression function:
    var showMessage2 = function() {

    }
E.x 1:
    setTimeout(function testName() {

    });
E.x 2:
    var myObject = {
        myFunction: function testName() {

        }
    }
3- Arrow function - Js nâng cao
*/

/*
 ----------- Kiểu dữ liệu chuỗi - string ----------- 
1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\) gg->backslash in javascript
        var fullName = 'Phuong Pham la \'Sieu nhan\'';
        console.log(fullName);
3. Xem độ dài chuỗi
        var fullName = 'Phuong Pham';
        console.log(fullName.length);
4. Chú ý độ dài khi viết code -> max 80 ký tự
5. Template string ES6
*/

//- Các cách tạo chuỗi
//var fullName = 'Phuong Pham'; cach1 - sd cach 1
//var fullName = new String('Phuong Pham'); cach2

/*
5. Template string ES6
var firstName = 'Khoa';
var lastName = 'Vo';
console.log(`Toi la: ${firstName} ${lastName}`);*/

/* Cho trước một biến email, hãy gán giá trị cho nó là một chuỗi.
const email = 'huynhkhoavo1606@gmail.com'; */

//----------------------------------------------------//
//Các cách làm việc với chuỗi
//*** Keywork: Javascript string methods

var myString = 'Hoc JS tai F8!';


// 1. Length - độ dài chuỗi ký tự
    //console.log(myString.length);
    /*
    hoàn thành hàm getContentLength. Hàm này sẽ trả về độ dài của tham số content.
    function getContentLength(content) {
        if (typeof content === 'string' || content instanceof String) {
        return content.length;
    } else {
        return 0; // hoặc giá trị phù hợp tùy thuộc vào yêu cầu
    }
    }

    // Mở tab Console để xem kết quả trực quan
    console.log(getContentLength('JavaScript'));
    console.log(getContentLength('Hello World'));
    */

// 2. Find index - tìm vị trí trong 1 chuỗi
// Tìm từ đầu chuỗi
    // console.log(myString.indexOf('JS')); 
// Tìm từ cuối chuỗi
// var myString = 'Hoc JS tai F8 - JS - PHP!';
    // console.log(myString.lastIndexOf('JS'));

// 3. Cut string
    // console.log(myString.slice(4, 6));
    // console.log(myString.slice(4));
    // console.log(myString.slice(-3, -1));

// 4. Replace - thay thế JS trong chuỗi thành Javascript
// chỉ replace phần tử đầu tiên đc tìm thấy trong chuỗi
    // console.log(myString.replace('JS', 'Javacsript'));
// Biểu thúc chính quy - Trường hợp trong chuỗi có nhiều JS thì cú pháp sẽ là:
    // console.log(myString.replace(/JS/g, 'Javacsript'));

// 5. Convert to upper case - định dạng lại chuỗi -> in hoa
    // console.log(myString.toUpperCase());
    /*
    tạo hàm getUpperCaseName có 1 tham số là name, hàm này sẽ trả về phiên bản chữ viết hoa của giá trị mà nó nhận được từ name
    function getUpperCaseName(name) {
        return name.toUpperCase();
    }
    // Expected results:
    console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
    console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"
    */
// 6. Convert to lower case - định dạng lại chuỗi -> in thường
// console.log(myString.toLowerCase());

// 7. Trim - loại bỏ những khoảng trắng đầu & cuối chuỗi
var myName = '   Hoc JS tai F8!   ';
console.log(myName.trim().length);

// 8. Split - tách 1 chuỗi thành array
var languages = 'Javascript, PHP, Ruby, C++';
console.log(languages.split(', '));

var languages1 = 'Javascript';
console.log(languages1.split(''));

    /*
    Cho trước chuỗi coursesStr chứa tên các khóa học cách nhau bởi dấu ,.

    Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.

    var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

    function strToArray(str) {
        if (str === "") {
        return [];
        }
        return str.split(",");
    }

    // Expected results
    console.log(strToArray(coursesStr)) 

    // Output: ['HTML & CSS', 'JavaScript', 'ReactJS']
    */

// 9. Get a character by index - lấy 1 ký tự bởi 1 index cho trước
const myString2 = 'Khoa Vo';
console.log(myString2.charAt(5)); // cách 1
console.log(myString2[1]); // cách 2



























