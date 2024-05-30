// console.log( 2 < 2);
// console.log( 2 == 2 );
// console.log(2 <= 2 );
// console.log( 2 === 2);
// console.log( "2" == 2);


//All the above are simple, problem is in following comparisons

console.log(null < 0);  //Output:false
console.log(null == 0);  //Output:false
console.log(null <= 0);  //Output:true

//Conclusion is that the equality check work different than comparison operator, it doesnot convert the 
//datatype but compariosn operator do . In last statement null is converted to 0 which is equal to zero
// so it gives true

console.log(undefined < 0);//Output:false
console.log(undefined == 0);//Output:false
console.log(undefined <= 0);//Output:false