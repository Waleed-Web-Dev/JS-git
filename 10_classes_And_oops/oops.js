const user = {
    username: "waleed",
    loginCount: 24,
    isLoggesin: true,
    greet: function(){
        console.log(this)
        console.log(this.username);
        // console.log(username);
    }
 }

// console.log(user.greet());
// console.log(user.username);

console.log(this);

function newUser(username, loginCount, isLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    return this
}

const user1 = new newUser("Waleed", 3, true)
const user2 = new newUser("js", 4, false)
console.log(user1.constructor == user2.constructor)