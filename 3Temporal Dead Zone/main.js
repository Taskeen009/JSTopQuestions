/*
Whenever JS enters a block containing let or const, it creates a new Lexical Environment.

What is the Temporal Dead Zone (TDZ)? Why does it exist?
The Temporal Dead Zone (TDZ) is the period between the creation of a lexical binding during 
the Memory Creation Phase and its initialization during the Execution Phase. During this period, 
the binding exists but cannot be accessed.

Execution Context

↓

Memory Creation Phase

↓

Execution Phase


The TDZ is a time interval, not a physical memory location.
That's why it's called Temporal.

Why does JavaScript throw ReferenceError?
The variable does exist.
It simply hasn't been initialized.


*/
let t = 90;

if (true) {
    let t = 804;
}
//console.log(t)

/*
A scope chain is the chain of lexical environments that JavaScript follows to resolve variable names.
Each lexical environment has a reference to its outer lexical environment, and 
JavaScript searches from the current scope outward until it finds the variable or reaches the global scope.
*/

let a = 10;

{
    let b = 20;

    {
        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }
}


/*
Why does let use the Lexical Environment while var uses the Variable Environment?
What exactly is a Lexical Binding?
Why does shadowing cause a ReferenceError in the TDZ?
How does the scope chain interact with TDZ?
Does TDZ apply to function declarations? Why or why not?
Why do classes also have a TDZ?
Can a variable be hoisted without being initialized?
Why is the error specifically a ReferenceError instead of a TypeError?
Is TDZ checked at compile time or at runtime?
How does the JavaScript engine (such as V8) internally track whether a lexical binding has been initialized?
*/