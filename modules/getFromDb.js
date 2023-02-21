const storageName = 'bookCollection';
const getDataFromDb = () => {
  const storedData = localStorage.getItem(storageName);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
export default getDataFromDb;