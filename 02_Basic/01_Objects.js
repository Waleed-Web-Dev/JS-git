// Singleton
// object.create

//Object instantiating

const sym1 = Symbol("key1")

let obj = {
    name: "Waleed",
    age: 17,
    email: "waledd@gmail.com",
    [sym1]: "MyKey"
}

// console.log(obj.name);
// console.log(obj["name"]);

// console.log(obj[sym1]);
// console.log(typeof obj[sym1]);

// console.log(obj);

// obj.email = "walleleaskafkl"
// Object.freeze(obj)

// // obj.email = "dashak"

// console.log(obj);

obj.myFunc = function(){
    console.log(`Hi ${this.name}`);
}

console.log(obj.myFunc());