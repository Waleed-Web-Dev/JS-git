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