//welcome
var user = 'Class';
var salutation = 'Hello, ';
var greeting = salutation + user + '! What message are you sending?';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Flowers
function anemone() {
    alert("Foresaken");
}

function babyBreath() {
    alert("Everlasting Love");
}

function carnation() {
    alert("Fascination, Mother's Love");
}

function daffodil() {
    alert("Unequalled Love");
}

function dahlia() {
    alert("Good Taste");
}

function Iris() {
    alert("Faith, Trust");
}

function sunflower() {
    alert("Adoration");
}

function tulip() {
    alert("Passion");
}

const quotes = [
    "Happiness held is the seed; happiness shared is the flower. - John Harrigan",
    "Love is like wildflowers; it's often found in the most unlikely places. - Ralph Waldo Emerson",
    "Life is the flower for which love is the honey. - Victor Hugo",
    "Flowers are the proud assertion that a ray of beauty out values all the utilities in the world. - Ralph Waldo Emerson",
    "All the flowers of the tomorrows are in the seeds of today. - Indian Proverb",
    "The flower that follows the sun does so even in cloudy days. - Robert Leighton",
    "Every flower must grow through dirt. - Laurie Jean Sennott",
    "Even the tiniest of flowers can have the toughest roots. - Shannon Mullen",
];

//generate random quotes about flowers
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = randomQuote;
}

//event listener
document.getElementById("generateButton").addEventListener("click",generateRandomQuote);

generateRandomQuote();