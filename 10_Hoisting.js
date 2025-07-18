// Hoisting : means function ko access karna uski declaration se pehle


// Example 1 : 
console.log(addone(5))

function addone(num){
    return num + 1
}


// Example 2 : 
addTwo(5)
const addTwo = function(num){
    return num + 2
}