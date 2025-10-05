console.log("Hello World")

var num = 1000
console.log(num)
console.log(typeof num)

var name = "Rudra"
console.log(name)
console.log(typeof name)

var surname = "Bhadouriya"
console.log(surname)

var percentage = 33.33
console.log(percentage)
console.log(typeof percentage)

var isPresent = true
console.log(isPresent)
console.log(typeof isPresent)

let name1 = "Vansh"
console.log(name1)
console.log(typeof name1)

name1 = "Ram"
console.log(name1)

const pi = 3.14
console.log(pi)

// pi = 3.143
// console.log(pi)

let psp
console.log(psp)    // when you didn't define your datatype then it give you undefine as output
console.log(typeof psp)

let result = null
console.log(result)
console.log(typeof result)      // * type of null varaible is object.

let name2 = "Rudra"
let surname1 = " Singh"

name2 = name2+surname1

console.log(name2)

console.log(10+"15")    // it will concatinate 
console.log(10-"15")    // it will give numerical operational output
console.log(10*"15")    // same as arithmetic operation
console.log(10/"15")    // floating point answer.

console.log(10-"apple")    // it will not give numerical value instead give NaN which means Not a Number
console.log('100'-'150')
console.log('a100'-'b150')  // it will not give numerical value instead give NaB which means Not a Number
console.log(typeof 'a100'-'b150')   // same datatype NaN

console.log(true*4)
// true is considered as 1 and false is considered as 0. So, operations will perform according to it.

console.log(false*4)


let marks = 98
if(marks>90){
    console.log("Congratulations")
} else if(marks>33) {
    console.log("pass")
} else{
    console.log("fail")
}

for(let i=1; i<=10; i++){
    console.log(i)
}

let i = 1;
while(i<5){
    console.log(i);
    i++;
}

// reverse a string

let str = "Scaler"
let ans = ""
for(let i = str.length-1; i>=0; i--){
    ans = ans + str[i]
} 
console.log(ans)

