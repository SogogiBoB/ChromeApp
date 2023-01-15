const quotes = [
    {
        quote : "The purpose of our lives is to be happy.",
        author : "Dalai Lama"
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon"
    },
    {
        quote : "Get busy living or get busy dying.",
        author : "Stephen King"
    },
    {
        quote :  "You only live once, but if you do it right, once is enough.",
        author : "Mae West"
    },
    {
        quote : "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author : "Thomas A. Edison"
    },
    {
        quote :  "If you want to live a happy life, tie it to a goal, not to people or things.",
        author : "Albert Einstein"
    },
    {
        quote : "Never let the fear of striking out keep you from playing the game.",
        author : "Babe Ruth"
    },
    {
        quote : "Money and success don’t change people; they merely amplify what is already there.",
        author : "Will Smith"
    },
    {
        quote : "Not how long, but how well you have lived is the main thing.",
        author : "Seneca"
    },
    {
        quote : "If life were predictable it would cease to be life, and be without flavor.",
        author : "Eleanor Roosevelt"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;