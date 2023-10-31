function memoize(func) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

const cachedFunction = memoize(someExpensiveFunction);


function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10



function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error));
}

function processData(data) {
    // Use data here
}

fetchData('https://example.com/data', processData);


const myModule = (function() {
    let privateVar = 0;

    function privateFunction() {
        return privateVar++;
    }

    return {
        increment: () => privateFunction(),
        getVar: () => privateVar
    };
})();

myModule.increment();
console.log(myModule.getVar()); // 1


function createCounter() {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count
    };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1


function outerFunction() {
    // This is the outer function
    const outerVar = "I'm from the outer function";

    function innerFunction() {
        // This is the inner function (nested function)
        const innerVar = "I'm from the inner function";
        console.log(outerVar); // Accessing outerVar from the outer function
        console.log(innerVar); // Accessing innerVar from the inner function
    }

    innerFunction(); // Call the inner function
}

outerFunction(); // Call the outer function


function exampleFunction() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible and prints "I am a local variable"
}

exampleFunction();

console.log(localVar); // Error: localVar is not defined


const add = function(a, b) {
    return a + b;
}

// You can call the function like this:
const result = add(3, 4); // result will be 7


function greet(name) {
    console.log(`Hello, ${name}!`);
}

// You can call the function like this:
greet('John'); // Outputs: "Hello, John!"


// Define the outer function
function outerFunction(outerVar) {
    // This is the outer function
    console.log("Outer function is executing with outerVar =", outerVar);

    // Define and return the inner function
    return function innerFunction(innerVar) {
        // This is the inner function, which forms a closure
        console.log("Inner function is executing with innerVar =", innerVar);

        // The inner function can access both innerVar and outerVar
        return outerVar + innerVar;
    };    
}    

// Create a closure by calling outerFunction with an argument
const closure = outerFunction(10);

// At this point, the outer function has finished executing, but the closure retains access to outerVar

// Call the closure with an argument for innerVar
console.log(closure(5)); // This outputs 15


