// function greet(){
//     console.log("Enter you name")
//     return "Rudra";
// }
// console.log("Hello, "+greet())

// let res = greet();
// console.log(`printing output : res`)


function greet(username){
    console.log(`Hello, ${username}`)
}
greet("Rudra")

const ans = function(num1, num2){
    return num1+num2;
}

console.log(40,50);



function greet(username = "guest"){
    console.log(`Hello, ${username}`)
}
greet();
greet("Rudra")



function sum(a,b = 100){
    return (a+b)
}
console.log(sum(50,200))
console.log(sum(50))



function fruitchoice(favfruit){
    let fruit = favfruit.toLowerCase();
    switch(fruit){
        case "apple":
            console.log("Red fruit");
            break;
        case "kiwi":
            console.log("Brown fruit");
            break;
        case "banana":
            console.log("Yellow fruit");
            break;
        case "dragon friut":
            console.log("pink fruit");
            break;
        case "orange":
            console.log("Orange fruit");
            break;
        default:
            console.log("New fruit");
            break;
    }
    
}

fruitchoice('apple')
fruitchoice('Apple')



// Que:
function number(num){
    if(num%3 == 0 && num%5 == 0){
        console.log("fizz-buzz")
    }
    else if(num%5 == 0 ){
        console.log("Buzz")
    }
    else if(num%3 == 0){
        console.log("Fizz")
    } else{
        console.log(num)
    }
}