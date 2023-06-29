/* ---------- Câu lệnh điều kiện & phép so sánh ---------- */
var a = 1;
var b = 2;

//Toán tử && - and

/* Kiểu Boolean */
// var result = a < b && a < 0;
// console.log(result);
/* Boolean sẽ là [false]:
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
*/

// - còn lại sẽ là [true]
// var result = 'A' && 'B' && NaN && 'D';
// console.log(result);

/* Logic */
//  var result = a < b;
// console.log('result: ', result);

//E.x:---------------------------------------
// var result = 'A' && 'B' && NaN && 'D';
// if (result) {
//     console.log('DIEU KIEN DUNG');
// } else {
//     console.log('DIEU KIEN SAI');
// }
/*
=> đọc giá trị từ trái sang phải
=> giá trị nào không nằm trong 6 giá trị [false]
    => đọc giá trị kế tiếp cho đến cuối và in giá tri cuối cùng
=> Nếu giá trị nằm trong 6 giá trị [false]
    => lấy giá trị đó gán cho giá trị cha và không đoc giá trị kế tiếp
Như ví dụ trên:
- vị trí thứ 3 có giá trị là NaN (nằm trong 6 g.trị [false]
nên sẽ lấy NaN gán cho result => false
- Sẽ in ra màn hình là DIEU KIEN SAI
*/


//Toán tử || - or

var result = null || 'B' || 'C' || 'D';
console.log('result: ', result);

if (result) {
    console.log('DIEU KIEN DUNG');
} else {
    console.log('DIEU KIEN SAI');
}
/*
=> đọc giá trị từ trái sang phải
=> nếu giá trị đầu tiên nằm trong 6 giá trị [false]
    => đọc giá tri kế tiếp và in giá trị kế tiếp
=> Nếu giá trị bất kì ở giữa nằm trong 6 giá trị [false]
    => lấy giá trị đầu tiên gán cho giá trị cha và in ra màn hình
Như ví dụ trên:
- vị trí đầu tiên nằm trong 6 giá trị [false] nên sẽ bỏ qua vị trí đó
và lấy giá tri thứ 2 là B => true
- Sẽ in ra màn hình là DIEU KIEN DUNG
*/