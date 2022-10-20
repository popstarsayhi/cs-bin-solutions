// Challenge 1
function sayHello() {
  setTimeout(()=>console.log("hello"),1000)
}
// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

// Challenge 2
var promise = new Promise(function (resolve, reject) {
  setTimeout(()=>resolve("Resolved"),1000)
}).then((res)=>console.log(res))
// Should print out "Resolved!"
// ADD CODE HERE

// Challenge 3
let promise = new Promise(function(resolve, reject) {
  reject("Reject!")
}).catch(error => console.log(error))
// Should print out "Reject!"
// ADD CODE HERE


// Challenge 4
let promise = new Promise(function (resolve, reject) {
  resolve("Promise has been resolved!")
});
// Uncomment the lines below when ready
promise.then((res) => console.log(res));
console.log("I'm not the promise!");

// Challenge 5
function delay(){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve)
  })
}
// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);

// Challenge 6
//chain promise together using ".then"
let secondPromise = new Promise((resolve, resject) => {
  resolve("Second!");
});
let firstPromise = new Promise((resolve, resject) => {
  resolve(secondPromise);
});

firstPromise.then(res=>{
  console.log(res)
  return secondPromise
}).then(res=>{
  console.log(res)
})

// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  let p1 = fakeAPICall(0)
  let p2 = fakeAPICall(1)
  let p3 = fakeAPICall(2)
  
  return Promise.all([p1,p2,p3])
}
getAllData().then(res =>{console.log(res)})
