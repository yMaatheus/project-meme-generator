const inputText = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');

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

function loadListeners() {
  inputText.addEventListener('keyup', onInputTextKeyUpEvent);
  inputImage.addEventListener('change', onInputImageChangeEvent);
}

window.onload = () => {
  loadListeners();
};
