/* 
TOPIC : Nested Funtion (Function ke andar function)

- You can have as many functions inside a function as you want. 
- To understand this better, lets take an example of ice cream : 
    A small boy can ask for an ice cream from a big man, 
    but it will weird if a big man asks for an ice cream. 
    
    Here, 
        small boy refers to the block code
        big man refers to the global variable


*/



// Example 1 : 
function one(){
    const username = "Rytham"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    

    //  two()                      // calling the funtion
}

// one()                           // calling the funtion





// Example 2 : 
if (true) {
    const username = "Rytham"
    if (username === "Rytham") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);
