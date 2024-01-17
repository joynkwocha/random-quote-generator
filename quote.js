const quotesObject = {
  quote1: {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  quote2: {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  quote3: {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  quote4: {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  quote5: {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  quote6: {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  quote7: {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  quote8: {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  quote9: {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  quote10: {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  quote11: {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  quote12: {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  quote13: {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  quote14: {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  quote15: {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  quote16: {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein",
  },
  quote17: {
    quote: "To succeed in life, you need two things: ignorance and confidence.",
    author: "Mark Twain",
  },
  quote18: {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  quote19: {
    quote: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  quote20: {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  quote21: {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  quote22: {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  quote23: {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr.",
  },
  quote24: {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  quote25: {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  quote26: {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  quote27: {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  quote28: {
    quote:
      "It is not our abilities that show what we truly are… it is our choices.",
    author: "Dumbledore, in J.K. Rowling's Harry Potter series",
  },
  quote29: {
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  quote30: {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
};

function generateRandom(obj) {
  const objKeys = Object.keys(obj); //i used object.keys to access all the keys in the object. Object.keys returns an array.
  console.log(objKeys);
  let randomquote = Math.floor(Math.random() * objKeys.length); //to generate a random key i passed in objectKeys.length into the method.
  const contentOfKeys = obj[objKeys[randomquote]]; //to access tghe property of individual keys i used the normal way to access the values in the object.

  let theKeyOfKeys = Object.keys(contentOfKeys);
  const quote = contentOfKeys[theKeyOfKeys[0]];
  const paragraph = document.querySelector(".text");
  paragraph.innerText = quote;
  const author = contentOfKeys[theKeyOfKeys[1]];
  const authorName = document.querySelector(".author");
  authorName.innerText = author;
}

//Adding functionality

const generateBtn = document.querySelector(".generate");
const displayScreen = document.querySelector(".container");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault;
  generateRandom(quotesObject);
});
