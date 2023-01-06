//Constants
const textEditor = document.querySelector('.text-editor');
const preview = document.querySelector('.preview');

textEditor.addEventListener('keyup', event => {
    const { value } = event.target;
    console.log(value);
});

