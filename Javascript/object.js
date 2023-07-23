/*
    Object trong Javascript
*/ 
var emailKey = 'email';

var myInfo = {
    name: 'Khoa Vo',
    age: 26,
    address: 'Tra Vinh City',
    [emailKey]: 'huynhkhoavo1606@gmail.com',
    //[biến]: 'value'
    getName: function() {
        return this.name; //this -> myInfo
    },
    getAge: function() {
        return this.age; //this -> myInfo
    }
};

//Function ---> Phương thức / methods
//Other ---> Thuộc tính / property

console.log(myInfo.getName()); //output: Khoa Vo
console.log(myInfo.getAge()); //output: 26

//myInfo.email = 'huynhkhoavo1606@gmail.com';

console.log(myInfo);

//Lấy giá trị - 2 cách
console.log(myInfo.name); //cách 1

console.log(myInfo['age']); //cách 2

var myKey = 'address';
console.log(myInfo[myKey]);

// Xóa
delete myInfo.age;
console.log(myInfo);
