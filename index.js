const quotes = [
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "Well done is better than well said.",
  "You miss 100% of the shots you don’t take.",
  "A goal is a dream with a deadline.",
  "Outstanding people have one thing in common: An absolute sense of mission.",
  "Trying is winning in the moment.",
  "Fall down seven times and stand up eight.",
  "You just can't beat the person who never gives up.",
  "There is little success where there is little laughter.",
  "We cannot solve our problems with the same thinking we used when we created them.",
];

function randomQuote(quotes) {
  const number = Math.round(Math.random() * quotes.length);
  return quotes[number];
}

const text = document.querySelector("p");
text.style.backgroundColor = "pink";
text.style.border = "1px solid gray";
text.style.width = "60%";

text.style.padding = "10px";

text.innerHTML = randomQuote(quotes);

const butt = document.querySelector("button");

function mouseClickHandler() {
  text.innerHTML = randomQuote(quotes);
}
butt.addEventListener("click", mouseClickHandler);
