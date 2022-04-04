
let item = document.querySelector(".item-card").innerText


const book1 = {
    Author : "Mr.Me",
    Title : "GOT",
    Pages : 300,
    Read : true,
}

let myLib = [book1]

function Book(author, title, numberOfPages, read) {
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.read = read
}

function addBookToLib(userInput) {
    myLib.push(userInput)
}