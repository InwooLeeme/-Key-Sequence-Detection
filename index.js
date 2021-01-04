
function handleKeyUp(event){
    console.log(event.key);
}

function init(){
    window.addEventListener('keyup',handleKeyUp);
}

init();
