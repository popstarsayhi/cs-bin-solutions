/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Partnah first


/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(function(){
    console.log("welcome")
  },3000)
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  console.log("hello")
  setTimeout(function(){
    console.log("good bye")
  },3000)
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

