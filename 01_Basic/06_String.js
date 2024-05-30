let name = "waleed";

let clas = 12;

// console.log(name + "Class" + clas);
// console.log(`My name is ${name} and I read in class ${clas}`);
//Now we declare string like this

let newName = new String("Waleed Ahmed");
// console.log(newName);
// console.log(newName.__proto__);
// console.log(newName[0]);
// console.log(newName.length);
// console.log(newName.toUpperCase());

let newSec = "I have  new laptop..       "

let i = 9;

// console.log(`The character at ${i} is ${newSec.at(i)}`)

// console.log(`${newSec.charAt(9)}`);

console.log(`${newSec.substring(0, 4)}`);

console.log(`${newSec.slice(-8, 4)}`);

console.log(`${newSec.trim()}`);

console.log(`${newSec.replace('have', 'is')}`)
console.log(`${newSec.includes('laptop')}`);
console.log(`${newSec.split(" ")}`);