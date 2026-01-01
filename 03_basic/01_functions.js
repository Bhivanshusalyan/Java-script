
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
    if(username === undefined){                        if(!username)
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

    // console.log(loginUserMessage("bhivaan"));
    // console.log(loginUserMessage());


function calculateCartPrise(...num1){
    return num1
}

// console.log(calculateCartPrise(200, 400, 500));

const user = {
    username: "bhivaan",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 500, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 800]));



    
    
