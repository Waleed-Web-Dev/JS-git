//ES6 

// class User {
//     constructor(username, email ,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password} + abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Walees", "afjkhgd", 3456);

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


//Behind the Scene 

function User(username,password,email){
    this.username = username;
    this.password = password;
    this.email = email;
}


User.prototype.encryptPassword = function (){
 return `${this.password}abc`
}

const Tea = new User("tea", "vhmfan", "a");

console.log(Tea.encryptPassword());