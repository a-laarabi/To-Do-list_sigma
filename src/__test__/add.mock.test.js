/**
 * @jest-environment jsdom
 */

import addIteam from '../modules/__mock__/add.mock';
import localStorage from '../modules/__mock__/localStorage.mock';
 
describe('addTask to the To Do List', () => {

  document.body.innerHTML = '<input id="input-text" value="Finish The Project on time">';
  const tasksArr = [];

  it('Should return tasksArr array with attached object', () => {
    expect(addIteam(tasksArr)).toHaveLength(1);
  });
 
  it('LocalStorage should be updated after adding new item', () => {
    expect(localStorage.getItem('data')).toHaveLength(1);
  });

  it('Description should have the value of the input', () => {
    expect(tasksArr[0].description).toBe('Finish The Project on time');
  });

  it('check if the task is completed', () => {
    expect(tasksArr[0].completed).toBe(false);
  });

  it('check the id of the task', () => {
    expect(tasksArr[0].index).toBe(1);
  });
 });