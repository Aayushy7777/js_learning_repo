

const userEmail = "aayush@Google.com"
if(userEmail){
    console.log("got the user email");

}
else{
    console.log("dont have user emaail");
}

// falsy value 
// false , 0 , -0 , bigINT On, null, undefined, NaN

//truthy values
// "0" in between string 0 hai toh
// 'false' string le andar hai truthy
//  " "
//  []
//  {} 
//  function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")