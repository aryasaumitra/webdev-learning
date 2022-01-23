const quotesEl = document.querySelector('.quotes');
const loader = document.querySelector('.loader');


const getQuotes = async (page,limit) =>{
    const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;

    const response = await fetch(API_URL);

    if(!response.ok){
        throw new Error(`An error occurred: ${response.status}`);
    }

    return response.json()
}

const showQuotes = (quotes)=>{
    quotes.forEach(quote => {
        const quoteEl = document.createElement('blockquote');
        quoteEl.classList.add('quote');

        quoteEl.innerHTML = `
            <span>${quote.id})</span>
            ${quote.quote}
            <footer>${quote.author}</footer>
        `;

        quotesEl.appendChild(quoteEl);

    });
}
const hideLoader = () => {
    loader.classList.remove('show');
};
//show loader sets the opacity to 1
const showLoader = () => {
    loader.classList.add('show');
};