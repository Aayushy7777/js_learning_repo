function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();

function addTwoNumbers(num1, num2){
        let result = (num1 + num2);
        // console.log("aayush");
        // return result
        // console.log("aayush");
        return num1+ num2;

}

const result = addTwoNumbers(3, 7);
// console.log('result:', result);


addTwoNumbers(3, null);

function loginUserMessage(username){
    if(username === "undefined"){
        console.log("please enter a username");
        return
}
  
    return `${username} just loggedIn`
    
}

// console.log(loginUserMessage("aayush"));
// console.log(loginUserMessage);

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))



function CalculateCartPrice(val1, val2, ...num1) {
    return num1;
}
// console.log(CalculateCartPrice(200,300,400,40000));


const user = {
    username : "aayush",
    price : 99
}

function HandleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// HandleObject(user);
HandleObject({
    username : "sam",
    price : 399
})

const MyNewArray = [100,400,500,600]

function ReturnSecondValue(getArray){
    return getArray[1]

}
// console.log(ReturnSecondValue(MyNewArray));
console.log(ReturnSecondValue([100,400,500,600]))

