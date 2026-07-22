/*
What is Hoisting in JavaScript?
Hoisting is the behavior where JavaScript creates bindings for
declarations during the Memory Creation Phase of an Execution Context before the code starts executing.


Whenever JavaScript executes any code, it creates an Execution Context.
Every Execution Context executes in two phases.
Execution Context

↓

1. Memory Creation Phase

↓

2. Execution Phase


1)Phase 1 — Memory Creation Phase
Before executing even the first line,
JavaScript scans the entire scope.
It allocates memory for:
Variables
Functions
Classes

Memory
a --------> undefined
hello ----> function object

2)Phase 2 — Execution Phase
The binding for a is created during the Memory Creation Phase and initialized to undefined.


Hoisting allows:

Calling function declarations before their definition.
Building the scope before execution starts.
Resolving identifiers efficiently through the scope chain.


*/
hello()
let hello=()=>{
    console.log("jello")
}
