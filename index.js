// Day 28 Challenge: Start Coding! 🚀
// Question 82: 
function str(message) {
    return message.length;
}
console.log(str("Life, the universe and everything. Answer:"));
// Question 83:
function upAndLower(message) {
    var uppercase = message.toUpperCase();
    var lowercase = message.toLowerCase();
    console.log("UpperCase ".concat(uppercase, " and  LowerCase ").concat(lowercase));
}
upAndLower("Alicsa");
// Question 84:
function sentense(str) {
    return str.replace(/JavaScript/g, "TypeScript");
}
console.log(sentense("I love JavaScript and JavaScript is awesome!"));
