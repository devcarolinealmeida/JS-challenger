// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a) {
    for (let i = 0; i < 3; i++){
        firstTree = a.shift()
    }
    console.log(a)
    // OR console.log(a.slice(3))
}

myFunction([1,2,3,4]) // Expected [4]
myFunction([5,4,3,2,1,0]) // Expected [2,1,0]
myFunction([99,1,1]) // Expected []