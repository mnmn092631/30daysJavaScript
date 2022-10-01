// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const answer1 = inventors.filter(
  (inventor) => inventor.year < 1600 && inventor.year >= 1500
);
console.table(answer1);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const answer2 = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(answer2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const answer3 = inventors.sort(function compare(a, b) {
  return a.year === b.year ? 0 : a.year > b.year ? 1 : -1;
});
console.table(answer3);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const answer4 = inventors.reduce((acc, cur) => {
  acc += cur.passed - cur.year;
  return acc;
}, 0);
console.log(answer4);

// 5. Sort the inventors by years lived
const answer5 = inventors.sort(function compare(a, b) {
  return a.passed - a.year === b.passed - b.year
    ? 0
    : a.passed - a.year > b.passed - b.year
    ? -1
    : 1;
});
console.table(answer5);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));
// console.log(de)

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// 7. sort Exercise
// Sort the people alphabetically by last name
const answer7 = people.sort();
console.table(answer7);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

// 8. Reduce Exercise
// Sum up the instances of each of these
const answer8 = data.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 0;
  }
  acc[cur]++;

  return acc;
}, {});
console.table(answer8);
