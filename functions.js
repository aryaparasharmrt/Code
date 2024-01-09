// JavaScript Functions:

// 1. Function Declaration: Simple JavaScript function  
function myFunction() {
  return "Hello"
}

// 2. Function Expressions: These are the function which can be assigned to variable
const myFunction = function() {
  return "Hello"
};

// 3. Arrow Functions: Functions with arrows
const myFunction = () => {
  return "Hello"
};

// 4. Anonymouns Functions: Those function which do not have any name.
const myFunction = function() {

  return "Hello, World"
}

// 5. Recursive Functions: A function that calls itself during its execution.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// 6. Callback Functions: A function that is passed as an argument to another function and intended to be called when a specific event occurs.
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(function() {
    const data = "Hello, world!";
    callback(data); // Calling the provided callback funvtion with data)
  }, 1000);
}

function handleData(data) {
  console.log("Received data:", data);
}

// Calling fetchData
fetchData(handleData);













