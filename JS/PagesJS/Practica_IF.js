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