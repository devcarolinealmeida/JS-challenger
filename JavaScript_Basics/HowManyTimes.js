// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function
myFunction(a, b) {
    let total = 0
    for (let i = 0; i < b.length; i++){
        if (b[i] === a){
            total++
        }
    }
    console.log(total)
}

myFunction('m', 'how many times does the character occur in this sentence?') // Expected 2
myFunction('h', 'how many times does the character occur in this sentence?') // Expected 4
myFunction('?', 'how many times does the character occur in this sentence?') // Expected 1
myFunction('z', 'how many times does the character occur in this sentence?') // Expected 0


