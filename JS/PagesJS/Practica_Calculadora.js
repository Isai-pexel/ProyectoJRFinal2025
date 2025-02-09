
console.log(`Funcionando Archivo: Practica_Calculadora`);

function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    //Mostrar
    //Alert, console.log, inner
    //cl
    console.log('Mostrar Nombre:', nombre);
    console.log('Mostrar Edad:', edad);
    alert(`Nombre : ${nombre} Edad: ${edad}`);
}

function realizarSuma() {
    console.log("Funcionando realizarSuma")
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    console.log(numero1)
    console.log(numero2)
}
