function myName() {
  // Create a variable called myName
  const myName = "Justin";
  return myName;
}

function setTeachersNames(teachersName) {
  let teachers = null; // Change this line only
  teachers = teachersName; //  <- this is invalid because teachers is a const

  return teachers;
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum = a + b;

  return sum;
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  age++;
  return age;
}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  age--;
  return age;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  let int = parseInt(str);
  return int;
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  let characterPosition = name.indexOf(letter);
  return characterPosition;
}

/** Take the argument and return the length of the argument */

function stringLength(str) {
  let strLength = str.length;

  return strLength;
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  let lastCharacter = str[str.length -1];

  return lastCharacter;
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  let space = (place.indexOf(" "))+1;
  let newPlace = place.substring(space);

  return newPlace;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first argument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
  let oldName = fullName.substring((fullName.indexOf(" "))+1);
  let newFullName = fullName.replace(oldName, newLastName);
  return newFullName;
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(fullName) {
  let space = fullName.indexOf(" ");
  const firstName = fullName.substring(0,(space));
  let lastName = fullName.substring((space+1));
  let firstLetterLastName = lastName.substring(0,1);
  firstLetterLastName = firstLetterLastName.toUpperCase();
  let restOfLast = lastName.substring(1);
  lastName = firstLetterLastName + restOfLast;

  let capitalizeLastName = firstName + " " + lastName;

  return capitalizeLastName;
}

/**
 * Ignore me. This is for the tests
 */

export {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  replaceLastName,
  capitalizeLastName,
};
