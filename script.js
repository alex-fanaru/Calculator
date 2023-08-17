var display = document.getElementById('screen');


function wipe() {
    display.value = '';
}

function show(element){
    display.value +=element
}

function calculate() {
    display.value = eval(display.value)
}