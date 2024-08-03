// Esto agrega el valor del boton de la calculadora que toquemos
function agregar(valor){
    document.getElementById("pantalla").value += valor;
}

// Reinicia la pantalla
function borrar(){
    document.getElementById("pantalla").value = "";
}


// Esta funcion toma el valor de la pantalla y ejecuta el calculo
function calcular(){
    valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById("pantalla").value = resultado;
}
