// singleton  (constructer se banta ha )
// object.create...   ase bhi banta ha object

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "bhivaan",
    "full name": "Bivanshu Salyan",
    [mySym]: "mykey1",
    age: 20,
    location: "Bijnor",
    email: "bhivan@google.com",
    isLoggedIn: false,
    LastLoginDay: ["Monday", "Saturday"]
}

// console.log(JsUser.email);  
// console.log(JsUser["email"]);  
// console.log(JsUser["full name"]); 
// console.log(JsUser[mySym]);  

JsUser.email = "bhivaan@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "kanu@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hellow Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hellow Js user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

