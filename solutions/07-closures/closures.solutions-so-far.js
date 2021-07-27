/**
 * This function should return an object with the property "hello".
 * "hello" should be a method (or function) that accepts a string "name" as an argument
 * and returns the string "Hello _____!"
 * @returns {Object}
 * @property {function} hello
 *     @param {string} name
 *     @returns {string} e.g. Hello Twinkle Toes!
 *
 * @example
 * const say = greeter();
 * const greeting = say.hello("Twinkle Toes");
 * console.log(greeting); // Hello Twinkle Toes!
 *
 * (This is technically not a closure. It is here to prepare you for the next problems.)
 */
const greeter = () => {
  return {
    hello: (name) => {
      return `Hello ${name}!`;
    },
  };
};
