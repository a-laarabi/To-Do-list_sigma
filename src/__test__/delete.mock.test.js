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

  it ('', () => {
    deleteItem(tasksArr, 1);
    expect(tasksArr).toHaveLength(2);
  })

  it('', () => {
    expect(localStorage.getItem('data')).toHaveLength(2);
  });

  it ('', () => {
    expect(tasksArr[0].description).toBe('Task 1');
  })
});