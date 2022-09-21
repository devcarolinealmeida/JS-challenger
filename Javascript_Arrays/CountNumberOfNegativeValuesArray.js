// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function
myFunction (a) {
    let counter = 0
    a.map((number) => {
        if (number < 0) {
            counter++
        }
    })
    console.log(counter)
    // OR console.log(a.filter((el) => el < 0).length)
}

myFunction([1,-2,2,-4]) // Expected 2
myFunction([0,9,1]) // Expected 0
myFunction([4,-3,2,1,0]) // Expected 1