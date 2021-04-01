const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const container = document.querySelector('.container');

// openButton.addEventListener('click', () => {
//   container.classList.add('show-nav');
// });

openButton.addEventListener('click', () =>{
  container.classList.add('show-nav');
  openButton.style.display='none';
  closeButton.style.display='block';
});

closeButton.addEventListener('click', () =>{
  closeButton.style.display='none';
  openButton.style.display='block';
  container.classList.remove('show-nav');
});
