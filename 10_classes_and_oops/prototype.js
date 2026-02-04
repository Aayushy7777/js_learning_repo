let myname = "Aayush"
let mychannel = "chai"

console.log(myname.trueLength);


let myHeros = ["thor", " ironman"]
let heroPower = { 
    thor: "hammer", 
    ironman: "laser",

    getironmanPower : function(){
        console.log(`iron man power is ${this.ironman}`);

    }
}

Object.prototype.aayush = function(){
    console.log(`aayush is present in all objects`)
}

Array.prototype.heyaayush = function(){
    console.log(`AAYUSH SAYS HELLO`)

}

// heroPower.aayush()

myHeros.aayush()
myHeros.heyaayush()
// heroPower.heyaayush()

// inheritence


const user = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true,
    
}
const TeachingSupport = {
    isAvailable : false
    
}
const TaSupport = {
    MakeAssignement : 'js Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// updated code syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "chaiAurCode"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`)

}
anotherUser.trueLength()
"aayush".trueLength()
"icetea".trueLength()