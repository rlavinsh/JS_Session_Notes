const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    text: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.",
    author: "James Cameron",
  },
  {
    text: "Life is what happens when you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats",
  },
];

// console.log(quotes[1].author);

// for (let i = 0; i < quotes.length; i++) {
//   console.log(quotes[i]);
// }

let newQuote = document.getElementById("quote");
let authName = document.getElementById("author");

document.getElementById("btn").addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  newQuote.innerHTML = quotes[randomNum].text;
  authName.innerHTML = quotes[randomNum].author;
});
