//Object constructor => Xây dựng đối tượng

function User(fristName, lastName, avatar) {
  this.fristName = fristName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function() {
    return `${this.fristName} ${this.lastName}`;
  }
}
//create User
var author = new User("Khoa", "Vo", "Avatar");
var user = new User("Phuong", "Pham", "Avatar");

author.title = 'Chia sẻ dạo tại F8';
user.comment = 'Có khóa học nào về ReactJS k ad';

console.log(author);
//output: User {fristName: "Khoa", lastName: "Vo", avatar: "Avatar", title: "Chia sẻ dạo tại F8"}
console.log(user);
//output: User {fristName: "Phuong", lastName: "Pham", avatar: "Avatar", comment: "Có khóa học nào về ReactJS k ad"}

console.log(author.getName());
//output: Khoa Vo
console.log(user.getName());
//output: Phuong Pham

//E.x:
// Hãy tạo object constructor cho nhóm Animal có 3 thuộc tính là name, leg và speed. 
// Trong đó, name là để lưu tên động vật, leg là số lượng chân và speed là tốc độ di chuyển của động vật đó.
// Sau đó, hãy tạo một đối tượng từ object constructor trên để mô tả 1 con vẹt, lưu đối tượng vào biến parrot.

function Animal(name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
}

var parrot = new Animal("Vẹt", 2, "fast");

console.log(parrot);