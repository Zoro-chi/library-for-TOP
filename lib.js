
let form = document.querySelector("#form")
const addToLib = document.querySelector(".add-button")
const addNewBook = document.querySelector(".new-book")
let container = document.querySelector("#display")


let book1 = {
    author : "JK Rowling",
    title : "Harry Potter",
    pages : 300,
    read : "yes"
}

let myLib = [book1]

function Book(author, title, pages, read) {
    this.author = author
    this.title = title
    this.numberOfPages = pages
    this.read = read
}

addToLib.addEventListener("click", add)
function add() {
    let author = document.querySelector("#author").value
    let title = document.querySelector("#title").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").value
    let newBook = new Book(author, title, pages, read)
    myLib.push(newBook)
    // form.reset()
    console.log(myLib.length)
    for (book of myLib){
    for (let prop in book){
        if (Object.prototype.hasOwnProperty.call(book, prop)){
            let item = document.createElement("div")
            // item.classList.add(book[prop])
            item.innerHTML = book[prop]
            container.appendChild(item)
        }
    }
}
}



addNewBook.addEventListener("click", newbook)
function newbook() {
    document.querySelector("#form").style.display = "block"
}

