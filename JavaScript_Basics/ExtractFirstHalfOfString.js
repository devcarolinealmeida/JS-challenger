// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(a) {
const nLetters = a.length
const half = nLetters/2
    return console.log(a.substring(0, half))
}

// Or:
// function myFunction(a) {
//     return a.slice(0, a.length / 2);
//  }
 

myFunction('abcdefgh') //Expected 'abcd'
myFunction('1234') // Expected '12'
myFunction('gedcba') // Expected 'ged'