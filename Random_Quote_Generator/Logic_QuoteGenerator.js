const quotes = [
  "Believe you can and you're halfway there.",
  "You miss 100% of the shots you don’t take.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Do something today that your future self will thank you for."
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
