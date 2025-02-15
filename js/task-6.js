const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBox = (amount) => { 
  boxContainer.innerHTML = '';
  const airBox = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) { 
    let box = document.createElement('div');
    let size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = `5px`;

    airBox.appendChild(box);
  }
  boxContainer.appendChild(airBox);
}

const destroyBox = () => { 
  boxContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => { 
  const amount = parseInt(input.value);
  
  if (amount >= 1 && amount <= 100) {
    createBox(amount);
    input.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBox);