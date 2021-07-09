/***
 * Change below so that it will also compare data types.
 * ```javascript
 * compareEquality(50, 50); // should return "Equal"
 * compareEquality(50, "50"); // should return "Not Equal"
 * ```
 */
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 * ```javascript
 * testStrictNotEqual(17, 17) // should return "Equal"
 * testStrictNotEqual("17", 17) // should return "Not Equal"
 * testStrictNotEqual(12, "bob") // should return "Not Equal"
 * ```
 *
 */

function testStrictNotEqual(a, b) {
  // Only Change Code Below this Line
  if (a!==b) {
    // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

/**
 * Given a number "age", return whether or not someone is a teenager
 * This is someone who is between 13 and 19 years old.
 * Use the logical && operator
 */
function isTeenager(age) {
  if(age < 20 && age > 12){
    return true;
  }
  else{return false;}
}

/**
 * "stringOrNumber" should be true if stringOrNumber is:
 * - a number
 * - a string with numeric characters only (e.g. "5", "1.25", "-4")
 * Use the logical || operator
 * Hint: See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
function isNumeric(stringOrNumber) {
if(isNaN(stringOrNumber) || false){
  return false;
}
else{return true;} 
}

/***
 *  Using conditional logic compare both arguments and return the largest argument
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber = undefined;
  if(arg1 < arg2){
    largestNumber = arg2;
  }
  else{largestNumber = arg1;}
  return largestNumber;
}

/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
  let rValue = undefined;
  if(isEven % 2 == 0){
    rValue = "Even";}
  else{rValue = "Odd";}
  return rValue; // return something here
}

/****
 *  You are given a variable num:
 *  Your task is to print:
- ONE, if num is equal to  1.
- TWO, if num is equal to  2.
- THREE,if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num is equal to 5.
- SIX,  if num is equal to 6.
- SEVEN,if num is equal to 7.
- EIGHT,if num is equal to 8.
- NINE, if num is equal to 9.
 * 
 * PLEASE TRY AGAIN, if  is none of the above
 * 
 *  *****/

function caseInSwitch(num) {
  let rValue = undefined;
  switch(num){
    case 1:
      rValue = "ONE";
      break;
    case 2:
      rValue ="TWO";
      break;
    case 3:
      rValue = "THREE";
      break;
    case 4:
      rValue ="FOUR";
      break;
    case 5:
      rValue = "FIVE";
      break;
    case 6:
      rValue = "SIX";
      break;
    case 7:
      rValue = "SEVEN";
      break;
    case 8:
      rValue = "EIGHT";
      break;
    case 9:
      rValue = "NINE";
      break;
    default:
      rValue = "PLEASE TRY AGAIN";
  }
  return rValue;
}

export {
  isEvenOrOdd,
  compareEquality,
  testStrictNotEqual,
  isTeenager,
  isNumeric,
  getLargerNumber,
  caseInSwitch,
};
