const tinderUser = {}

tinderUser.name = "John Doe"
tinderUser.age = 28
tinderUser.isVerified = true
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"aayush@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "Aayush",
            lastname: "Sharma"

        }

    }
}
// console.log(regularUser.fullname?.Userfullname.firstname);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}

// const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}  // most used syntax

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "aayush@google.com",

    },
    {
        id: 1,
        email: "aayush@google.com",

    },
    {
        id: 1,
        email: "aayush@google.com",

    },
    {
        id: 1,
        email: "aayush@google.com",

    },
    {
        id: 1,
        email: "aayush@google.com",

    },

]
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.IsLoggedIn.hasOwnProperty());
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",      // api response

//     "price": "free"
// }

[
    {},
    {},
    {}
]