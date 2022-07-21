import localStorage from './localStorage.mock';

const deleteItem = (tasksArr, index) => {
  tasksArr.splice(index, 1);
  tasksArr.forEach((tasksArr, index) => {
    tasksArr.index = index + 1;
  });
  localStorage.setItem('data', tasksArr);
  return tasksArr;
};

export default deleteItem;