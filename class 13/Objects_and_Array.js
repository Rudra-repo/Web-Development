let arr = ["Rudra",25, 46, 76, 34, false]

console.log(arr);

console.log(arr.indexOf(25));
console.log(arr.indexOf(false));

console.log(arr.includes(25));
console.log(arr.includes(true));

let healthyFood = ['salad','fruits','sprouts','vegetables']
let junkFood = ['Burger','soft Drinks', 'pizza']

let food = healthyFood.concat(junkFood)
console.log(food);

let sentence = "My name is Rudra";
let wordsArray = sentence.split(" ");
console.log(wordsArray);
console.log(wordsArray.reverse())


let str = "Hello"
let splitArray = str.split("")
console.log(splitArray)
console.log(splitArray.join(''))
console.log(splitArray.join(' '))
console.log(splitArray.join())

let countryDetails = [['India',28],['USA', 52],['Poland', 37]];
console.log(countryDetails);
console.log(countryDetails.length);
console.log(countryDetails[2]);
console.log(countryDetails[1][1]);
console.log(countryDetails[2].length);

let fruits = ["apple","banana", "kiwi"]
console.log(fruits.splice(1,1));
console.log(fruits);
console.log(fruits.splice(1,0,"peach","grapes"));
console.log(fruits);
console.log(fruits.splice(2,2,"guava","orange"));
console.log(fruits);


let arr1 = [10,20,30,40,50,60,70]

let newArr = arr1.slice(2,5);
console.log(newArr);

let newArr2 = arr1.slice(1,6);
console.log(newArr2);

let newArr3 = arr1.slice(-2);
console.log(newArr3);

