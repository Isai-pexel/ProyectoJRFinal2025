console.log(`Funcionando Archivo: Practica_IF`);

//paso 1

function verificarEdad(){
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

function verificarParImpar(){
    let numero3 = document.getElementById('numero3').value;

    let numeroConvertido = parseInt(numero3);
    if (numeroConvertido % 2 === 0) {
        alert(`El número ${numero3} es par`);
        
    } else {
        alert(`El número ${numero3} es impar`);
        
    }
    console.log(numero3)
}