const setUserName = function(username){
    //Complex DB calls
    this.username = username;
    console.log("called")
}

const createUser = function(username, email, password){
     setUserName.call(this, username)
     this.email = email;
     this.password = password;
}

const User = new createUser("walees", "fas@gb.so", 430987)
console.log(User);