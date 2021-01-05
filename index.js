
const pressed = [];
const secretKey = 'webos';      // secretKey.length = 6

function handleKeyUp(event){
    console.log(event.key);
    pressed.push(event.key);
    pressed.splice(-secretKey.length-1, pressed.length - secretKey.length);
    if(pressed.join('').includes(secretKey)){
        console.log(`You Did it!`);
        cornify_add();
    }
    console.log(pressed);
}

function init(){
    window.addEventListener('keyup',handleKeyUp);
}

init();
