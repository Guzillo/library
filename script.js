const myLibrary = [];
const booksContainer = document.getElementById('books-container');
const addBookModal = document.getElementById('add-book-modal');
const addBookBtn = document.getElementById('add-book-button');
const closeBtn = document.getElementsByClassName('close')[0];
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
            <h2 class="book-title">${title ? title : 'N/A'}</h2>
            <p id="book-author">author: ${author ? author : 'N/A'}</p>
            <p id="book-pages">Pages: ${pagesCount ? pagesCount : 'N/A'}</p>
            <p id="book-release-year">Release year: ${releaseYear ? releaseYear : 'N/A'}</p>
            <p id="book-reading-status">Reading status: ${readStatus ? readStatus : 'N/A'}</p>
        </div>
        `
    }
}

addBookBtn.addEventListener('click', () => {
    addBookModal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    addBookModal.style.display = 'none';
});

