/*
Toán tử:
    *** Toán tử số học - Arithmetic
        var a = 1 + 2;
        console.log(a);
    E.x:
        1.
            var a = 1;
            var b = 2;
            var c = a + b;

            console.log(c);
        2.
                var a = 5;
                a++;
                console.log(a);
    *** Toán tử gán - Assginment
        var FullName = 'Khoa';
    E.x:
        1.
            var a = 1;
            a += 2;
            console.log(a);

        2.
            //Nguyên lý hoạt động của ++ / --
            var a = 6;
            // Việc 1: 'a copy', 'a copy' = 6
            // Việc 2: + 1 cho a, a = a + 1 => a = 7
            // Việc 3: trả về 'a copy'
            var ouput = a++;

            console.log('output: ', ouput);
            console.log('a: ', a);
    *** Toán tử so sánh - Comparison
        var a = 1;
        var b = 2;
        if (a > b) {
            alert('Sai');
        }
    *** Toán tử logic - Logical
        var a = 1;
        var b = 2;
        if (a > 0 && b > 0) {
            alert('a và b lớn hơn 0')
        }
*/
/* ---------- Toán tử gán - Assginment ---------- */
var number = 6;
var number2 = 20;
var output = number++ + --number;
            //  6     +     6

console.log('output: ', output);

// Chỗ này mình có cách dễ hiểu hơn:
// console.log(a++) là in ra rồi mới cộng
// nên nó sẽ ra kết quả là a
// và sau đó nếu thêm 1 dòng lệnh console.log(a) 
// thì sẽ ra kết quả tăng1 đơn vị 

    console.log(number++);
    console.log(number);        

// Còn console.log(++a) là cộng rồi mới in ra 
// nên sẽ ra kết quả là a+1 luôn

    console.log(++number2); 


//E.x 2:
var a = 6;
var result = ++a * 2 - a-- * 2;
          //  7  * 2 -  7  * 2
console.log('result= ',result);

//E.x 3:
    // Toán tử (++) hoặc (--) khi được dùng làm tiền tố (++a)
    // => sẽ thực hiện phép toán + hoặc - 1 đơn vị trước
    // => rồi mới trả về giá trị.

    // Còn khi được sử dụng làm hậu tố (a--)
    // => thì sẽ trả về g.trị trước rồi mới thực hiện + hoặc -
var a = 1;
var b = ++a * a--;
// var b = 2 * 2
console.log(b);



/* ---------- Toán tử chuỗi - String operator ---------- */
var firsName = 'Khoa';
var lastName = 'Vo';
// In ra màn hình sẽ nằm ở 2 dòng khác nhau
console.log(firsName);
console.log(lastName);
//Thực hiện in cả 2 giá trị trên cùng 1 dòng 
//và có dấu cách ở giữa => chuỗi
console.log(firsName + ' ' + lastName);

//cách khác:
var name = 'Phuong';
name += ' Pham';
// name = name + ' Pham';
console.log(name);

/* ---------- Toán tử so sánh - Comparison ---------- */
/*
Toán tử
==      -->      Bằng
!=      -->      Không bằng
>       -->      Lớn hơn
<       -->      Nhỏ hơn
>=      -->      Lớn hơn hoặc bằng
<=      -->      Nhỏ hơn hoặc bằng
*/
//E.x 1:
var a = 1;
var b = 2;

if (a > b) {
    console.log('Dieu kien dung !')
} else {
    console.log('Dieu kien sai !!!')
}

//E.x 2:
var a = 'Phuong Pham';
var b = 'Phuong Pham';

if (a >= b) {
    console.log('Dieu kien dung !')
} else {
    console.log('Dieu kien sai !!!')
}

//E.x 3:
var a = 1;
var b = -1;
var c = 0;
var d = 0;

var e = a <= b; // Biến a nhỏ hơn biến b nên e = false.
var f = c === d; // Biến c bằng biến d nên f = true.
var g = a >= c; // Biến a lớn hơn biến c nên g = true.

console.log(e, f, g) // Output: ?

/* ---------- Boolean ---------- */
//Kết quả trả về 2 giá trị: true và false
var a = 1;
var b = 2;
var isSuccess = a > b;
console.log(isSuccess)

/*
Để vượt qua thử thách này, hãy tạo biến canBuyAlcohol 
để thể hiện xem giá trị của biến age có đủ tuổi mua rượu hay không(?).
Theo luật, người từ 18 tuổi trở lên mới được phép mua rượu.

    var age = 16;
    var agecan = 18;
    var canBuyAlcohol = age >=agecan;

    console.log(canBuyAlcohol);
*/
/* ---------- Câu lệnh If - else ---------- */

var isEx = 1 > 2;

if (isEx) {
    console.log('DIEU KIEN DUNG !')
} else {
    console.log('DIEU KIEN SAI !!!')
}
/** Cv sang Boolean sẽ là [false]
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */

// - còn lại sẽ là [true]
var isEx = 'Phuong Pham';

if (isEx) {
    console.log('DIEU KIEN DUNG !')
} else {
    console.log('DIEU KIEN SAI !!!')
}

// Số chẵn là số khi chia cho 2 sẽ có phần dư là 0
// Số lẻ là số khi chia cho 2 sẽ có phần dư là 1

// Khai báo biến number, và gán trá trị cho biến number
var number = 13;

// Sử dụng toán tử % để lấy ra phần dư của number khi chia cho 2
// Khai báo biến remian ,và gán phần dư cho biến đặt tên là remain
var remain = number % 2

// Sử dụng toán tử so sánh === để thực hiện so sánh biến remain với 1
// Khai báo biến isOdd, và gán kết quả so sánh cho biến isOdd
var isOdd = remain === 1;

// In giá trị của biến isOdd ra cửa sổ console của trình duyệt
console.log(isOdd) 

// Output: 
//number = 13 nên number % 2 = 1. Vậy biến isOdd được gán giá trị là true

/* ---------- Toán tử logic - Logical ---------- */
// && - and => bắt buột tất cả điều kiện đúgn thì mới là đúng
//Nếu 1 trong các điều kiện sai thì sẽ là sai
var A = 1;
var B = 2;
var C = 3;
if (A > 0 && B < 0 && C > 0) {
    console.log('&& - Dieu Kien Dung Nhaaa!');
} else {
    console.log('&& - Dieu Kien Sai Roi Kiaa !!!');
}

// || - or => chỉ cần 1 trong các điều kiên đúng -> đúng
var D = 1;
var E = 2;
var F = 3;
if (D > 0 || E > 0 || F > 0) {
    console.log('|| - Dieu Kien Dung Nhaaa!');
} else {
    console.log('|| - Dieu Kien Sai Roi Kiaa !!!');
}

// ! - not => phủ định của điều kiên đúng -> sẽ thành sai và ngược lại
var G = 1;
var H = 2;
var I = 3;
if (!(G > 0)) {
    console.log('! - Dieu Kien Dung Nhaaa!');
} else {
    console.log('! - Dieu Kien Sai Roi Kiaa !!!');
}

//E.x 1:
var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d); 
// Output: ? => true false
// Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.
// Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.

//E.x 2:
var a = 13;
var b = `Phạm Minh Phương`;
var c = null;
if (typeof a === "number" && typeof b === "string" && c === null) {
    console.log(`Kiểm tra dữ liệu đề đúng`);
} else {
    console.log(`Kiểm tra dữ liệu đề sai`);
}
if (typeof a === "number" || typeof b === "string" || c === undefined) {
    console.log(`Kiểm tra dữ liệu đề đúng`);
} else {
    console.log(`Kiểm tra dữ liệu đề sai`);
}


































// ------------------------------------------------------
//câu 1
function run(number) {
    var result = number % 2 == 0 ? 'even' : 'odd';
    return result;
}

//câu 2
function checkCanAccessible(age) {
    var isAccessible = age >=16 ? true : false;
    return isAccessible;
}

//câu 3
function run(userCoin, bookPrice) {
    let result = userCoin >= bookPrice ? 'Đủ tiền' : 'Thiếu tiền';
    return result
}

//câu 4
function run(gender) {
    let result;
    if(gender == 'male')
        result = 'Nam';
    else if(gender == 'female')
        result = 'Nữ';
    else if(gender == 'other')
        result = 'Khác';        
    return result
}

//câu 5
function run(number) {
    let result
    if(number % 15 == 0)
        result = 'f8';
    else if(number % 5 == 0)
        result = 8;
    else 
        result = 'f';        
    return result
}



















