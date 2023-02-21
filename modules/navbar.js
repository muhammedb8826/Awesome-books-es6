const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contactLink = document.getElementById('contactLink');
const displayBooks = document.getElementById('displayBooks');
const addBooks = document.getElementById('addBooks');
const contact = document.getElementById('contact');

list.addEventListener('click', () => {
  displayBooks.style.display = 'flex';
  addBooks.classList.remove('active');
  contact.classList.remove('active');
});

addNew.addEventListener('click', () => {
  displayBooks.style.display = 'none';
  addBooks.classList.add('active');
  contact.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  displayBooks.style.display = 'none';
  addBooks.classList.remove('active');
  contact.classList.add('active');
});

export { list, addNew, contactLink };
