//const useremail  = "nill@123" true
//const useremail  = "" false
const useremail  = []


if(useremail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}

if(useremail.length===0){
    console.log("Array is empty");
}
else{
    console.log(useremail.length);
}


const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}
else{
    console.log(Object.keys(emptyObj).length);
}

//Nullish Coalescing Operator (???); null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


//Ternary Operator
//condition ? true : false

const iceTeaPrice = 99
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than  80")

/* ************falsy***********************
false,
0,
-0
BigInt,
"",
null,
undefined,
NaN
*/

/*******************truthy*******************************
"0",
'false'
" ",
[],
{},
function(){},
false == 0,
false == '',
0 == ''
*/
