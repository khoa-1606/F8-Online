/*
    Object prototype - Basic
    1. Prototype là gì? - Đối tượng nguyên mẫu
    2. Sử dụng khi nào?
*/
function User(fristName, lastName, avatar) {
    this.fristName = fristName;
    this.lastName = lastName;
    this.avatar = avatar;
  
    this.getName = function() {
      return `${this.fristName} ${this.lastName}`;
    }
  }
//Object prototype
  User.prototype.className = 'F8';
  User.prototype.getClassName = function() {
      return this.className;
  }

  //create User
  var user = new User("Khoa", "Vo", "Avatar");
  var user2 = new User("Phuong", "Pham", "Avatar");
    
  console.log(user.className);
  //output: User {fristName: "Khoa", lastName: "Vo", avatar: "Avatar", title: "Chia sẻ dạo tại F8"}
  console.log(user2.getClassName());
  //output: User {fristName: "Phuong", lastName: "Pham", avatar: "Avatar", comment: "Có khóa học nào về ReactJS k ad"}

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
