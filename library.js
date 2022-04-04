
let myLib = []

function Book(author, title, numberOfPages, read) {
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.read = read
}

function addBookToLib(userInput) {
    myLib.push(userInput)
}