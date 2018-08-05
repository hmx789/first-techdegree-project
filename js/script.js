// FSJS - Random Quote Generator



// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote() {
    if (quotes === undefined) {             //Making sure the quotes array exists
        throw "Quotes is not defined!";
    }
    if (quotes.length <= 0) {                   //Error checking to see if there are quotes inside the array
        throw "There seems to be no quotes!";
    }

    var randomNum = Math.floor(Math.random() * quotes.length);  //getting a random number in between 0 to length-1

    return quotes[randomNum];
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
    var randomQuote = getRandomQuote();

    if (randomQuote === undefined) {        // Making sure the quote returned actually exists
        throw "This quote does not exist!";
    }

    //Creating string to display on html page
    var quoteDisplay = `
    <p class="quote"> ${randomQuote.quote} </p>
    <p class="source"> ${randomQuote.source}
      <span class="citation">${randomQuote.citation}</span>
      <span class="year"> ${randomQuote.year} </span>
    </p>`;


    changeBackgroundColor();    // Function will randomly change the background color

    //Putting the quote inside the html page
    document.getElementById('quote-box').innerHTML = quoteDisplay;

    
}


// Generates random rgb value
function getRandomColor() {
    var rgbVals = [];
    var randomColor;

    for (var i = 0; i < 3; i++) {
        randomColor = Math.floor(Math.random() * 256);  //Gets a value in between 0-255    
        rgbVals.push(randomColor);
    }
    return rgbVals;
}

//Uses random rgb value and applies it to the background
function changeBackgroundColor() {
    var rgbVals = getRandomColor();
    document.body.style.backgroundColor = 'rgb(' + rgbVals.join(',') + ')';
    
    //Making the background color change with a 2 second transiiton
    document.body.style.transition = " all 2s";
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Sets the interval so the function is ran every 30 seconds whether user clicks the button or not
setInterval(printQuote,30000);