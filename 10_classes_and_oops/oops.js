// const user = {
// username : "Aayush",
// loginCount : 8,
// SignedIn : true,

// getUserDetails : function(){
// // console.log("got user details from the database");
// // console.log(`username is :  ${this.username}`)
// console.log(this)

// }
// }

// console.log(user.username)
// const user2 = {
// username : "Aayush",
// loginCount : 8,
// SignedIn : true,

// getUserDetails : function(){
// // console.log("got user details from the database");
// // console.log(`username is :  ${this.username}`)
// console.log(this)

// }
// }

// console.log(user.username)
// // console.log(user.getUserDetails())
// // console.log(this)

// const promiseone = Promise(function (){})
// const date = new Date


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userOne);
