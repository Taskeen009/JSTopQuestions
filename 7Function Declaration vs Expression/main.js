/*
What is the difference between a Function Declaration and a Function Expression?

A function declaration defines a named function directly.
function add(a, b) {
    return a + b;
}
add is the function name.
The function is created during the Memory Creation Phase.



Function Expression
A function expression creates a function and assigns it to a variable.
const add = function(a, b) {
    return a + b;
};

The function itself is anonymous (although it can also be named).
add is a variable that references the function object.


Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Executed");
})();
Historically used to create private scopes before ES6 introduced block scope.



Higher-Order Function Example
function execute(fn) {
    fn();
}
execute(function() {
    console.log("Hello");
});
The function is created as a value and passed like any other object.
This is only possible because JavaScript has first-class functions.


Avoid relying on function declarations inside blocks for cross-environment behavior. Prefer:



A function declaration creates a function binding that is initialized 
with the function object during the memory creation phase,
making it callable before its declaration.
A function expression, on the other hand, is treated as a variable assignment,
so its availability depends on the hoisting and initialization behavior of the 
variable (var, let, or const) to which it is assigned.

*/










/*
Why are function declarations fully hoisted?
Why do function expressions depend on variable hoisting?
What is a Named Function Expression, and why is it useful?
Explain IIFE and why it was popular before ES6.
Why are function expressions commonly used as callbacks?
What are first-class functions, and how do they relate to function expressions?
How do closures interact with function expressions?
What's the difference between a function declaration, function expression, and an arrow function?
Why does var produce a TypeError, while let produces a ReferenceError?
How does the V8 engine represent function objects during the memory creation phase?
*/