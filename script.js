const myLibrary = [];
const booksContainer = document.getElementById('books-container');
const addBookModal = document.getElementById('add-book-modal');
const addBookBtn = document.getElementById('add-book-button');
const closeBtn = document.getElementsByClassName('close')[0];

const addBookForm = document.getElementById('add-book-form');
const bookTitleInput = document.getElementById('book-title-input');
const bookAuthorInput = document.getElementById('book-author-input');
const bookPagesInput = document.getElementById('book-pages-input');
const bookReleaseYearInput = document.getElementById('book-release-year-input');
const bookReadingStatusCheckbox = document.getElementById('book-reading-status-checkbox');
const submitBtn = document.getElementById('submit-button');

function Book(title, author, pagesCount, releaseYear, readStatus) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.releaseYear = releaseYear;
    this.readStatus = readStatus;
    this.id = generateId();
}

const generateId = () => crypto.randomUUID();

function addBookToLibrary(title, author, pagesCount, releaseYear, readStatus) {
    myLibrary.push(new Book(title, author, pagesCount, releaseYear, readStatus));
}

function displayBooks() {
    booksContainer.innerHTML = '';
    for(const {title, author, pagesCount, releaseYear, readStatus, id}of myLibrary) {
        booksContainer.innerHTML +=
        `
        <div class="book-card" data-id="${id}">
            <h2 class="book-title">${title ? title : 'N/A'}</h2>
            <p id="book-author">author: ${author ? author : 'N/A'}</p>
            <p id="book-pages">Pages: ${pagesCount ? pagesCount : 'N/A'}</p>
            <p id="book-release-year">Release year: ${releaseYear ? releaseYear : 'N/A'}</p>
            <button class="book-reading-status">${readStatus ? 'Read': 'To Read' }</button>
            <button class="remove-book-button">Remove book</button>
        </div>
        `
    }
    attachEventListenersToRemoveBookButtons();
    attachEventListenerToReadingStatusButtons();
}

function attachEventListenerToReadingStatusButtons() {
    const readingStatusButtons = document.querySelectorAll('.book-reading-status');
    readingStatusButtons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            const bookCard = e.target.closest('.book-card');
            const bookReadingStatus = bookCard.readStatus;
            // reverse status if clicked
            button.textContent = bookReadingStatus ? 'To Read' : 'Read';
            bookCard.readStatus = bookReadingStatus ? false : true;
        })
    })
}

function attachEventListenersToRemoveBookButtons() {
    const removeBookButtons = document.querySelectorAll('.remove-book-button');
    removeBookButtons.forEach( (button) => {
        button.addEventListener('click', (e) => {
            const bookCard = e.target.closest('.book-card');
            const bookId = bookCard.getAttribute('data-id');
            removeBookFromLibrary(bookId);
            displayBooks();
        })
    })
}

const toggleVisibility = () => {
    addBookModal.classList.toggle('hidden');
}

addBookBtn.addEventListener('click', toggleVisibility);
closeBtn.addEventListener('click', toggleVisibility);

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = bookTitleInput.value;
    const author = bookAuthorInput.value;
    const pages = bookPagesInput.value;
    const releaseYear = bookReleaseYearInput.value;
    const readingStatus = bookReadingStatusCheckbox.checked;
    addBookToLibrary(title, author, pages, releaseYear, readingStatus.checked);
    displayBooks();
    toggleVisibility();
    resetInputValues();
})

function resetInputValues() {
    bookTitleInput.textContent = '';
    bookAuthorInput.textContent = '';
    bookPagesInput.textContent = '';

    bookTitleInput.value = '';
    bookAuthorInput.value = '';
    bookPagesInput.value = '';
    bookReleaseYearInput.value = '';
    bookReadingStatusCheckbox.checked = false; 
}

function removeBookFromLibrary(id) {
    const bookToRemoveIndex = myLibrary.findIndex( (book) => book.id === id);
    myLibrary.splice(bookToRemoveIndex, 1);
}
