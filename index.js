const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
    author: "Winston Churchill",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    author: "Abraham Lincoln",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "If you win, you need not have to explain...If you lose, you should not be there to explain!",
    author: "Adolf Hitler"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "You can't see me",
    author: "John Cena",
  },
  {
    quote: "A well-dressed man is more attractive than a shirtless guy with six pack abs",
    author: "Johnny Sins",
  },
  {
    quote: "I'd rather be hated for who I am, than loved for who I am not.",
    author: "Kurt Cobain",
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "The best way to guarantee a loss is to quit.",
    author: "Morgan Freeman",
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Death is the solution to all problems. No man - no problem.",
    author: "Joseph Stalin",
  },
  {
    quote: "If you aren't in the moment, you are either looking forward to uncertainty, or back to pain and regret.",
    author: "Jim Carrey",
  },
  {
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    author: "Steve Jobs",
  },
  {
    quote: "Happiness is when what you think, what you say and what you do are in harmony.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "George Bush doesn't care about black people.",
    author: "Kanye West",
  },
  {
    quote: "Choose a job you love, and you will never have to work a day in your life.",
    author: "Confucius",
  },
  {
    quote: "I Have A Dream.",
    author: "Martin Luther King Jr",

  },
  {
    quote: "Mama says that, happiness is from magic rays of sunshine that come down when you're feeling blue.",
    author: "Adam Sandler",
  },
  {
    quote: "I'm not a smart man, but I know what love is.",
    author: "Willy Wonka",
  },
  {
    quote: "You Know the Rules, and So Do I.",
    author: "Rick Astley",
  }

  
];

// Picking a random qoute from the array
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
const quoteText = randomQuote.quote;

// Picking a random author from the array
const randomAuthor = quotes[Math.floor(Math.random() * quotes.length)];
const authorText = randomAuthor.author;

// Picking a random image name from the array
const randomImage = quotes[Math.floor(Math.random() * quotes.length)];
const imageName = randomImage.author;



// Element creation

// Creating a new cite element for the author
const citeElement = document.createElement('cite');

// Creating a new paragraph element and adding the quote text to it
const quoteElement = document.createElement('p');

// Creating a new image element and adding the image name to it
const imageElement = document.createElement('img');

// Adding the text to the author element
citeElement.textContent = `-"${ authorText }"`;

// Adding the text to the quote element
quoteElement.textContent = `"${quoteText}" `;

// Adding the image name to the image element
imageElement.src = `/images/${imageName}.jpg`;


// Adding the new paragraph element to the DOM
const quoteContainer = document.getElementById('quote-container');


quoteContainer.appendChild(imageElement);
quoteContainer.appendChild(citeElement);
quoteContainer.appendChild(quoteElement);
