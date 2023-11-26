// let friends = ["Michael", "Jonas", "Jason"];
// console.log(friends);

// friends.push("Gordan");
// console.log(friends);

// const removedFriend = friends.shift();
// console.log(removedFriend);
// console.log(friends);

// console.log(friends.length);

// const person = {
//   firstName: "Dimitar",
//   lastName: "Mitranov",
//   birthYear: 1998,
//   job: "student",
//   friends: ["Koko", "Techo", "Denis"],
//   hasDriversLicense: true,

//   calculateAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   introduction: function () {
//     return `${this.firstName} ${this.lastName} is a ${this.calculateAge()} years old ${this.job} and he ${
//       this.hasDriversLicense ? "has" : "does not have"
//     } a drivers license!`;
//   },
// };

// console.log(person.introduction());

// const myCountry = {
//   country: "Bulgaria",
//   capital: "Sofia",
//   language: "bulgarian",
//   population: 6687717,
//   //   neighbours: neighbours.slice(),

//   describe: function () {
//     return `${this.country} has ${this.population} ${this.language}-speaking people, 3 neighbouring countries and a capital called ${this.capital}`;
//   },
// };

// console.log(myCountry.describe());

// myCountry["checkIsland"] = function () {
//   console.log(this);
// };
// myCountry.checkIsland();

// const person = {
//   fullName: "Dimitar Mitranov",
//   mass: 91,
//   height: 1.8,
//   bmi: this.mass / (this.height * this.height),
//   something: this,

//   callThis: function () {
//     console.log(this);
//   },
// };
// console.log(person.something);
// console.log(person.callThis());

// const rolledDice = Math.floor(Math.random() * 10 + 1);

let rolledDice = rollDice();
while (rolledDice != 6) {
  console.log(`Sorry! You rolled the losing number ${rolledDice} and lose $5! Roll again or die!`);

  rolledDice = rollDice();
}
console.log(`Great job! You rolled the lucky number ${rolledDice} and win $1000000!`);

function rollDice() {
  const randomNumber = Math.random();

  const randomDiceNumber = Math.floor(randomNumber * 10000) + 1;
  return randomDiceNumber;
}
