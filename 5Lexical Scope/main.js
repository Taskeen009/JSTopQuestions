/*
What is Lexical Scope in JavaScript?

Lexical Scope means that the visibility of variables is determined by the physical location 
(lexical structure) of the code at the time it is written, not by where or how a function is called.


Global
│
├── x
│
└── outer
      │
      ├── y
      │
      └── inner

Inner Scope

↓

Outer Scope

↓

Global Scope

JavaScript is a lexically scoped language, meaning a function's accessible variables are determined by 
where the function is defined in the source code. Each function stores a reference to its outer lexical environment, 
and the engine follows these references through the scope chain to resolve identifiers at runtime.

This lookup path is called the Scope Chain.

JavaScript is lexically scoped, not dynamically scoped.
Variable resolution depends on where a function is defined, not where it is called.

What is Dynamic Scope?
A dynamically scoped language resolves variables by looking at the call stack (who called the function).

*/


let x = 10;

function outer() {

    let y = 20;

    function inner() {
        
        console.log(x);
    }

    inner();
    console.log(y)
}

outer();





// function hello(fn){
//     console.log("bye")
//     //fn();
// }

// hello(printName())

let name = "Alice";
function printName() {
    console.log(name);
}
function execute(fn) {
    let name = "Bob";
    
    fn();
}

execute(printName);

/*
What is a Lexical Environment?
How is a Lexical Environment different from Lexical Scope?
What is the Scope Chain, and how is it built?
How do closures use lexical scope?
What is the difference between lexical scope and dynamic scope?
Does a function's lexical scope ever change after it's created?
How does V8 store the reference to the outer lexical environment?
What happens if multiple nested functions reference the same variable?
How do ES modules use lexical scope?
Can arrow functions change lexical scope, or do they only affect this?
*/