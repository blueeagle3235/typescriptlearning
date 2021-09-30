// https://www.typescriptlang.org/play?noImplicitAny=false&q=256#example/functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

// declare a function
// usually function has name, arrow function can be anonymous

// #region parameters and arguments

// for type checking, type guard, etc..., see more in types

// optional parameter

// default values of parameters

// parameters with spread syntax
// A function definition can have only one ...restParam.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// #endregion

// returns or void

// #region arrow functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// #endregion

// #region callback functions
// callback functions as parameters
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// -- deferred operation use a function parameter
// -- passing predict, search criteria, actions
// -- typed/interface callback, ICompare, IEqual, ...
// -- pub/sub pattern
// -- nested callback before promise and async

function greeting(name: string) {
  console.log("Hello " + name);
}

function processUserInput(name: string, callback: any) {
  // callback can have access to local varibles
  let localVariable: string = ", welcome onboard!";
  callback(name + localVariable);
}

// use named function
processUserInput("user", greeting);
// use anonymous function
processUserInput("user", (c: string) => {
  console.log("Hello! " + c);
});

// #endregion
