// Day 28 Challenge: Start Coding! 🚀

// Question 82: 

function str (message:string) {
    return message.length
}
console.log(str("Life, the universe and everything. Answer:"));

// Question 83:

function upAndLower(message:string) {

    let uppercase = message.toUpperCase()
    let lowercase = message .toLowerCase() 


    console.log(`UpperCase ${uppercase} and  LowerCase ${lowercase}`)
}

upAndLower("Alicsa")
// Question 84:

function sentense(str:string) :string {
    return str.replace(/JavaScript/g, "TypeScript");
    
}

console.log(sentense("I love JavaScript and JavaScript is awesome!"));

