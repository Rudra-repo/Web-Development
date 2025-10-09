const { a } = require("framer-motion/client");

fu// We are given an array, which has the radius of 
// different circles, we need to find the area, 
// circumference and diameter for all the radiuses.

let RadiusArr = [2, 4, 8, 10]
function circleArea(r){
  return 3.14*r*r;
}
function circleCircumference(r){
  return 2*3.14*r;
}
function circleDiameter(r){
  return 2*r;
}
function calculateCircleDetails(arr, cb){
  let ans= []
  for(let i = 0; i < arr.length; i++){
    ans.push(cb(arr[i]))
  }
  return ans
}
console.log(calculateCircleDetails(RadiusArr, circleArea))
console.log(calculateCircleDetails(RadiusArr, circleCircumference))
console.log(calculateCircleDetails(RadiusArr, circleDiameter))

/*
// Traditional Way
let RadiusArr = [2, 4, 8, 10]
// calculateArea = []
// calculateCircumference = []
// calculateDiameter => ans =  [4, 8, 16, 20]

function calculateArea(arr){
  let area = []
  for(let i = 0; i < arr.length; i++){
    area.push(3.14 * arr[i] * arr[i])
  }
  return area
}
function calculateCircumference(arr){
  let cir = []
  for(let i = 0; i < arr.length; i++){
    cir.push(2 * 3.14 * arr[i])
  }
  return cir
}
function calculateDiameter(arr){
  let dia = []
  for(let i = 0; i < arr.length; i++){
    dia.push(2* arr[i] )
  }
  return dia
}
console.log(RadiusArr)
console.log(calculateArea(RadiusArr))
console.log(calculateCircumference(RadiusArr))
console.log(calculateDiameter(RadiusArr))

*/


let arr = [1, 2, 3, 4, 5, 6]

function square(ar){
  let ans = []
  for(let i = 0; i < ar.length; i++){
    ans.push(ar[i]*ar[i])
  }
  return ans 
}
console.log(square(arr))

let newArr = arr.map(function(ele, idx){
  console.log(`${ele} is at ${idx}`)
  return ele*ele
})
console.log(newArr)

// Another Way
// let RadiusArr = [2,4,6,8];
// function square(a){
// return a*a;
// }
// let newArr1 = RadiusArr.map(square);
// console.log(newArr1);




// Function that returns all even numbers from an arr

// let arr = [1, 2, 3, 4, 5, 6]

// function evenNumber(ar){
//   let ans = []
//   for(let i = 0; i < ar.length; i++){
//     if(arr[i] % 2 == 0){
//       ans.push(arr[i])
//     }
//   }
//   return ans 
// }
// console.log(evenNumber(arr))


// // Using filter 
// let newArr = arr.filter(function(ele){
//   return (ele%2 == 0)
// })
// let newArr1 = arr.map(function(ele){
//   return (ele%2 == 0)
// })
// console.log(newArr) // [2, 4, 6]
// console.log(newArr1) // [false, true, false, true, false, true]


// output => ['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even']
let newArr2 = arr.map(function(ele){
  if (ele%2 == 0){
    return 'Even'
  }else{
    return 'Odd'
  }
})
console.log(newArr2)


let myArr = [1, 2, 5, 7, 8, 2, 6, 9, 13, 17]
// output => [13, 17]
let ans2 = myArr.filter(function(ele){
  return (ele > 10)
})
console.log(ans2)


// function that return sum of all elements 

let Arr = [1,2,3,4,5]
// ans => 15

function sumOfAllEle(arr1){
  let sum = 0;
  for(let i = 0; i < arr1.length; i++){
    sum += arr1[i]
  }
  return sum
}
console.log(arr)
console.log(sumOfAllEle(arr))

//arr = [1,2,3,4,5]
/*
res = 0
res += 1
res += 2
res += 3
res += 4
res += 5
res = 15


*/
let ans =  arr.reduce(function(res, curr){
  res += curr
  return res 
}, 0)
console.log(ans)

// use Reduce() to find product of all elements 




