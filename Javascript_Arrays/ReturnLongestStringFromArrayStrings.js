// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr){
    console.log(arr.reduce((a, b) => (a.length <= b.length ? b : a)))
}

myFunction(['help', 'me']) // Expected 'help'
myFunction(['I', 'need', 'candy']) // Expected 'candy'

