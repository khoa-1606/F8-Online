//Object constructor => Xây dựng đối tượng

function User(fristName, lastName, avatar) {
  this.fristName = fristName;
  this.lastName = lastName;
  this.avatar = avatar;
}
//create User
var author = new User("Khoa", "Vo", "Avatar");
var user = new User("Phuong", "Pham", "Avatar");

console.log(author);
//output: User {fristName: 'Khoa', lastName: 'Vo', avatar: 'Avatar'}
console.log(user);
//output: User {fristName: 'Phuong', lastName: 'Pham', avatar: 'Avatar'}
