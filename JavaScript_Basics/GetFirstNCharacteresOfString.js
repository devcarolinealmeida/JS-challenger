// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a){
return console.log(a.substr(0, 3))
}

myFunction('abcdefg')
myFunction('1234')
myFunction('fgedcba')

//or console.log(a.slice(0, 3))