const promiseOne = new Promise(function(resolve,reject){
     //do an async
     //DB calls, cryptogaphy, network
     setTimeout(function(){
        console.log('Async task is complete');
        resolve()
     },1000)
})    

promiseOne.then(function(){
    console.log("Promise consumed");
}) 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "NILL", email: "nillmishra09@gamail.com"})
    },1000)
})

promiseThree.then(function(userData){
    console.log(userData);
})


const promiseFourth = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "NILL", email: "nillmishra09@gamail.com"})
        }
        else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})

promiseFourth
.then((userData)=>{
    console.log(userData);
    return userData.username
})
.then((userNam)=>{
    console.log(userNam)
}) 
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("THe promie is either resolved or rejected")
})
  

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "NILL", email: "nillmishra09@gamail.com"})
        }
        else{
            reject('ERROR: JS Went Wrong')
        }
    }, 1000);
}) 

async function consumepromiseFive  (){
    try {
        const response = await promiseFive
        console.log(response)  
    } catch (error) {
        console.log(error);
    } 
}

consumepromiseFive()

// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }

//value nahin ayega

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response)
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}


getAllUsers()

fetch('https://api.github.com/users/nillmishra')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})