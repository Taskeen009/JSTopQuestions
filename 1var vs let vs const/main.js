/*
Explain the difference between var, let, and const. Why was let and const introduced in ES6?
------------------

1)Before ES6 (ECMAScript 2015), JavaScript only had var
As applications became larger, var caused bugs because:

No block scope
Variables could be redeclared
Accidental overwrites
Bugs due to hoisting
Loop closure issues
Difficult to reason about variable lifetime


To solve these issues, ES6 introduced lexical declarations:
let
const

2)A var declaration belongs to the nearest function, not the nearest block.



The Temporal Dead Zone (TDZ) is the period between:

when a let or const variable is created in memory, and
when its declaration is executed.

3)What is Hoisting
Hoisting is JavaScript's behavior of processing declarations before the code is executed.

4)"Are let and const hoisted?"

A strong answer is:

"Yes. var, let, and const are all hoisted during the memory creation phase. 
The difference is that var is initialized with undefined, 
whereas let and const are created but remain uninitialized in the Temporal Dead Zone
 until execution reaches their declaration."

5)Temporal Dead Zone (TDZ) is the time between when a let or const variable is created in memory and
when its declaration is executed.

During this time:

✅ The variable exists.
❌ You cannot access it.
If you try, you get a ReferenceError.

The Temporal Dead Zone is the period between the creation of a let or const binding 
during the memory creation phase and its initialization when execution reaches the declaration.
 During this period, the variable exists in its lexical environment but cannot be accessed, 
 and any access results in a ReferenceError


*/

console.log(a);
var a=90;


// for this we will get error for let tdz is created
console.log(b)
let b=90;



//Every {} creates a Lexical Environment. After the block ends, that lexical environment becomes inaccessible.
if (true) {
    let x = 10;
}

console.log(x);


/*

both down will have differet output

for VAR
                Global LE

             +----------+
             | i = 5    |
             +----------+
                ▲
      ┌─────────┼─────────┐
      │         │         │
 Callback1  Callback2  Callback3...

for LET

Callback1 ---> LE1 ---> i = 0

Callback2 ---> LE2 ---> i = 1

Callback3 ---> LE3 ---> i = 2

Callback4 ---> LE4 ---> i = 3

Callback5 ---> LE5 ---> i = 4


"A for loop with let creates a new lexical environment for each iteration. 
Each iteration gets its own binding of i, and each callback closes over that specific lexical environment.
 With var, there is only one binding of i in the surrounding function/global scope, 
 so every callback reads the same final value after the loop completes."
*/
for(var i=0;i<5;i++){

    setTimeout(()=>{
        console.log(i);
    });

}


for(let i=0;i<5;i++){

    setTimeout(()=>{
        console.log(i);
    });

}




/*
What exactly is hoisting?
What is the Temporal Dead Zone, and why does it exist?
What is a Lexical Environment?
What is an Execution Context?
Why does let create a new binding in every for loop iteration?
Explain closure using var vs let.
Why are let and const called lexical declarations?
What's the difference between the Variable Environment and the Lexical Environment?
Why do let and const not become properties of window?
How does the V8 engine optimize block-scoped variables?
*/
