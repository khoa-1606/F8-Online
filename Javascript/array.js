/*
1. Tạo mảng
    - Cách tạo
    //c1:
    var languages = [
        'Javascript',
        'PHP',
        'C++',
        'Java',
    ];
    console.log(languages);
    // chỉ mục đc đánh tự động, bắt đầu từ số 0

    //c2:
    var languages2 = new Array(
        'Javascript',
        'PHP',
        'C++',
        'Java',
    );
    console.log(languages2);

E.x: -----------------------------------------
Tạo biến numbers và gán cho nó 1 array,
array này có ít nhất 3 phần tử là các giá trị số.
    var numbers = [1, 2, 3];
----------------------------------------------

    - Sử dụng các nào -> sd c1

    - Kiểm tra data type
    console.log(typeof languages);
    
    Kiểm tra cho cụ thể array
    console.log(Array.isArray{});

2. Truy xuất mảng
    - Độ dài mảng
    var languages = [
        'Javascript',
        'PHP',
        'C++',
        'Java',
    ];
    console.log(languages.length);

    - Lấy phần tử theo index
    var languages = [
        'Javascript',
        'PHP',
        'C++',
        'Java',
    ];
    console.log(languages[0]);
    //output: Javascript
*/


/*
Làm việc với mảng (array): Javascript array methods
1. To string => chuyeerng array to string
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(typeof languages.toString());
=> output: string

2. Join => chèn ký tự vào giữa các phần tử trong chuỗi
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(languages.join(' - '));
=> output: Javascript - PHP - Ruby

3. Pop => xóa đi phần tử ở cuối mảng và in phần tử đó ra
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(languages.pop());
    //Xóa element cuối mảng và trả vè phần tử đã xóa

    console.log(languages);
//=> output: (2) ['Javascript', 'PHP']

4. Push => Thêm phần tử vào cuối mảng và trả về mảng đã thêm
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(languages.push('Dart', 'Java'));
    //Thêm 1 or nhiều phần tử vào cuối mảng và trả về mảng đã thêm

    console.log(languages);
//=> output: (5) ['Javascript', 'PHP', 'Ruby', 'Dart', 'Java']

5. Shift => Xóa phần tử ở đầu mảng và trả về mảng đã xóa
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(languages.shift());
    //Xóa phần tử ở đầu mảng và trả về mảng đã xóa

    console.log(languages);
//=> output: (2) ['PHP', 'Ruby']

6. Unshift => Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(languages.unshift('Dart', 'Ruby'));
    //Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng

    console.log(languages);
//=> output: (5) ['Dart', 'Ruby', 'Javascript', 'PHP', 'Ruby']

7. Splicing => Xóa, cắt, chèn phần tử mới vào bảng
Xóa - cắt:
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(languages.splice(1, 1));

    console.log(languages);
    //=> output: (2) ['Javascript', 'Ruby']
Chèn:
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];
    console.log(languages.splice(1, 0, 'Dart'));
    //                        (start, delete, add, add, ...));

    console.log(languages);
    //=> output: (4) ['Javascript', 'Dart', 'PHP', 'Ruby']

8. Concat => nối array
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];

    var languages2 = [
        'Dart',
        'C++'
    ];

    console.log(languages.concat(languages2));
=> output: (5) ['Javascript', 'PHP', 'Ruby', 'Dart', 'C++']

9. Slicing => cắt toàn bộ or 1 vài element của mảng
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];

    console.log(languages.slice(1, 2));
=> output: ['PHP']

*copy array:
    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
    ];

    console.log(languages.slice(0));
=> output: ['Javascript', 'PHP', 'Ruby']
*/

/*
E.x:
Cho trước hàm 
    joinWithCharacter có 2 tham số là array và charactor
Hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là
kết quả của việc nối từng phần tử của mảng với charactor.

    function joinWithCharacter(array, charactor) {
        return array.join(charactor);
    }


// Ví dụ khi sử dụng
    var cars = ['Honda', 'Mazda', 'Mercedes'];

    var result = joinWithCharacter(cars, ' - ');

    console.log(result); 
    // Expected: "Honda - Mazda - Mercedes"


E.x:
Hãy tạo hàm getLastElement có 1 tham số 
(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
hàm này sẽ trả về phần tử cuối cùng trong mảng.

// Viết hàm tại đây
    function getLastElement (arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            return arr[arr.length - 1];
        }
        return undefined;
    }

// Ví dụ sử dụng
    var animals = ['Monkey', 'Tiger', 'Elephant'];
    var result = getLastElement(animals);

    console.log(result); // Expected: "Elephant"
    console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

E.x:
Hãy tạo hàm getFirstElement có 1 tham số 
(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), 
hàm này sẽ trả về phần tử đầu tiên trong mảng.

// Viết hàm tại đây
    function getFirstElement(arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr[0];
    }
    return null;
    }

// Ví dụ sử dụng
    var animals = ['Monkey', 'Tiger', 'Elephant'];
    var result = getFirstElement(animals);

    console.log(result); // Expected: "Monkey"
    console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

*/
