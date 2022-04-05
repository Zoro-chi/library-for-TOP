

//let item = document.querySelector(".item-card").innerText

const book1 = {
    Author : "Mr.Mike Myers",
    Title : "Game of Thrones",
    Pages : 300,
    Read : "Yes",
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

document.querySelector(".author").innerHTML = `Author : ${book1.Author}`
document.querySelector(".title").innerHTML = `Title : ${book1.Title}`
document.querySelector(".pages").innerHTML = `Pages : ${book1.Pages}`
document.querySelector(".read").innerHTML = `Read? : ${book1.Read}`