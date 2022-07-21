import localStorage from './localStorage.mock';

const addIteam = (arr) => {
  const inputText = document.getElementById('input-text');
  const item = {
    index: Number(`${arr.length+1}`),
    description: `${inputText.value}`,
    completed: false,
  };
  arr.push(item);
  localStorage.setItem('data', arr);
  return arr;
};

export default addIteam;