/*
Kiểu số (Number) trong Javascript

1. Tạo giá trị Number
    - Các cách tạo
        + Case 1: => should use
            var age = 26;
            var PI = 3.14;
        + Case 2:
            var otherNumber = new Number(9);

    - Dùng cách nào? Tại sao
        + should use case 1
    - Kiểm tra data type
        + typeof
2. Làm việc với number
    - To String
    - To Fixed
*/

//Keywork: Javascript number methods

// var age = 26;
// var PI = 3.14;

// var result = 20 / 'ABC'; //chia không hợp lệ
// isNaN để ktra xem result có phải là NaN hay không
// console.log(isNaN(result)); //=> true


// var age = 26;
// var PI = 3.14;

// console.log(age.toString());
// //or
// var myString = age.toString();
// console.log(myString);

var age = 26;
var PI = 3.14;
var money = 3000.86428634246;

console.log(PI.toFixed()); //3 vì 3.14 làm tròn về 3

console.log(money.toFixed()); // 3001
console.log(money.toFixed(3)); // 3000.864


/*Bài tập:
1. Tạo hàm isNumber, hàm này dùng với mục đích kiểm tra xem một giá trị có phải là 1 số hay không
    Hàm isNumber có 1 tham số, hãy đặt tên nó là value
    Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false

        function isNumber(value) { 
            return typeof value === 'number';
        }

        // Expected results:
        console.log(isNumber(999)); // true
        console.log(isNumber('abc')); // false
        console.log(isNumber('100')); // false

2. - Tạo hàm isNumber
    - Hàm isNumber có 1 tham số đặt tên là value
    - isNumber(value) trả về true khi value có kiểu số, ngược lại trả về false
    - isNumber(NaN) cần trả về false
        
        function isNumber(value) {
            return Number.isFinite(value);
        }
        // Expected results:
        console.log(isNumber(999)); // true
        console.log(isNumber('abc')); // false
        console.log(isNumber('100')); // false

        console.log(isNumber(NaN)); // false
        console.log(isNumber(100 / 'abc')); // false
*/
