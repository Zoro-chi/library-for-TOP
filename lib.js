
let form = document.querySelector("#form")
const addToLib = document.querySelector(".add-button")
const addNewBook = document.querySelector(".new-book")
let container = document.querySelector("#display")


let storedBooks;
let myLib = []


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
    storedBooks = myLib.slice(-1)
    form.reset()
    
    for (let book of storedBooks){
        let i = myLib.indexOf(book)
        let bookObj = document.createElement("div")
        bookObj.setAttribute("data-position", i)
        let delBtn = document.createElement("button")
        delBtn.addEventListener("click", () =>{
            bookObj.remove()
        })

        console.log(bookObj)
    for (let prop in book){
        // if (Object.prototype.hasOwnProperty.call(book, prop)){
            let item = document.createElement("div")
        
    if (author !== "" && title !== "" && pages !== ""){
            item.innerHTML = book[prop]
            bookObj.appendChild(item)
            container.appendChild(item)
        }
        bookObj.appendChild(delBtn)
        container.appendChild(delBtn)
        }   
    }     
}


addNewBook.addEventListener("click", newbook)
function newbook() {
    document.querySelector("#form").style.display = "block"
}
