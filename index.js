//Constants
const textEditor = document.querySelector('.text-editor');
const preview = document.querySelector('.preview');
const converter = new showdown.Converter();


textEditor.addEventListener('keyup', event => {
    const { value } = event.target;
    const html = converter.makeHtml(value);
    textEditor.innerHTML = html;
});