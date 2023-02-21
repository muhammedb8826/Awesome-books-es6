const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBook = (bookCollection) => {
  console.log(bookCollection);
  const book = { title: bookTitle.value, author: bookAuthor.value };
  bookCollection.push(book);
  bookAuthor.value = '';
  bookTitle.value = '';
};

export default addBook;