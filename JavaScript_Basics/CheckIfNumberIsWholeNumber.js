// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a){
    console.log(Number.isInteger(a))
}

myFunction(4) //Expected true 
myFunction(1.123) // Expected false 
myFunction(1048) // Expected true 
myFunction(10.48) // Expected false 