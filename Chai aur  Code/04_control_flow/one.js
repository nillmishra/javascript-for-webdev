//if
//<,>, <=,>=, ==, !=, (===, !== )type
const temprature = 41

if(temprature === 40){
    console.log("less than 50");
}
else{
    console.log("temprature is greater than 50");
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power ${power}`);
}
//console.log(`User power ${powerm}`);

const balance = 1000

if(balance > 500) console.log("test")

const userLoggedIn = true
const Debited = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && Debited){
    console.log("Allow tp buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
     console.log("user logged in");
}