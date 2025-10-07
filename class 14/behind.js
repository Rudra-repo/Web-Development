let person = {
    name: "Rudra",
    age: 18,
    city: "Bengaluru"
};

console.log(person["age"]);

person.age = 19;
person.country = "India";
console.log(person.age);

delete person.city;
console.log(person);

let car = {
    brand: "Tesla",
    Model: "model 3",
    start: function() {
        console.log("Car Started!")
    }
};                                      // functions inside the objects are called methods.

car.start();

for(let key in person){
    console.log(key+": "+ person[key])
};

let student = {
    name: "Vansh",
    class: 10,
    marks: {
        science: 88,
        maths: 100,
        politics: 92,
    }
};

console.log(student.marks.maths);

Object.keys(person);
Object.values(person);
Object.entries(person);

// Create an object called book with these properties:
// title = "JavaScript Basics"
// author = "Rudra"
// pages = 150
// Then print only the author.

let book = {
    title: "JavaScript Basics",
    author: "Rudra",
    pages: 150,
}

console.log(book.author);

// Add a new property price = 299 to the book object.

book.price = 299;

// Change the pages value to 200.

book.pages = 200;

// Create an object student that has a method called greet() which prints
// "Hello, my name is <student name>".

let student1 = {
    StudentsName: "Akash",
    greet: function(){
        console.log("Hello, my name is "+ student1.StudentsName)
    }
};

student1.greet();

var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)