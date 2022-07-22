import localStorage from '../modules/__mock__/localStorage.mock.js';
import clearAllCompleted from '../modules/__mock__/clearAllCompleted.mock.js';

describe('We should delete all the completed tasks', () => {
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
    {
      index: 4,
      description: 'Task 4',
      completed: false,
    },
    {
      index: 5,
      description: 'Task 5',
      completed: false,
    },
    {
      index: 6,
      description: 'Task 6',
      completed: false,
    },
    {
      index: 7,
      description: 'Task 7',
      completed: false,
    },
    {
      index: 8,
      description: 'Task 8',
      completed: false,
    },
  ];

  it('check the length of the array returned', () => {
    expect(clearAllCompleted(tasksArr)).toHaveLength(8);
  });

  it('check the length of the localstorage returned', () => {
    expect(localStorage.getItem('data')).toHaveLength(8);
  });

  it('check the length of the array returned after finishing one task', () => {
    tasksArr[0].completed = true;
    expect(clearAllCompleted(tasksArr)).toHaveLength(7);
  });

  it('check the length of the localstorage returned after finishing one task', () => {
    expect(localStorage.getItem('data')).toHaveLength(7);
  });

  it('check the length of the array returned after finishing two tasks', () => {
    tasksArr[1].completed = true;
    tasksArr[7].completed = true;
    expect(clearAllCompleted(tasksArr)).toHaveLength(5);
  });

  it('check the length of the local Storage returned after finishing two tasks', () => {
    expect(localStorage.getItem('data')).toHaveLength(5);
  });

  it('check the length of the array returned after finishing all the tasks', () => {
    tasksArr.forEach((item) => { item.completed = true; });
    expect(clearAllCompleted(tasksArr)).toHaveLength(0);
  });

  it('check the length of the local Storage returned after finishing all the tasks', () => {
    expect(localStorage.getItem('data')).toHaveLength(0);
  });
});