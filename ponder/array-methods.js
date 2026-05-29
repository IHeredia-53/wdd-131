// 1. Javascript arrays
let names = ["Dabes", "Drew", "Dylan", "Derrick"];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[names.length - 1]);

let ages = [8,6,25,3];
let mixArray = ["Dabes", 8, "Drew", 6, "Dylan", 25, "Derrick", 3];
console.log(mixArray);

// 2. Javascript objects
let studentName = "Bob";
let studentClass = "WDD131";

//literal objects
let student = {
    //key/value pairs
    name: "Bob",
    class: "WDD131",
    grade: "A",
    age: 27
};

console.log(student);
console.log(student.name);
console.log(student.class);
console.log(student.grade);
console.log(student.age);

// 3. Array methods
names.forEach((name) => {
    // this code executes once per each item in the array
    console.log(name);
})

// Map function returns a NEW array with values returned from the function
let newNameArray = names.map((name) => {
    return name + " is a student in WDD131";
});
console.log(newNameArray);

// Filter function returns a new array with filtered values
let filteredArray = names.filter((name) => {
    // filter returns boolean. True keep, false don't keep
    return name.includes("D"); // keeps names that include the letter D
});
console.log(filteredArray);

const numbers = [125, 20, 5];

document.getElementById("output").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");

const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${stars}</p>
  </div>
`;

document.getElementById("movie-list").innerHTML += movieSummary;

const car = {type:"Fiat", model:"500", color:"white"};