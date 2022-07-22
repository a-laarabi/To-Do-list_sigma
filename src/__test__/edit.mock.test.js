/**
* @jest-environment jsdom
*/

import editIteam from '../modules/__mock__/edit.mock.js';
import localStorage from '../modules/__mock__/localStorage.mock.js';

describe('edit tasks in the To Do List', () => {
  const tasksArr = [
    {
      index: 1,
      description: 'Task 1',
      completed: false,
    },
    {
      index: 2,
      description: 'Task 2',
      completed: false,
    },
    {
      index: 3,
      description: 'Task 3',
      completed: false,
    },
  ];

  it('check if it change the description of task 2', () => {
    editIteam(tasksArr, 1, 'Update GitHub profile');
    expect(tasksArr[1].description).toBe('Update GitHub profile');
  });

  it('check the length of the local Storage', () => {
    expect(localStorage.getItem('data')).toHaveLength(3);
  });

  it('check if it change the description of task 2 in local Storage', () => {
    expect(localStorage.getItem('data')[1].description).toBe('Update GitHub profile');
  });
});