class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

get email(){
    return this._email.toUpperCase()
}
set email(value){
  this._email = value
}

get password(){
    return `${this._password}aayush`
}
set password(value){
  this._password = value
}  
}

const aayush = new User("aayush@ai", "abc")
console.log(aayush.email);
console.log(aayush.password);