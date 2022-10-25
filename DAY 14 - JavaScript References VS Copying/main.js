// start with strings, numbers and booleans

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const copy = players;

console.log(players, copy);
// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const copy2 = players.slice();

// one way

// or create a new array and concat the old one in
const copy3 = [].concat(players);

// or use the new ES6 Spread
const copy4 = [...players];
copy4[3] = "heeeee hawwwww";
console.log(copy4);

const copy5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const cap = person;
cap.number = 99;
console.log(cap, person);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person };
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));

console.log(dev, dev2);