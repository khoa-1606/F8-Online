var emailKey = "email";

var myInfo = {
  name: "Khoa Vo",
  age: 26,
  address: "Tra Vinh City",
  [emailKey]: "huynhkhoavo1606@gmail.com",
  //[biến]: 'value'
  getName: function () {
    return this.name; //this -> myInfo
  },
  getAge: function () {
    return this.age; //this -> myInfo
  },
};

console.log(myInfo.getName()); //output: Khoa Vo
console.log(myInfo.getAge()); //output: 26
