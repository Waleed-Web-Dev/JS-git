class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}asdfghjkl`
    }

    set password(value){
        this._password = value
    }
}

const chai = new User("chai", "chai@chai.com", "abc");
console.log(chai.password);