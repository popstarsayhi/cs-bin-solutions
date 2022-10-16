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


/* =========== *
* Challenge 13 *
* ============ */

function divisibleByFivePairSum(array){
  //return index of element which adding together is a multiple of 5 
  let arr = []
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if((array[i] + array[j]) % 5 === 0){
        arr.push([i, j])
      }
    }
  }
  return arr
  
}


//Uncomment the lines below to test your function:

console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]


/* =========== *
* Challenge 14 *
* ============ */

function highestScore(students) {
  
  let maxScore = 0
  let initial = ''
  let id = 0
  for(let i = 0; i < students.length; i++){
    if(maxScore < students[i].score){
       maxScore = students[i].score
       initial = getInitials(students[i].name)
       id = students[i].id
    }
  }
  return initial+id
  
}

function getInitials(name){
  
  let initial = name.split(' ').map((el,index,array)=>{
    if(index == 0 || index == array.length-1){
    return el[0]
    }
  }).join('')
  
  return initial
}

//Uncomment the lines below to test your function:

var students = [
{name: 'Will Sentance', id: 128, score: -42},
{name: 'Jamie Bradshaw', id: 32, score: 57},
{name: 'Lisa Simpson', id: 2, score: 99},
{name: 'Luke Skywalker', id: 256, score: 94}
];

console.log(highestScore(students)); //=> 'LS2'


/* =========== *
* Challenge 15 *
* ============ */

function leastCommonMultiple(num1, num2) {
  return num1 * num2 / getGcd(num1, num2);
}

  //get the most common divisor 
function getGcd(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    if (max % min === 0) {
        return min;
    } else {
        return getGcd(max % min, min);
    }
}
  
//Uncomment the lines below to test your function:

console.log(leastCommonMultiple(2, 3)); //=> 6
console.log(leastCommonMultiple(6, 10)); //=> 30
console.log(leastCommonMultiple(24, 26)); //=> 312


/* ========== *
* Extension 1 *
* =========== */

function arrayBuilder(count) {
  //console.log(count)
  let arr = []
  for(let item in count){
    //console.log(count[item])
    for(let i = 0; i < count[item]; i++){
      arr.push(item)
    }
  }
  return arr
  
}


//Uncomment the lines below to test your function:

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []



/* ========== *
* Extension 2 *
* =========== */

function objectBuilder(count) {
  
  let obj = {}
  
    for(let i = 0; i <= count; i++){
      obj[i] = i*5
  }
  
  return obj

}


//Uncomment the lines below to test your function:

console.log(objectBuilder(4)); 
//=> {
  // 0: 0,
  // 1: 5,
  // 2: 10,
  // 3: 15,
  // 4: 20,
//}
console.log(objectBuilder(0)); //=> { 0: 0 }


/* ========== *
* Extension 3 *
* =========== */

function secretCipher(sentence, cipher){
  
  //console.log(Object.keys(cipher))
  // /?/ is not valid, need to write as \/?/
 //  let re = new RegExp(Object.keys(cipher).join("|"),"gi");
  
//   return sentence.replace(re, function(key){
//       return cipher[key.toLowerCase()];
//     });
  
  let arr1 = Object.keys(cipher)
  let arr2 = Object.values(cipher)
  let str = sentence
  
  for(let i = 0; i < arr1.length; i++){
    str = sentence.replaceAll(arr1[i], arr2[i])
  }
  
  return str

}

//Uncomment the lines below to test your function:

console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"


/* ========== *
* Extension 4 *
* =========== */

function passingStudents(students) {
  
  //console.log(students[0].grades[0].score)
  
  let arr = []
  
  students.forEach(item =>{
    //console.log(item.grades)
    for(let i = 0; i < item.grades.length; i++){
      //console.log(item.grades[i].score)
      if(item.grades[i].score >= 70){
        arr.push(item.name)
      }
    }
  })
  
  return [...new Set(arr)]
  
}


//Uncomment the lines below to test your function:

var students = [
  {
    "name": "Marco",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Donna",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Jukay",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]


