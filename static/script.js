const boxes = Array.from(document.querySelectorAll('.box'));
console.log('start your js!');
const onBoxClick = ({ currentTarget }) => {  
  currentTarget.classList.toggle('expand');
};

boxes.forEach(box => {
  box.addEventListener('click', onBoxClick);
});
