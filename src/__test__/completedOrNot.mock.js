import localStorage from './localStorage.mock.js';


const completed = (tasks, index) => {
  (tasks[index].completed == true) ? tasks[index].completed = false : tasks[index].completed = true;
  localStorage.setItem('data', tasks);
  return tasks;
}

export default completed;