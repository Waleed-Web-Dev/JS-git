class User {
    constructor(username,email){
        this.username = username;
        this.email = email
    }

    logMe(){
        console.log(this.username)
    }

    static newId() {
        return 123
    }
}

// const chai = new User("chai", "chai@chai.com");
// chai.logMe();
// console.log(chai.newId())

class Teacher extends User{
    constructor(username,email){
        super(username,email)
        console.log(this.email);
    }
}

const Tea = new Teacher("tea", "tea@tea.com")

Tea.logMe()
// console.log(Tea.newId);