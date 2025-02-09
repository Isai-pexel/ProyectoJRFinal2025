console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

console.log(personas[3])
console.log(personas[1].nombre)
//array [x]
//objeto .nombre

//bucles o ciclos
//foreach
//array quitelo y coloque su array
//element serian las posiciones 0,1,2.....
personas.forEach(element =>{
    console.log(element)

});

clientes.forEach(element => {

    if (element.activo === true ){
        console.log(element.nombre,element.activo)

    }
});

//Cantidad de elementos de un array

console.log(personas.length);

//Filtrar por una propiedad
let buscarNombre = personas.find(x => x.nombre === "Ana");
console.log(buscarNombre)

let buscarActivo = personas.find(x => x.activo === true);
console.log(buscarActivo)


function Filtrar(){
    let valor = document.getElementById('sensitivo').value;
    console.log(valor)
}


function BuscarDesdeInput(){
    let input1 = document.getElementById('buscarNombre').value.trim(); //Metio el valor pepe
    let resultado = document.getElementById('resultadoBusqueda');

    //Busca en el arreglo
    let busqueda = personas.find(x => x.nombre.toUpperCase() === input1.toUpperCase());
     
    //Aqui indicamos si el resultado es verdadero o falso
    if (busqueda) {
        resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`;
    } else {
        resultado.innerHTML = `No encontrado`;

    }
}