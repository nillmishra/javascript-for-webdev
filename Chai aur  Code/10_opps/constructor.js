//const promiseOne = new Promise()
//const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.IsLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.usernme}`);
    }
    //return this
}

const userOne = new User("hitesh", 12, true) //adding new
const userTwo = new User("ChaiaurCode", 11, false)
console.log(userOne.constructor)
//console.log(userTwo)