/* ---------- Kiểu dữ liệu ---------- */
/*
1. Dữ liệu nguyên thủy - Primitive Data
    - Number: var a = 1;
    - String: var firsName = 'Phuong';
    - Boolean: kết quả trả về 2 giá trị: true và false
    - Undefined: không xác định - không gán giá trị cho biến
    - Null: rỗng
    - Sumbol: biểu tượng

2. Dữ liệu phức tạp - Complex Data
    - Function: hàm thực thi chứa nhiều phương thức và thuộc tính
    - Object: Array - Object -> có dữ liệu tham chiếu
*/

//Number type
var a = 1;
var b = 2;
var c = 1.5;
//Kiểm tra kiểu dữ liệu của a
console.log(typeof a);

/*---------------------------------------------------*/
//String type
var fullName = 'Phuong Pham';
console.log(fullName);
//Kiểm tra kiểu dữ liệu
console.log(typeof fullName);

/*---------------------------------------------------*/
//Boolean type
var c = 1;
var d = 2;
var isSuccess = c > d;
console.log(isSuccess)

/*---------------------------------------------------*/
//Undefined type
var age;
console.log(age);
//Kiểm tra kiểu dữ liệu
console.log(typeof age);

/*---------------------------------------------------*/
//Null type
var isNull = null; //nothing
//Kiểm tra kiểu dữ liệu
console.log(typeof isNull); // = object

/*---------------------------------------------------*/
//Symbol type
var id = Symbol('id nek'); //unique: duy nhất 
var id2 = Symbol('id nek');
console.log(id === id2);
//Kiểm tra kiểu dữ liệu
console.log(typeof id);

/*---------------------------------------------------*/
// Function type
var myFunction = function() {
    alert('Hi Phuong Pham !');
}
myFunction(); //Gọi function để thực thi function
//Kiểm tra kiểu dữ liệu
console.log(typeof myFunction)

/*---------------------------------------------------*/
//Object type
var myObject = {
    name: 'Phuong',
    age: 28,
    adress: 'Dak Lak',
    myFunction: function () {

    }
};
// console.log('myObject', myObject);
//Kiểm tra kiểu dữ liệu
// console.log(typeof myObject)

//Array
var myArray = [
    'Javascript',
    'PHP',
    'Ruby',
    'C++'
];
console.log(myArray);
//Kiểm tra kiểu dữ liệu
// console.log(typeof myArray)

//E.x:
var a = '1';
var b = 2;

var c = typeof a;
var d = typeof b;
var e = typeof d;

console.log(c, d, e) // Output: 'string' 'number' 'string'

/*
Giải thích
typeof của 1 số sẽ trả về 'number'.

typeof của 1 chuỗi sẽ trả về 'string'.

Chú ý: Kết quả trả về của typeof sẽ luôn là 1 chuỗi, vậy nên typeof của d sẽ là 'string'.
*/