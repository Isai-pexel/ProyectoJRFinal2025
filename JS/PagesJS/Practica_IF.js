console.log(`Funcionando Archivo: Practica_IF`);

//paso 1

function verificarEdad() {
    let edad = document.getElementById('edad').value;
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

    //IfElse
    if (edad >= 18) {
        alert(`No es mayor de edad en ${pais}`);

    } else {
        alert(`Es mayor de edad en ${pais}`);

    }

}

function verificarParImpar() {
    let numero3 = document.getElementById('numero3').value;

    let numeroConvertido = parseInt(numero3);
    if (numeroConvertido % 2 === 0) {
        document.getElementById('mensajeParImpar').innerText = `El número ${numero3} es par`;

    } else {
        document.getElementById('mensajeParImpar').innerText = `El número ${numero3} es impar`;

    }
    console.log(numeroConvertido)
}

function evaluarNota() {
    // Mayor a 90 excelente nota
    // Mayor a 70 aprobado
    // Mayor a 70 reprobado
    let nota = document.getElementById('nota').value;
    let numeroConvertido = parseInt(nota);

    if (numeroConvertido >= 90) {
        document.getElementById('mensajeNota').innerText = `${nota} Excelente nota`;
    } else if (numeroConvertido >= 70) {
        document.getElementById('mensajeNota').innerText = `Aprobado con ${nota} `;
    } else {
        document.getElementById('mensajeNota').innerText = `Reprobado con ${nota} `;
    }
}



function calcularDescuento() {

    let monto = document.getElementById('monto').value;
    let numeroConvertido = parseFloat(monto);

    //monto *0.9
    //parseInt
    //parseFloat, decimales
    if (numeroConvertido > 100) {
        let descuento = numeroConvertido * 0.9;
        document.getElementById('mensajeDescuento').innerText = `El monto con descuento es ${descuento}`;
    } else {
        document.getElementById('mensajeDescuento').innerText = `No tiene descuento, tienes que superar los $100`
    }
}

function verificarMayorMenor() {
    let edadSimple = document.getElementById('edadSimple').value;
    let numeroConvertido = parseInt(edadSimple);

    if (numeroConvertido >= 18) {
        document.getElementById('mensajeEdadSimple').innerText = `La persona es mayor de edad`;
    }else{
        document.getElementById('mensajeEdadSimple').innerText = `La persona es menor de edad`;
    }
}
