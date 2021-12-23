const quote = document.querySelector(".quote");
const authorBy = document.querySelector(".author");
const tag = document.querySelector(".tag");
quoteBtn = document.querySelector("button");

//random quote function
function newQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quote.innerText = result.content;
        authorBy.innerText = result.author;
        tag.innerText = "#" + result.tags;
    })
}

quoteBtn.addEventListener("click", newQuote);

