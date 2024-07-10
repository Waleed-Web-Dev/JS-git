class User{
    constructor(username){
        this.username  = username 
    }

    logMe() {
        console.log(this.username);
    }
}

// const chai = new User("chai", "chai@email.com");
// chai.logMe()

class Teacher extends User{
    constructor(username,password){
        super(username)
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "aig");

chai.logMe()
chai.addCourse()

const tea = new User("Tea");

// tea.logMe()
// tea.addCourse()

console.log(tea instanceof User);
console.log(tea instanceof Teacher);
console.log(chai instanceof User);
console.log(chai instanceof Teacher);