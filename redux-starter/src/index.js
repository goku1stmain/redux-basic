import { compose, pipe } from "lodash/fp";
const input = " javascript ";
const trim = (str) => str.trim();
const lower = (str) => str.toLowerCase();
const output = (str) => `<div>${str}</div>`;

// composing and pipe
const result = output(lower(trim(input))); // in this three functions are stacked one upon the other to overcome this problem we use something called has compose and pipe
console.log(result);
const result1 = compose(output, lower, trim); // this follow right to left convention
// just to make it better we can use pipe which is left to right conventions
console.log(result1(input));
const result2 = pipe(trim, lower, output);
console.log(result2(input));

// currying a function
function add1(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add1(1)(2)); // this is called concept of currying

//pure functions
// generally pure functions means passing same args and returning the same value
// in pure functions
// cannot use random values
// no current date/ time
//no global state
