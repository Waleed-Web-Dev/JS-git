// const obj = {
//     username: "Waleed",
//     price: 23,

//     msg : function(){
//         console.log(this.username)
//         console.log(this)
//     }
// }

// obj.msg();

// console.log(this);

// function my1 () {
//     let username = "wea"
//     console.log(this.username);
// }

// my1()


const a1 = () => {
    let username = "Ada";
    console.log(this.username); 
    console.log(this);
}

a1();

//Implicit arrow functions:
// (n1) => n1;
// (n1) => (n1);
// (n1) => ({username:"Aeaw"})
//Explicit arrow function: 
/* () => {
    return 
}*/