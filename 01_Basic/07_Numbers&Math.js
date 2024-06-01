// // let number = 10;
// // console.log(number)

// let number = new Number(100);
// console.log(number)

// let a = number.toString();
// console.log(a.length)

// let b = number.toFixed(2);
// console.log(b);  //Output: 100.00

// const anotherNumber = new Number(1000.00213);

// let c = anotherNumber.toPrecision(5)
// console.log(c);

// const bigNumber = new Number(10000000000);
// let d = bigNumber.toLocaleString();
// console.log(d);


// ++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++
//  let number = -5;

//  console.log(Math.abs(number));

//  console.log(Math.ceil(5.3));
//  console.log(Math.floor(5.9));
//  console.log(Math.round(5.5));

//  console.log(Math.max(2))
//  console.log(Math.min(2))

const min =25
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min)