//Elements
const Buttons = document.querySelectorAll('.btn');

//Create Event Listener
Buttons.forEach(button => {
    button.addEventListener('click', () => {
        let command = button.dataset['element'];
        console.log("Pressed: " + command);
        document.execCommand(command, false, null);
    });
});