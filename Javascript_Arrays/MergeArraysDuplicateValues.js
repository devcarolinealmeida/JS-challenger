// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
function myFunction(a, b){
    console.log([...new Set([...a,...b])].sort((a,b) => a - b))
}

myFunction([1, 2, 3], [3, 4, 5]) // Expected [ 1, 2, 3, 4, 5 ]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) // Expected [ -11, -10, 5, 22, 41,  42, 333]


// const merge = a.concat(b)
//     const sort = merge.sort((a,b) => a - b)
//     console.log(sort.filter((x,y) => sort.indexOf(x) === y))