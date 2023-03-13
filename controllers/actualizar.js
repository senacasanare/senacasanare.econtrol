const cedula = document.getElementById('Inputcedula').value
const tipo1 = document.getElementById('tipo1').value
const marca1 = document.getElementById('marca1').value
const ref1 = document.getElementById('referencia1').value
const date1 = document.getElementById('fecha1').value
const btn1 = document.getElementById('btn-opc1').onclick = function() {opcionone()};

const radioButtons = document.querySelectorAll('input[name="select1"]').value;


function opcionone(){
    console.log(cedula);
    console.log(date1);
    console.log(radioButtons);
}

