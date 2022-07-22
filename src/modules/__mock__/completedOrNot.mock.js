import localStorage from './localStorage.mock.js';

const completed = (task, index) => {
  (task[index].completed === true) ? task[index].completed = false : task[index].completed = true;
  localStorage.setItem('data', task);
  return task;
};

export default completed;