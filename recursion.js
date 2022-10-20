// Challenge 1
function countdown(n) {
  if(n === 0) return 
  console.log(n)
  return countdown(n-1)
}
// To check if you've completed it, uncomment these console.logs!
countdown(5);
countdown(10);

// Challenge 2
function sum(array) {
  if(array.length === 1) return array[0]
  return array[0] + sum(array.slice(1))
}
// uncomment these to check your work
console.log(sum([1,1,1])); // -> returns 3
console.log(sum([1,2,3,4,5,6])); // -> returns 21

// Challenge 3
function palindrome(string) {
  string = string.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()
  if(string.length < 2) return true //length is odd number
  if(string[0] === string.slice(-1)) 
  return palindrome(string.slice(1,-1))
  return false
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false

//Challenge 5
function pathFinder(obj, arr) {
  //stop until arr length is 1 
  if(arr.length === 1 ) return obj[arr[0]]
  return pathFinder(obj[arr[0]],arr.slice(1))
}
const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"

//Challenge 6
function flattenRecursively(arr) {
  let newArr = []
  //stop until arr type is a number
  arr.forEach(item=>{
    if(Array.isArray(item)){
      newArr.push(...flattenRecursively(item))
    }else{
      newArr.push(item)
    }
  })
  return newArr
}
console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

//Challenge 7
function findInOrderedSet(arr, target) {
   if(arr.length < 2) return false
   if(arr[0] === target) return true
   return findInOrderedSet(arr.slice(1), target) 
}
const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false

//Challenge 8
function countWaysToReachNthStair(n) {
  if(n === 1) return 1
  if(n === 2) return 2 
  return countWaysToReachNthStair(n-1) + countWaysToReachNthStair(n-2)
}
console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(3)) //-> 3
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (1,2,1),(2, 2))

//Challenge 10
function getRangeBetween(x, y) {
  if(y- x === 2){
    return [x+1]
  }else{
    let list = getRangeBetween(x, y-1)
    list.push(y-1)
    return list
  }
}
console.log(getRangeBetween(1, 3)) // [2]
console.log(getRangeBetween(1, 4)) // [2,3]
console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]



