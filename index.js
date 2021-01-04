
const pressed = [];

function handleKeyUp(event){
    console.log(event.key);
    pressed.push(event.key);
    console.log(pressed);
}

function init(){
    window.addEventListener('keyup',handleKeyUp);
}

init();
