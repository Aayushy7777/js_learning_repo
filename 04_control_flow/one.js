// if
// const isUserLoggedIn = true
const temperature = 41

if(temperature === 40){
    // console.log("temperature less than 50");


} else{
    // console.log("greater than 50");

}
// < , > , <= , >= , == , != , === , !== 

const score = 200

if (score>100){
    const power = "fly"
    // console.log(`user power : ${power}`)
}
// console.log(`user power : ${power}`)

const balance = 1000

// if(balance > 500) console.log("test"),
// console.log("test2");                        dont do like this

if(balance < 500){
    console.log("less than");
    }
else if(balance < 750){
    console.log("less than 750")
}
 else if (balance < 900) {
    console.log("less than 750");
    
  } else {
    console.log("less than 1200");
  }

  const UserLoggedIn = true
  const debitCard  = true
  const UserLoggedInfromGoogle = false
  const UserLoggedInfromEmail = true
  if(UserLoggedIn && debitCard && 2==3)  {
    console.log("allow to buy course");

  }
if (UserLoggedInfromEmail || UserLoggedInfromGoogle){
    console.log("user logged in ")
;
}