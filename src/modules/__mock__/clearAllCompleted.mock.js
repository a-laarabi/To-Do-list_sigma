import localStorage from './localStorage.mock.js';

const clearAllCompleted = (tasks) => {
  let incompletedTasks = [];
  tasks.forEach(element => {
    if (element.completed == false){
      element.index = incompletedTasks.length + 1;
      incompletedTasks.push(element);
    } 
  });
  localStorage.setItem('data', incompletedTasks);
  return incompletedTasks;
}

export default clearAllCompleted;