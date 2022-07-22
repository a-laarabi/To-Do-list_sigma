import localStorage from './localStorage.mock.js';

const editIteam = (tasks, index, newText) => {
  tasks[index].description = newText;
  localStorage.setItem('data', tasks);
  return tasks;
}

export default editIteam;