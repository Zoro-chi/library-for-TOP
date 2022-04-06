
let author = document.querySelector("#author").value
let title = document.querySelector("#title").value
let pages = document.querySelector("#pages").value
let read = document.querySelector("#read").value
let form = document.querySelector("#form")
const addToLib = document.querySelector(".add-button")
const addNewBook = document.querySelector(".new-book")

let myLib = []

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.numberOfPages = pages
    this.read = read
}

addToLib.addEventListener("click", add)
function add() {
    let newBook = new Book()
    myLib.push(newBook)
    // form.reset()
    console.log(myLib)
}

addNewBook.addEventListener("click", newbook)
function newbook() {
    
}

