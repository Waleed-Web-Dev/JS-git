const multiplyBy5 = function (num) {
    return num*5;
}

multiplyBy5.powe = 2;

// multiplyBy5.prototype.add = function() {
//     console.log("gh");
// }

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.powe);
// console.log(multiplyBy5.prototype);

const user = function(name, price) {
    this.name = name;
    this.price = price;
}

user.prototype.increment = function(){
    this.price++;
}

user.prototype.val = function() {
    console.log(`Price is ${this.price}`);
}

const first = new user("tea", 677)

first.increment()
first.val()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/