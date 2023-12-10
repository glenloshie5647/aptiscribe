/* 
Filename: complexCode.js
Content: This code is a complex JavaScript program that demonstrates advanced concepts and techniques.
*/

// Class definition for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class definition for a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}`);
  }
}

// Function to calculate n factorial recursively
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Function to find the maximum value in an array
function findMax(array) {
  let max = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  return max;
}

// Custom function to format a number with commas
function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Create an array of books
const books = [
  new Book("JavaScript: The Good Parts", "Douglas Crockford", 2008),
  new Book("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", 2008),
  new Book("Eloquent JavaScript: A Modern Introduction to Programming", "Marijn Haverbeke", 2011)
];

// Loop through all books and display their info
books.forEach(book => {
  book.getInfo();
  console.log("------------------");
});

// Create a new Person object
const john = new Person("John Doe", 25);

// Call the greet method of the Person object
john.greet();

// Calculate the factorial of 5
const factorial = calculateFactorial(5);
console.log(`Factorial of 5: ${factorial}`);

// Find the maximum value in an array of numbers
const numbers = [10, 5, 20, 15, 30];
const maxNumber = findMax(numbers);
console.log(`Maximum number: ${maxNumber}`);

// Format a number with commas
const numberWithCommas = formatNumberWithCommas(1000000);
console.log(`Number with commas: ${numberWithCommas}`);

// ... more complex code and logic beyond this point.