var emailKey = "email";

var myInfo = {
  name: "Khoa Vo",
  age: 26,
  address: "TV",
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

console.log(myInfo.address); //output: TV
console.log(myInfo["age"]); //output: 26

var myKey = "address";
console.log(myInfo[myKey]); //output: TV
