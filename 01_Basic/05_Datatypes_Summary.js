// Primitive

// 7 Types: string, number, boolean, bigInt, symbol, null, undefined
const name = "Waleed"; //String
const age = 32; //Number
const bigNum = 7235898n; //bigInt
const isLogged = true; //Boolean
let id = Symbol('123');
let anotherId = Symbol('123');

console.log(id === anotherId);

const number = null; //Null is a standalone value, if you check itd type it will show object
let numb; //undefined

// Reference(Non-Primitive)


//3 Types: Array, Objects, Functions

let arr = ["shs", "fa", 23]; //Array
let obj = {
    name: "Waleed",
    age: 18
}; //Object
let func = function() {
    console.log("Hello World")
}

//All non-primitive datatype will return value object, function is function object


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myname = "Waleed"
let myname2 = myname;
myname2 = "ahmed";

console.log(myname);
console.log(myname2);

let obj01 = {
    email : "user@hama",
    age : 21
}

let obj02 = obj01;

obj02.email = "user@gmail.com";
console.log(obj01.email);
console.log(obj02.email);