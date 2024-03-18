const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetail: function(){
        //console.log("Got user detail from database");
        console.log(`Username: ${this.username}`)
        console.log(this);
    }
}


console.log(user.username);
console.log(user.getUserDetail());
console.log(this);


