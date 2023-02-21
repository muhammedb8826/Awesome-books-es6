const storageName = 'bookCollection';
const saveToLocalStorage = (books) => {
  localStorage.setItem(storageName, JSON.stringify(books));
};

export default saveToLocalStorage;