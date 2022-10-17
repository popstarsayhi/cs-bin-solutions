// Challenge 1
function addTwo(num) {
  return num + 2
}
// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word.concat('s')
}
// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let arr = []
  array.map(item=>{
    arr.push(callback(item))
  })
  return arr
}
console.log(map([1, 2, 3], addTwo));
console.log(map([1,2,3,4,5], addTwo))

// Challenge 4
function forEach(array, callback) {
  
  let str = ''
  for(let i =0; i < array.length; i++){
    str += callback(array[i])
  }
  return str
}

function print(char){
  return char
}
// see for yourself if your forEach works!
console.log(forEach(['a', 'b', 'c'], print))

// Challenge 5
function mapWith(array, callback) {
  
  let arr = []
  array.forEach(item =>{
     arr.push(callback(item))
  })
  return arr
}

console.log(mapWith([1,2,3],addTwo))

// Challenge 6
function reduce(array, callback, initialValue) {
  
  let total = 0
  for(let i = 0; i < array.length; i++){
    total = callback(initialValue, array[i])
  }
  
  return total
}

function add(a, b){
  //console.log(a,b)
  return a + b}

console.log(reduce([1,2,3], add, 0))

// Challenge 7
function intersection(arrays) {
  
  let [a, ...rest]=arrays
  rest = rest.map( item => new Set(item))
  return a.filter(item => rest.every( a=>a.has(item)))
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {
   return arrays.reduce((acc,curr)=>{
    let newElement = curr.filter(el=> !acc.includes(el))
    return acc.concat(newElement)
  })

 console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]
  
// Challenge 9
function objOfMatches(array1, array2, callback) {
  
  let obj = {}
  for(let i = 0; i< array1.length; i++){
    if(callback(array1[i]) === array2[i]){
      obj[array1[i]] = array2[i]
    }
  }
  return obj

}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

  
// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  let obj = {}
  for(let i = 0; i < arrVals.length; i++){
    obj[arrVals[i]] = [] //for each key, create a new arrary, and push res into the new array
    for(let j = 0; j < arrCallbacks.length; j++){
      obj[arrVals[i]].push(arrCallbacks[i](arrVals[i]))
    }
  }
  return obj
}

console.log(multiMap(['catfood', 'glue', 'beer'], 
                     [function(str) { return str.toUpperCase(); }, 
                      function(str) { return str[0].toUpperCase() +            str.slice(1).toLowerCase(); }, 
                      function(str) { return str + str; }
                     ]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

  
// Challenge 11
function objectFilter(obj, callback) {
  
  //console.log(Object.keys(obj))
  //console.log(Object.values(obj))
  
  let key = Object.keys(obj)
  let value = Object.values(obj)
  let newObj = {}
  
  for(let i = 0; i < key.length; i++){
    if(key[i].length === value[i].length){
      newObj[key[i]] = value[i]
    }
  }
  return newObj       
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  return callback(array.reduce((a,b)=>a+b,0))
}

// /*** Uncomment these to check your work! ***/
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
  
  let trueArr = []
  let falseArr = []
  array.forEach(item =>{
    if(callback(item)){
      trueArr.push(item)
    }else{
      falseArr.push(item)
    }
  })
  return trueArr.concat(falseArr)
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
// function countBy(array, callback) {
//   let countOdd = 0
//   let countEven = 0
//   array.forEach(item=>{
//     if(callback(item) == 'even'){
//       countEven ++
//     }else if(callback(item) == 'odd'){
//       countOdd ++
//     }else return 0
//   })
//   return {'odd': countOdd, 'even': countEven}
// }
  
    let obj = {}
    array.forEach(item =>{
      let val = callback(item)
      if(obj.hasOwnProperty(val)){
        obj[val] +=1
      }else{
        obj[val] = 1
      }
    })
  return obj
}

// /*** Uncomment these to check your work! ***/
console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';})); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
  let obj ={}
  array.forEach(item => {
    let val = callback(item);
    if (obj.hasOwnProperty(val)) {
      obj[val].push(item);
    } else {
      obj[val] = [item];
    }
  })
  return obj;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


