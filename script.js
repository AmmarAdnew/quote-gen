const quote = [];

const quoteContainer = document.getElementById('quote-con');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const NewQuote = document.getElementById('newQuote');
const loader = document.getElementById('loader');

// // Show Loading

// function loading() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// // hide loading 
// function complete (){
//     if(!loader.hidden){
//         quoteContainer.hidden = false;
//         loader.hidden = true;
//     }
// }


// Show New Quote

function newQuote() {

    // pick a random quote
    const quote = data[Math.floor(Math.random() * data.length)];
    if (!quote.author){
        authorText.innerText = "Unknown";
    }else{
        authorText.innerText = quote.author;
    }

    // adding style length
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }

    quoteText.innerText = quote.text;

}


// Pouring Quotes From API

async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch( apiUrl);
        data = await response.json();
        newQuote()
    } catch (error) {
        console.log(" The error : " + error);
    }
}

function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

// event liseners

// NewQuote.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
