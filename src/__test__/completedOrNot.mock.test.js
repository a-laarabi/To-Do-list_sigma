import completed from '../modules/__mock__/completedOrNot.mock.js';
import localStorage from '../modules/__mock__/localStorage.mock.js';

describe('check if the task completed or not', () => {
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

  it('check if he change the state of Task 2', () => {
    expect(completed(tasksArr, 1)[1].completed).toBe(true);
  });

  it('check if he change the state of Task 3', () => {
    completed(tasksArr, 2);
    expect(tasksArr[2].completed).toBe(true);
  });

  it('check if he change the state of Task 2', () => {
    expect(localStorage.getItem('data')[1].completed).toBe(true);
  });

  it('check if he change the state of Task 3', () => {
    expect(localStorage.getItem('data')[2].completed).toBe(true);
  });

  it('check the length of the local Storage', () => {
    expect(localStorage.getItem('data')).toHaveLength(3);
  })

});