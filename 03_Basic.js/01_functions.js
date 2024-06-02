// function func(name = "WallU"){
//     return name
// }

// console.log(func(""));

const obj = {
    name : "Waleed", 
    age: 134
}

function newfunc(objs){
    console.log(`My name is ${objs.name} and my age is ${objs.age}`)
}

newfunc(obj)

function arrfun(arr){
    return arr[0]
}

console.log(arrfun([345,4333,43335]))