const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let index = 0;

function showImage(index) {
  images.forEach(img => img.style.display = 'none');
  images[index].style.display = 'block';
}

function nextImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
}

setInterval(nextImage, 3000);

const nav = document.createElement('div');
nav.classList.add('slider-nav');

for (let i = 0; i < images.length; i++) {
  const button = document.createElement('button');
  if (i === 0) {
    button.classList.add('active');
  }
  button.textContent = i + 1;
  button.addEventListener('click', () => {
    index = i;
    showImage(index);
    updateNav();
  });
  nav.appendChild(button);
}

slider.insertAdjacentElement('afterend', nav);

function updateNav() {
  const buttons = nav.querySelectorAll('button');
  buttons.forEach(button => button.classList.remove('active'));
  buttons[index].classList.add('active');
}
