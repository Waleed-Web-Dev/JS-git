let score = "33abc";

// console.log(typeof score);
// console.log(typeof(score));

let isValue = Number(score);

// console.log(typeof(isValue));
// console.log(isValue);

// 33 => Number
// 33abc => NaN
// true => 1; false => 0

let isLogged = "";

let val = Boolean(isLogged)
// console.log(val);
// console.log(typeof (val));

// 1 => true; 0 => false
// "" => false
// "waleed" => true

let num = 42;
let st = String(num);
console.log(st);
console.log(typeof st);

// ************Operations****************

let val1 = 35;
let val2 = -val1;

console.log(val2);

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

//Alll the above are basic operations, the confusion occurs in following

console.log("1" + 3 +3); //Output:133; Beacuse first is tsring all the latters are also converted to string
console.log(1 + 2 + "3"); //Outpur: 33; As string is at last, so first opeartion is peformed then it is
// concatenated

let str1 = "Waleed";
let str2 = " Ahmed";

console.log(str1 + str2);

let gameCounter = 199;

++gameCounter;

console.log(gameCounter); //Output: 200


console.log(+true); //Output: 1 
console.log(+"");//Output: 0