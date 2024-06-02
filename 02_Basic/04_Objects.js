const obj = new Object();

console.log(obj);

obj.name = "wa;"
obj.id = 23

console.log(obj);

const obj1 = {1:"a", 2: "b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}

console.log(obj3);

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(obj.hasOwnProperty("name"));


//Destructuring

const {name : myname} = obj;

console.log(myname);