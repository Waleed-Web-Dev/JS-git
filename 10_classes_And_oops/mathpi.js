console.log(Math.PI);
const des = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(des);

const obj ={
    name: "Waleed",
    age: 18,
    school: false,

    greet: function(){
        console.log(greet);
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"))

Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(obj, "name"))

for (const [key,value] of Object.entries(obj)) {
    if(typeof value !== "function")
console.log(`${key} : ${value}`);
}