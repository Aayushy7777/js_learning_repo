// singleton
// object.create


const mySym = Symbol("key 1")

const JsUser = {
    name : "Aayush",
    "full name" : "Aayush Yadav",
    [mySym] : "mykey1",
    age : 18,
    location : "Mumbai",
    Email : "aayush@google.com",
    isLoggedIN : false,
    LastLoggedInDays : ["Monday", "Saturday"]

}
// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.Email = "aayush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.Email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.gretting = function(){
    console.log("Hello Js User");

}
JsUser.grettingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);

}
console.log(JsUser.gretting());
console.log(JsUser.grettingTwo());

        
