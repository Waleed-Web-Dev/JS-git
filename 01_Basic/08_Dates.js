// DATES


// let date = new Date();
// console.log(date.toLocaleString())

let createdDate = new Date(2023, 0, 20, 6, 7);
console.log(createdDate.toLocaleString())

let dateNow = Date.now();
console.log(dateNow);
// This date is in millisecond to convert it into seconds do this:
console.log(Math.floor(dateNow / 1000));

console.log(createdDate.getTime());

