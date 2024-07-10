const Hero = ["As", "AF"]
const heroPow = {
    spider: "slingy",
    thor: "hammer",

    pow: function() {
        console.log(`The power of spider is ${this.spider}`);
    }
}

Object.prototype.Hi = function(){
    console.log(`Hi, I am under the object`);
}

Array.prototype.Hey = function(){
    console.log(`H, I am under the array `);
}

// console.log(heroPow.Hi());
// console.log(Hero.Hey());
// console.log(Hero.Hi());
// heroPow.Hey()

//Inheritence

const user = {
    username: "jafs",
    id: 3465
}

const teacher = {
    name: "agd",
    // __proto__ : user
}
// teacher.__proto__ = user
//Modern way
Object.setPrototypeOf(teacher, user)
// console.log(teacher["id"]);


let anotherName = "Waleed     ";

String.prototype.trueLenght = function(){
   let trueL = this.trim().length;
   console.log(`True lenght of ${this} is ${trueL}`)
}

anotherName.trueLenght()