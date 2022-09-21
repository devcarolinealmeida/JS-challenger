// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function myFunction (arr) {
    console.log(arr.sort((a,b) => a.b > b.b ? 1 : -1))
}

myFunction([{a:1,b:2},{a:5,b:4}]) // Expected [{a:1,b:2},{a:5,b:4}]
myFunction([{a:2,b:10},{a:5,b:4}]) // Expected [{a:5,b:4},{a:2,b:10}]
myFunction([{a:1,b:7},{a:2,b:1}]) // Expected [{a:2,b:1},{a:1,b:7}]


// console.log(arr.sort((a,b) => {
//     if(a.b > b.b){
//         return 1;
//     }
//     if(a.b < b.b) {
//         return -1
//     }
// }))