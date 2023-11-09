let assignmentNumber = 1;

// First Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

const continent = "Europe";
console.log(`Continent: ${continent}`);

const country = "Bulgaria";
console.log(`Country: ${country}`);

let population = 6687717;
console.log(`Population: ${(population / 1000000).toFixed(3)} million`);

// Second Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

const isIsland = false;
let language;

console.log(`Type of "continent" variable: ${typeof continent}
Type of "country" variable: ${typeof country}
Type of "isIsland" variable: ${typeof isIsland}
Type of "language" variable: ${typeof language}
Type of "population" variable: ${typeof population}`);

// Third Assignment
language = "bulgarian";
assignmentNumber++;

// Fourth Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

const halfPopulation = population / 2;
console.log(`Half population of Bulgaria: ${halfPopulation}`);

population++;
console.log(`Population of Bulgaria + 1: ${population}`);

const compareFinlandPopulation = population > 6000000;
console.log(`Does Bulgaria have more population than Finland: ${compareFinlandPopulation}`);

const compareWithAverage = population > 33000000;
console.log(`Does Bulgaria have more population than average in countries: ${compareWithAverage}`);

const bulgariaDescription =
  country + " is in " + continent + ", and its " + population / 1000000 + " million people speak " + language;
console.log(bulgariaDescription);

// Fifth Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

console.log(`${country} is in ${continent} and its ${population / 1000000} speak ${language}.`);

// Sixth Assgnment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

if (population > 33000000) {
  console.log(`Bulgaria's population is above average.`);
} else {
  console.log(`Bulgaria's population is ${((33000000 - population) / 1000000).toFixed(0)} million below average.`);
}

// Seventh Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

console.log(`"9" - "5" = ${"9" - "5"}`);
console.log(`"19" - "13" + "17" = ${"19" - "13" + "17"}`);
console.log(`"19" - "13" + 17 = ${"19" - "13" + 17}`);
console.log(`5 + 6 + "4" + 9 - 4 - 2 = ${5 + 6 + "4" + 9 - 4 - 2}`);

// Eight Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

const numberOfNeighbours = Number(prompt("How many neighbours does your country have? "));
if (numberOfNeighbours === 1) {
  console.log("Your country has exactly 1 border!");
} else if (numberOfNeighbours > 1) {
  console.log("Your country has more than 1 more border");
} else {
  console.log("Your country has no borders");
}

// Ninth Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

if (language.toLowerCase() === "english" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} doesn't meet your criteria!`);
}

// Tenth Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// Eleventh Assignment
console.log(`--------------------------------------------------`);
console.log(`Assignment Number #${String(assignmentNumber++).padStart(2, "0")}:`);
console.log(`--------------------------------------------------`);

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);
