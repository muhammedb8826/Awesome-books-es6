// eslint-disable-next-line no-unused-vars
import { list, addNew, contactLink } from './modules/navbar.js';
import now from './modules/time.js';
import ShowAllBooks from './modules/showAllBook.js';
import getDataFromDb from './modules/getFromDb.js';
import addBook from './modules/addBook.js';
import saveToLocalStorage from './modules/saveToDb.js';

class Books {
  constructor() {
    this.bookCollection = getDataFromDb();
    this.addBookBtn = document.querySelector('#addBook');
    this.displayBooks = document.querySelector('.display-books');
    this.addBookBtn.addEventListener('click', () => {
      this.AddBook();
      saveToLocalStorage(this.bookCollection);
      this.ShowBooks();
    });
  }

  AddBook() {
    addBook(this.bookCollection);
  }

  removeBook(item) {
    this.bookCollection = this.bookCollection.filter((book, index) => item !== index);
  }

  ShowBooks() {
    this.displayBooks.innerHTML = this.bookCollection.map(
      (book) => ShowAllBooks(book.title, book.author),
    );
    const deleteBtn = document.querySelectorAll('.remove');
    for (let i = 0; i < deleteBtn.length; i += 1) {
      deleteBtn[i].addEventListener('click', () => {
        this.removeBook(i);
        saveToLocalStorage(this.bookCollection);
        this.ShowBooks();
      });
    }
  }
}

window.onload = () => {
  const b = new Books();
  b.ShowBooks();
  setInterval(() => {
    now();
  }, 1000);
};
