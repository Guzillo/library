const myLibrary = [];

function Book(title, author, pagesCount, releaseYear, readStatus) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.releaseYear = releaseYear;
    this.readStatus = readStatus;
    this.id = generateId;
}

const generateId = () => crypto.randomUUID();