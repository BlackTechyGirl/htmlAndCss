let numbers = new Array();
numbers.push(1);
numbers.push("Hello");
console.log(numbers);

let name = ["nenman", "martha", "yemi", "richard", "peter"]
Array.prototype.forEach((name) => console.log(name))

let userMap = new Map();
let userObject = {
    name: "Tayo",
    age: 25,
    gender: "male",
    height: "6.4",
    user1: "NATIVE"
}
console.log(userObject)
userMap.set("one", "two")
userMap.set(userObject)
//destructuring

let namee = ["a", "b", "c"];
let[, , Hello] =namee;
console.log(Hello)