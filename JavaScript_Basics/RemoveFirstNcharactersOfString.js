// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
return console.log(a.substring(3,a.length))
}

myFunction('abcdefg') //Expected 'defg'
myFunction('1234') //Expected '4'
myFunction('fgedcba') //Expected 'dcba'