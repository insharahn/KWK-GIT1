//random fact generator
const facts = [
  "I prefer coding in Linux's Text Editor (in light mode) over any IDE, because that's how I learned programming.",
  "I was born in Songkhla, Thailand, but I don't remember anything about it.",
  "I am the first woman on my mother's side of the family in three direct generations to NOT become a doctor!",
  "Assembly was my favorite language to learn. I was heartbroken to find out it isn't wildly used.",
  "My family loves travelling and I've visted over 10 countries, but I hate airplanes.",
  "I've never broken a bone.",
  "My cat's name is Totoro. He's a gray Persian and the love of my life.",
];

function getRandomFact() {
  //set text content to random index from facts array
  document.getElementById("funFactDisplay").textContent =
    facts[Math.floor(Math.random() * facts.length)];
}
