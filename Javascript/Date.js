// Đối tượng Date


/*E.x:
Tạo một object constructor Student gồm: firstName, lastName. 
Sau đó, định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.
*/
// Làm bài tại đây
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  // Ví dụ khi sử dụng
  var student = new Student('Khoa', 'Vo');
  
  console.log(student.firstName);  // 'Khoa'
  console.log(student.lastName);  // 'Vo'
  console.log(student.getFullName());  // 'Khoa Vo'