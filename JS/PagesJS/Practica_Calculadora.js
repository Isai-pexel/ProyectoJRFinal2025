
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
    let numero1 = document.getElementById('numero1').value; //gi
    let numero2 = document.getElementById('numero2').value;

    //ls, lo, la
    //ParseInt
    let suma = parseInt(numero1) + parseInt(numero2);
    document.getElementById('resultado').innerText = `${suma}`;

}

function realizarMultiplicacion() {
    console.log("Funcionando realizarMuliplicacion")
    let numero1 = document.getElementById('numero3').value; //gi
    let numero2 = document.getElementById('numero4').value;

    //ls, lo, la
    //ParseInt
    let multi = parseInt(numero1) * parseInt(numero2);
    document.getElementById('resultado2').innerText = `${multi}`;

}
