import Iteams from './modules/const.js';
import editItems from './modules/editItem.js';
import './style.css';

let arr = [] || JSON.parse(localStorage.getItem('items'));
const list = document.querySelector('.mainList');
const clear = document.querySelector('.clear');

function completeItem() {
  const localData = localStorage.getItem('items');
  const parsedData = JSON.parse(localData);
  const eachItem = document.querySelectorAll('.eachItem');

  eachItem.forEach((item, i) => {
    if (item.classList.contains('strike')) {
      parsedData[i].completed = true;
    } else {
      parsedData[i].completed = false;
    }
    localStorage.setItem('items', JSON.stringify(parsedData));
  });
}

function removeItems(child) {
  list.removeChild(child);
  let count = 1;
  const parsedItems = localStorage.getItem('items');
  let dataLocal = JSON.parse(parsedItems);
  arr = JSON.parse(localStorage.getItem('items'));
  arr.splice((child.id) - 1, 1);
  dataLocal = arr;

  dataLocal.map((item) => {
    item.index = count;
    count += 1;
    return null;
  });
  localStorage.setItem('items', JSON.stringify(dataLocal));
}

function getItemsLocalStorage() {
  const localItem = localStorage.getItem('items');
  const items = JSON.parse(localItem);
  items.map((item) => {
    arr.push(item);
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    const newId = item.index;
    newItem.setAttribute('id', newId);
    newItem.innerHTML = `
  <input type="checkbox" class="checkBox" id="${item.index}">
  <p class="eachItem" class="itemP" id="span-${item.index}">${item.description}</p>
  <i id="dots-${item.index}" class="dots material-icons">&#xe5d4;</i>
  <i id="trash-${item.index}" class="fa trash">&#xf1f8;</i>
  `;
    list.appendChild(newItem);
    const editItem = document.querySelectorAll('.dots');
    editItem.forEach((item) => {
      item.addEventListener('click', () => {
        item.parentNode.classList.add('clicked-on');
        editItems(item.previousElementSibling, newItem);
      });
    });
    return null;
  });

  const checkbox = document.querySelectorAll('.checkBox');
  checkbox.forEach((checkboxInput) => {
    checkboxInput.addEventListener('click', () => {
      checkboxInput.nextElementSibling.classList.toggle('strike');
      checkboxInput.parentNode.classList.toggle('clicked-on');
      const ellipsisIcon = checkboxInput.parentNode.childNodes[5];
      ellipsisIcon.classList.toggle('inactive-dots');
      const trashIcon = checkboxInput.parentNode.childNodes[7];
      trashIcon.classList.toggle('active-trash');
      completeItem();
    });
  });

  const removeItem = document.querySelectorAll('.trash');
  removeItem.forEach((item) => {
    item.addEventListener('click', () => {
      removeItems(item.parentNode);
    });
  });

  clear.addEventListener('click', () => {
    const localItem = localStorage.getItem('items');
    const parsedData = JSON.parse(localItem);
    const deleteCheck = parsedData.filter((item) => item.completed === false);
    deleteCheck.forEach((item, i) => {
      item.index = i + 1;
    });

    localStorage.setItem('items', JSON.stringify(deleteCheck));
    window.location.reload();
  });

  localStorage.setItem('items', JSON.stringify(arr));
}

const form = document.querySelector('.form');
const holder = document.querySelector('.add');

function addToList(description) {
  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML += `
    <input class="checkBox" type="checkBox">
    <p class="itemP">${description}</p>
    <i class="material-icons dots">&#xe5d4;</i>
    <i class="fa trash">&#xf1f8;</i>
  `;
  list.appendChild(item);

  const checkbox = document.querySelectorAll('.checkBox');
  checkbox.forEach((checkboxIn) => {
    checkboxIn.addEventListener('click', () => {
      checkboxIn.nextElementSibling.classList.toggle('strike');
      checkboxIn.parentNode.classList.toggle('clicked-on');
      const dotsIcon = checkboxIn.parentNode.childNodes[5];
      dotsIcon.classList.toggle('inactive-dots');
      const trashIcon = checkboxIn.parentNode.childNodes[7];
      trashIcon.classList.toggle('active-trash');
      completeItem();
    });
  });
  // send item to local storage
  const newItem = new Iteams(description, false, checkbox.length);
  arr.push(newItem);
  const stringedItems = JSON.stringify(arr);
  localStorage.setItem('items', stringedItems);

  // edit
  const editItem = document.querySelectorAll('.dots');
  editItem.forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.add('clicked-on');
      editItems(item.previousElementSibling);
    });
  });

  const toRemove = document.querySelectorAll('.trash');
  toRemove.forEach((item) => {
    item.addEventListener('click', () => {
      removeItems(item.parentNode);
    });
  });
}

form.addEventListener('submit', () => {
  if (holder.value !== '') {
    addToList(holder.value);
    holder.value = null;
  }
});

window.addEventListener('load', getItemsLocalStorage);
