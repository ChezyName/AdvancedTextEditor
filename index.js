var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],
    [ 'link'],
    [{ 'align': [] }],
]

var options = {
    modules: {
      toolbar: {
        container: toolbarOptions,
      }
    },
    theme: 'snow'
};

var quill = new Quill('#editor', options);

function saveDocument() {

}