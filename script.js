const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const meme = document.querySelectorAll('.meme');

function onInputTextKeyUpEvent(event) {
  const text = document.querySelector('#meme-text');
  text.textContent = event.target.value;
}

/* Ref:
   https://htmldom.dev/preview-an-image-before-uploading-it/
   https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURl
*/
function onInputImageChangeEvent(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);

  const memeImage = document.querySelector('#meme-image');
  memeImage.src = url;
}

function onChangeBorderContainer({ target: { id } }) {
  const memeImageContainer = document.querySelector('#meme-image-container');
  let border;
  if (id === 'fire') {
    border = '3px dashed red';
  } else if (id === 'water') {
    border = '5px double blue';
  } else if (id === 'earth') {
    border = '6px groove green';
  }
  memeImageContainer.style.border = border;
}

function onClickChangeMemeImageEvent({ target: { id } }) {
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = `/imgs/${id.replace('-', '')}.png`;
}

function loadListeners() {
  inputText.addEventListener('keyup', onInputTextKeyUpEvent);
  inputImage.addEventListener('change', onInputImageChangeEvent);
  fire.addEventListener('click', onChangeBorderContainer);
  water.addEventListener('click', onChangeBorderContainer);
  earth.addEventListener('click', onChangeBorderContainer);
  for (let index = 0; index < meme.length; index += 1) {
    const element = meme[index];
    element.addEventListener('click', onClickChangeMemeImageEvent);
  }
}

window.onload = () => {
  loadListeners();
};
