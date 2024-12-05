# JavaScript 'this' Keyword Bug

This repository demonstrates a common source of confusion in JavaScript: the behavior of the `this` keyword.  The `this` keyword's value depends on how the function is called (not where it's defined). This can lead to unexpected results if not handled carefully.

## Bug Description

The provided JavaScript code defines a function `myFunc` that logs the value of `this`.  The behavior of the code is non-obvious and can differ based on how you call the function.  The goal is to understand how the value of `this` changes based on the context.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment (e.g., a browser's console, Node.js).
4. Observe the output.
5. Refer to `bugSolution.js` to understand how `this` can be explicitly bound for predictable results.

## Solution

The solution involves using techniques like `bind()`, `call()`, or `apply()` to explicitly set the value of `this` within the function, ensuring consistent and predictable behavior.