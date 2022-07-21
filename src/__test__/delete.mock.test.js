import deleteItem from '../modules/__mock__/delete.mock';
import localStorage from '../modules/__mock__/localStorage.mock';

describe ('delete task from To do list', () => {
  const tasksArr = [
    {
      index: 1,
      description: 'Task 1',
      completed: false,
    },
    {
      index: 2,
      description: 'Task 2',
      completed: true,
    },
    {
      index: 3,
      description: 'Task 3',
      completed: true,
    }
  ]

  it ('delete item from tasks array', () => {
    deleteItem(tasksArr, 1);
    expect(tasksArr).toHaveLength(2);
  })

  it('Check item from localstorage', () => {
    expect(localStorage.getItem('data')).toHaveLength(2);
  });

  it ('Check the item description', () => {
    expect(tasksArr[0].description).toBe('Task 1');
  })
  it ('Check the item description', () => {
    expect(tasksArr[1].description).toBe('Task 3');
  })

  it ('Check the index of item', () => {
    expect(tasksArr[0].index).toBe(1);
  })

  it ('Check the index of item', () => {
    expect(tasksArr[1].index).toBe(2);
  })
});
