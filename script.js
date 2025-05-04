const myLibrary = [];
const booksContainer = document.getElementById('books-container');
function Book(title, author, pagesCount, releaseYear, readStatus) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.releaseYear = releaseYear;
    this.readStatus = readStatus;
    this.id = generateId;
}

const generateId = () => crypto.randomUUID();

function addBookToLibrary(title, author, pagesCount, releaseYear, readStatus) {
    myLibrary.push(new Book(title, author, pagesCount, releaseYear, readStatus));
}

function displayBooks() {
    for(const {title, author, pagesCount, releaseYear, readStatus}of myLibrary) {
        booksContainer.innerHTML +=
        `
        <div class="book-card">
            <h2 class="book-title">${title}</h2>
            <p id="book-author">author: ${author}</p>
            <p id="book-pages">Pages: ${pagesCount}</p>
            <p id="book-release-year">Release year: ${releaseYear}</p>
            <p id="book-reading-status">Reading status: ${readStatus}</p>
        </div>
        `
    }
}