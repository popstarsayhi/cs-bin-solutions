// CHALLENGE 1
function createFunction() {
  return function innerFc(){
    console.log("hello")
  } //because of the return, the function is the global variable now 
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function fn(){
    console.log(input)
  }
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

//Uncomment each of these lines one by one.
//Before your do, guess what will be logged from each function call.

/*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();


function addByX(x) {
  return function fn(num){
    console.log(num + x)
  }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  //return func
  let previousResult; //after first run, it is 6
  return input => {
    previousResult = previousResult || func(input); 
    //previousResult is always true, only if not defined, it will run func(input)
    return previousResult;
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);//addbyTwo: function fn(input){return input + 2} 
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counter = 0
  return ()=>{
    counter === count-1? func():counter++
  }
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
console.log(afterCalled()); // => nothing is printed
console.log(afterCalled());// => nothing is printed
console.log(afterCalled());// => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {
  return function delayFunc(...args){
    setTimeout(()=> func(args),wait)
  }
}
const delayFunc = delay((input) => console.log(input), 3000);
delayFunc(1,2,3)

// CHALLENGE 7
function rollCall(names) {
  let counter = 0
  return function fn(){
    if(counter < names.length){
      console.log(names[counter])
      counter++
    }else{
      console.log('Everyone accounted for')
    }
  }

}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  let obj = {}
  return function(input){
    if(input === magicWord){
      return obj
    }else{
      obj[input] = func(input)
      return func(input)
    }
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  
  let counter = 0;
  return function fn(){
    if(++counter <= array.length){
      return array[counter-1]
    }else{
      counter = 1
      return array[0]
    }
  }
  
}
// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  return val => func(arg,val)
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  let obj = {}
  let today = new Date().toISOString().slice(0, 10)
  
  return function(val){
    obj[today] = func(val)
    return obj
  }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 14
function callTimes() {
  let counter = 0
  return function(){
    counter++
    console.log(counter)
  }
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
  
  let counter = 0
  return function(){
    if(counter > num-1) return 'pick a number and play again'
    counter++
    return counter === num? 'win':'spin'
  }
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin', 0
console.log(play()); // => should log 'spin', 1
console.log(play()); // => should log 'win', 2
console.log(play()); // => should log 'pick a number to play again', 3
console.log(play()); // => should log 'pick a number to play again', 4


// CHALLENGE 16
function average() {
  
  const arr = []
  let avg
  
  return function (...args) {
    if(arr.length === 0 && args.length === 0) return 0
    if(args.length === 0) return avg
    arr.push(args[0]);
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    avg = sum / arr.length;
    return avg
  }
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8





