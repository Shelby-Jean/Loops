// Complete each of the following exercises.
// Use a do...while loop to console.log the numbers from 1 to 1000.
let i = 1;
do {
  console.log(i++)
} while(i <= 1000);

// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
for (let x in person) {
  if (x === 'birthDate' && parseInt(person[x].slice(person[x].length - 4)) % 2 !== 0) {
    console.log(person[x]);
  }
}

// Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
let arrayOfPersons = [
  {  
    firstName: "John",
    lastName: "Doe",
    birthDate: "Jan 1, 1980",
    gender: "male"
  },
  {  
    firstName: "Gary",
    lastName: "Smith",
    birthDate: "Feb 1, 1990",
    gender: "male"
  },
  {  
    firstName: "Molly",
    lastName: "Johnson",
    birthDate: "Mar 5, 2000",
    gender: "female"
  }
]

// Use .map() to map over the arrayOfPersons and console.log() their information.
arrayOfPersons.map(x => console.log(x));

// Use .filter() to filter the persons array and console.log only males in the array.
console.log(arrayOfPersons.filter(x => x.gender === "male"));

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
console.log(arrayOfPersons.filter(x => parseInt(x.birthDate.slice(x.birthDate.length - 4)) < 1990));