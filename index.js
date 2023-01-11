var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
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

const turndownService = new TurndownService()
const quill = new Quill('#editor', options);  

const editor = document.getElementsByClassName("ql-editor")[0];

const sendParent = document.getElementsByClassName("ql-toolbar");
const elementSend = document.createElement('SPAN');
elementSend.classList.add('ql-formats')

const elementSendB = document.createElement("BUTTON");
elementSendB.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
elementSend.appendChild(elementSendB);

sendParent[0].appendChild(elementSend);

function forceDownload(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

elementSendB.addEventListener('click',() => {
  console.log("Downloading Markdown File...");
  var markdown = turndownService.turndown(editor.innerHTML);
  forceDownload(Date.now().toLocaleString() + ".md",markdown);
  console.log(markdown);
});

function saveProgress(){
  console.log("Saving Progress...");
  localStorage.setItem('MarkdownEditor',editor.innerHTML);
  console.log(localStorage.getItem('MarkdownEditor'));
}

function getCookie (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}

var isCtrl = false;
document.onkeyup=function(e){
    if(e.keyCode == 17) isCtrl=false;
}

document.onkeydown=function(e){
    if(e.keyCode == 17) isCtrl=true;
    if(e.keyCode == 83 && (isCtrl == true || e.metaKey)) {
        //run code for CTRL+S -- ie, save!
        saveProgress();
        return false;
    }
}

if(localStorage.getItem('MarkdownEditor') != null && localStorage.getItem('MarkdownEditor') != ""){
  editor.innerHTML = localStorage.getItem('MarkdownEditor');
}