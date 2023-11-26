// Assignment Number #01
separation();
// ----------------------------------------------------------------------------------------------------
const describeCountry = (country, population, capitalCity) =>
  `${country} has ${(population / 1000000).toFixed(2)} million people and its capital city is ${capitalCity}`;
console.log(describeCountry("Bulgaria", 6687717, "Sofia"));
console.log(describeCountry("Germany", 83190556, "Berlin"));
console.log(describeCountry("America", 333290000, "Washington D.C."));

//Assignment Number #02
separation();
// ----------------------------------------------------------------------------------------------------
// Normal Function (Declaration)
function percentageOfWorld(population) {
  return ((population / 7900000000) * 100).toFixed(2);
}
console.log(`Bulgaria has ${percentageOfWorld(6687717)}% of world population`);
console.log(`Germany has ${percentageOfWorld(83190556)}% of world population`);

// Function Expression - another form of creating a function.
const percentageExpression = function (population) {
  return ((population / 7900000000) * 100).toFixed(2);
};
console.log(`The United States Of America have ${percentageExpression(333290000)}% of world population`);

// Assignment Number #03
// ----------------------------------------------------------------------------------------------------
const lambda = (population) => ((population / 7900000000) * 100).toFixed(2);

// Assignment Number #04
separation();
// ----------------------------------------------------------------------------------------------------
const describePopulation = (country, capital, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld(population)}% of the world.`;

console.log(describePopulation("Japan", "Tokyo", 125700000));
console.log(describePopulation("Zimbabwe", "Harare", 15990000));
console.log(describePopulation("Qatar", "Doha", 2688000));

// Assignment Number #05
separation();
const populations = new Array(125700000, 6687717, 333290000, 2688000);
console.log(`Is the populations array consisting of 4 elements: ${populations.length == 4}`);

const percentages = new Array();
populations.forEach((x) => percentages.push(percentageExpression(x)));
console.log(percentages);

// Assignment Number #06
separation();
const neighbours = new Array("Macedonia", "Greece", "Turkey", "Romania");

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country");
}

neighbours[neighbours.indexOf("Greece")] = "Repulic of Greece";
console.log(neighbours);

// Assignment Number #07
separation();
const myCountry = {
  country: "Bulgaria",
  capital: "Sofia",
  language: "bulgarian",
  population: 6687717,
  neighbours: neighbours.slice(),
};

// Assignment Numer #08
// separation();
// console.log(
//   `${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2000000;
// myCountry["population"] -= 2000000;

// Assignment Number #09
separation();

myCountry["describe"] = function () {
  return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
};
console.log(myCountry.describe());

myCountry["checkIsIsland"] = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
  return this.isIsland;
};
console.log(myCountry.checkIsIsland());

// Assignemnt Number #10
separation();

// for (currentVoter = 1; currentVoter <= 50; currentVoter++) {
//   console.log(`Voter number ${currentVoter} is currently voting!`);
// }

// Assignemnt Number #11
separation();

const percentagesSecond = new Array();
for (let currentPopulation = 0; currentPopulation < populations.length; currentPopulation++) {
  percentagesSecond.push(percentageExpression(populations[currentPopulation]));

  if (percentages[currentPopulation] === percentagesSecond[currentPopulation]) {
    console.log(
      `New % array position #${currentPopulation + 1} is equal to old % array position ${currentPopulation + 1}`
    );
    continue;
  } else {
    console.log("There is a mistake with the second percentages array. Please check!");
    break;
  }
}

// Assignment Number #12
separation();

const listOfNeighbours = new Array(["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]);
for (let currentArray = 0; currentArray < listOfNeighbours.length; currentArray++) {
  console.log(`Set of neightbours: 0${currentArray}`);

  for (let currentCountry = 0; currentCountry < listOfNeighbours[currentArray].length; currentCountry++) {
    console.log(`Neighbour: ${listOfNeighbours[currentArray][currentCountry]}`);
  }
}

// Assignment Number #13
const percentagesThird = new Array();

let currentPopulation = 0;
while (currentPopulation++ < populations.length) {
  percentagesThird.push(percentageExpression(populations[currentPopulation]));

  if (percentages[currentPopulation] === percentagesSecond[currentPopulation]) {
    console.log(`New % array position #${currentPopulation} is equal to old % array position ${currentPopulation + 1}`);
    continue;
  } else {
    console.log("There is a mistake with the second percentages array. Please check!");
    break;
  }
}

// Create log function
function separation() {
  console.log("----------------------------------------------------------------------------------------------------");
}
