//for in 

const obj = {
    name: "Waleed",
    age: 18,
    class: "none"
}

for (const key in obj) {
    //   console.log(key, "is", obj[key]);
}


let arr = ["hel", "AFE", "Af", "AG"];
for(const key in arr){
    // console.log(arr[key]);
}

const map = new Map();
map.set("Pk", "Pakistan");
map.set("Ak", "Azad Kahsmir");
map.set("IOk", "Indian Occupied Kashmir");

console.log(map);
console.log(map.size);

for(const key in map){
    console.log(key);
}