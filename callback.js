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

