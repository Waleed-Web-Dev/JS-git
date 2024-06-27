//For of

// ["", "", ""]
// [{}, {}, {}]

let arr = [12,24,24];
for (const i of arr) {
    // console.log(i);
}

let name = "Waleed Ahmed";

for(const n of name){
    // console.log(n)
}


const map = new Map();
console.log(map);

map.set("naas", 32)

console.log(map)

console.log(map.size)

map.set("ag", 43)
map.set("sdsgfhd", 4)


for(const [val, key] of map){
    console.log(val,"=", key)
}

let obj = {
    name: "Waleed"
}

for(const i of obj){
    console.log(i);
}