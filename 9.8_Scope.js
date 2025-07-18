/*

- scope is denoted by {} in almost every prog lang
- They are used in funtions, if-else etc
- but in object, they are just for object declaring (they don't act as scope there)

- 2 types of scopes : Global scope and Block scope




*/


let rytham = 5;             // Everything outside {} is Global Scope

if(true){               // Everything inside {} is block scope

    let a=5;
    const b= 6;
    var c=2;

}

console.log(a);            // This will not print
console.log(b);            // This will not print
console.log(c);            // This will print


/*

- That is the reason we don't use var to declare variables
- Saala yeh block scope ke andar vi declare hoke, baahar iski value aajati
- Block scope ki values bahar nahi aani chahiye (important) yehi kahani hai scope ki


Note : Global scope act different in (VS code environment under node) and different in (browser ke console pe). This is asked in interviews. 

*/









// ++++++++++++++++++ interesting ++++++++++++++++++


