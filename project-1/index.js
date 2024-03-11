// Variables

const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    person: "Sam Levenson",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person: "Albert Einstein",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky",
  },
];

//Event listeners

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
