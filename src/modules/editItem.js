function editItems(itemToReplace) {
  const newIn = document.createElement('input');
  newIn.type = 'text';
  newIn.classList.add('new-input');
  newIn.value = itemToReplace.textContent;
  itemToReplace.replaceWith(newIn);
  const local = localStorage.getItem('items');
  const data = JSON.parse(local);
  newIn.addEventListener('keypress', (e) => {
    const newId = newIn.parentElement.id;
    if (e.key === 'Enter') {
      const itemToReplace = document.createElement('div');
      itemToReplace.textContent = newIn.value;
      newIn.replaceWith(itemToReplace);
      const edited = document.querySelectorAll('.new-item');
      for (let i = 0; i < edited.length; i += 1) {
        if ((edited[i].id) === newId) {
          data[i].description = newIn.value;
          localStorage.setItem('items', JSON.stringify(data));
        }
      }
    }
  });
}

export default editItems;