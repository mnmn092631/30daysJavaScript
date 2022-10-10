// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const answer1 = people.some((person) => {
  return new Date().getFullYear() - person.year >= 19;
});
console.log(answer1);

// Array.prototype.every() // is everyone 19 or older?
const answer2 = people.every((person) => {
  return new Date().getFullYear() - person.year >= 19;
});
console.log(answer2);

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const answer3 = comments.find((comment) => {
  return comment.id === 823423;
});
console.log(answer3);

// Array.prototype.findIndex()
// Find the comment with this ID
const answer4 = comments.findIndex((comment) => {
  return comment.id === 823423;
});
console.log(answer4);

// delete the comment with the ID of 823423
comments.splice(answer4, 1);
console.log(comments);
