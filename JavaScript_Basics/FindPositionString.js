// Write a function that takes a string as argument
// The string contains the substring 'is'
// Return the index of 'is'
function myFunction(a) {
// return console.log(a.search('is')) ou
return console.log(a.indexOf('is'))
}

myFunction("praise") //Expected 3
myFunction("risky") //Expected 1
myFunction("paris") // Expected 3
