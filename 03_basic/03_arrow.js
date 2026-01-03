const user = {
    username: "Bhivanshu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "bhivanshu"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "bhivanshu"
    console.log(this.username);
}

// chai()

// basic arrow function () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  ....  implicit return

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "bhivanshu"})



console.log(addTwo(3, 4));
