/*
What is a Closure in JavaScript?
A closure is a function that retains access to its lexical environment even after
the outer function has finished executing.

Or even more precisely:
A closure consists of a function along with the references to the lexical environment
in which that function was created.

Why is it Called a Closure?
Because
The function is closed over its surrounding lexical environment.
It carries that environment with it.


Real-World Uses of Closures
Data encapsulation / private state
Factory functions
Memoization
Function currying
Event handlers
Timers (setTimeout, setInterval)
Module pattern
React Hooks (state captured by closures)
Middleware (Express, Redux)
Debounce and throttle implementations


A closure is not just a nested function.
It is a function that retains a live reference to the lexical environment
in which it was created. The JavaScript engine preserves that lexical
environment on the heap as long as the function remains reachable,
allowing the function to access variables even after the 
outer execution context has completed.


*/

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const fn = outer();
console.log(fn)
fn();


function outer1() {

    let x = 10;
    //x++;
    return function () {
        console.log(x++);
    };

}

console.log(outer1())
const f=outer1();
console.log(f)
f()
f()



function outer2() {

    let x = 15;

    return {

        inc() {
            x++;
        },

        print() {
            console.log(x);
        }

    };

}

const obj = outer2();

obj.inc();

obj.print();



function BankAccount(balance) {

    return {

        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }

    };

}

const account = BankAccount(1000);

account.deposit(500);

console.log(account.getBalance());


function setupButton() {

    let clicks = 0;

    const button = typeof document !== "undefined"
        ? document.querySelector("button")
        : null;

    if (button) {
        button.addEventListener("click", () => {
            clicks++;
            console.log(clicks);
        });
        return button;
    }

    // Fallback for non-browser environments like Node.js
    return {
        click() {
            clicks++;
            console.log(clicks);
        }
    };
}

const f1 = setupButton();
console.log(f1);



function demo() {

    let msg = "Hello";
    
    setTimeout(() => {
        //msg="ko"
        console.log(msg);
    }, 2000);

}

demo();


/*
After explaining closures, interviewers commonly ask:
Why isn't the outer lexical environment garbage collected?
Do closures copy variables or keep references?
How are closures implemented inside the V8 engine?
Why does let fix the setTimeout loop problem?
Can closures cause memory leaks?
How does garbage collection interact with closures?
What's the difference between a closure and a lexical environment?
How do React Hooks rely on closures?
How can closures be used to implement private variables?
What's the difference between closures and object-oriented encapsulation?
*/