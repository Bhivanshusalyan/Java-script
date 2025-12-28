
function sayMyName(){
    console.log("B")
    console.log("H")
    console.log("I")
    console.log("V")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(3, 4)

// console.log("Result:", result );


function loginUserMessage(username = "sam"){
    // if(username === undefined){                        if(!username)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())