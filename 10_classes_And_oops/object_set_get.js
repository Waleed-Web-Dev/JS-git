const user = {
    _email: "chai@chai.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value
    }
}

const chai =  Object.create(user);
console.log(chai.email);