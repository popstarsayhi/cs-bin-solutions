// /* ========== *
// * Challenge 1 *
// * =========== */

// //Uncomment the lines below to test your code
console.log(typeof 7.0 === "number")
console.log(typeof 22 === "number")
console.log(typeof true === "boolean")

var myVar;
console.log(typeof myVar === "undefined")
myVar = 'popstart'//add your name here
console.log(typeof myVar === "string")

/* ========== *
* Challenge 2 *
* =========== */

function buildSentence(word1, word2, word3) {
  console.log(word1 + " " + word2 + " " + word3)
  console.log(word1.concat(" ", word2, " ",word2))
}

buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
buildSentence("we're", "number", "1") //=> "We're number 1."

/* ========== *
* Challenge 3 *
* =========== */

function lastLetter(word) {
  var arr = word.split("")
  console.log(arr[arr.length-1])
}

//Uncomment the lines below to test your code
lastLetter("hello") //=> "o"
lastLetter("goodbye!") //=> "!"
lastLetter("ZeltoiD") //=> "D"

/* ========== *
* Challenge 4 *
* =========== */

function buildGreeting(time, name) {
  if(time > 0 & time <=11){
    console.log("Good Morning, " + name)
  }else if(time >=12 & time <=16){
    console.log("Good Afternoon, " + name)
  }else if(time >= 17 & time <= 23){
    console.log("Good Evening, " + name)
  }else{
    console.log("That's not a real time, " + name + 
                "Maybe you need some sleep")
  }

}

buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
buildGreeting(12, "John") //=> "Good Afternoon, John!"
buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"


/* ========== *
* Challenge 5 *
* =========== */

function indexOf(word, char){
  return word.indexOf(char)
}

console.log( indexOf("CodeSmith", "o")  )
console.log( indexOf("hello", "ll") )
console.log( indexOf("zebra", "z") )
console.log( indexOf("banana", "B") )

/* ========== *
* Challenge 6 *
* =========== */

function letterExists(word, letter) {
  //your code goes here...
  let arr = word.split("")
  let flag = true
  
  for(let el of arr){
    if(el === letter){
      console.log(flag)
      flag = false
      return
    }
  }
   console.log(!flag)
}

letterExists("superman", "e") //=> true
letterExists("starship", "S") //=> false
letterExists("th1s", "1") //=> true
letterExists("he!lo", "!") //=> true

/* =========== *
* Challenge 7 *
* ============ */

function isPrime(number) {
  
  let flag = true
  
  if(number === 1){
    console.log(!flag)
  }else if(number > 1){
    for(let i = 2; i <= number/2; i++){
      if(number % i === 0){
        console.log(!flag)
        return 
      }
    }
    if(flag){console.log(flag)}else{console.log(!flag)}
  }else {console.log(!flag)}

}

isPrime(-7); // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false

/* ========== *
* Challenge 8 *
* =========== */

function range(start, end) {
  
  if(start < end){
    for(let i = start; i <= end; i++){
      console.log(i)
    }
  }else if(start > end){
    for(let i = start; i >=end; i--){
      console.log(i)
    }
  }else console.log(start)
}

//Uncomment the lines below to test your code
range(1,4) //=> 1, 2, 3, 4
range(4,2) //=>4,3,2

/* =========== *
* Challenge 9 *
* ============ */

function myIndexOf(array, ele){
  for(let i = 0; i < array.length; i++){
    if(array[i] === ele){
      console.log(i)
      return
    }
  }
  console.log(-1)
}

myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
myIndexOf(["a", "b", "c"], "a") //=> 0
myIndexOf(["a", "b", "c"], "d") //=> -1

/* =========== *
* Challenge 10 *
* ============ */

function unique(array) {
  //your code goes here...
  console.log([...new Set(array)])

}

unique([1, 1, 2, 3, 3]) //=> [1, 2, 3]
unique(["a", "a", "c", "aa", "b", "b"]) //=> ["a", "c", "aa", "b"]

/* =========== *
* Challenge 11 *
* ============ */

function longestWord(sentence) {
  let arr = sentence.split(" ")
  //console.log(arr)
  
  let max = 0
  let str = ''
  for(let i = 0; i < arr.length; i++){
    if(max < arr[i].length){
       max = arr[i].length
       str = arr[i]
    }
   }
  
  return str
}

//Uncomment the lines below to test your function:
console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('JavaScript')); // => 'JavaScript'
console.log(longestWord('')); // => ''

/* =========== *
* Challenge 12 *
* ============ */

function disemvowel(string) {
  
  return string.match(/[^aeiou]+/gi).join('')
  
}

//Uncomment the lines below to test your function:

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'



