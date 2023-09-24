//var c = 300 //global scope
{}//scopes

let a =300
if(true){
    let  a = 10
    const b = 20
    //var c = 30
    //c = 30
    console.log("INNER: ",a);
} //block scope


console.log("OUTER: ",a); //no output
//console.log(b) //no output
//console.log(c); //showing output


function one(){
    const username = "Nill"

    function two(){
        const website ="vscode"
        console.log(username)
    }
    //console.log(website); //error hoga 
    two();
}
one()

if(true){
    const username = "Nill"
    if(username === "Nill"){
        const website = "youtube"
        console.log(username +" "+ website)
    }
   // console.log(website) //error
}

//console.log(username)

//++++++++++++++++++++intresting+++++++++++++++++++++++++

console.log(addone(5));
function addone(value){
    return value + 1
}
//console.log(addone(5));

//console.log(addTwo(5)); error

const addTwo = function(value1) //expression
{
    return value1 + 2
}
console.log(addTwo(5));