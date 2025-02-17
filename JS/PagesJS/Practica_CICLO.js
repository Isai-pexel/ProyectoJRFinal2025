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
personas.forEach(element => {
    console.log(element)

});

clientes.forEach(element => {

    if (element.activo === true) {
        console.log(element.nombre, element.activo)

    }
});

//Cantidad de elementos de un array

console.log(personas.length);

//Filtrar por una propiedad
let buscarNombre = personas.find(x => x.nombre === "Ana");
console.log(buscarNombre)

let buscarActivo = personas.find(x => x.activo === true);
console.log(buscarActivo)


function Filtrar() {
    let valor = document.getElementById('sensitivo').value;
    console.log(valor)
}

//caso 1
function buscarDesdeInput() {
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

//Crear la funcion del onclick
// input id value //No tiene
//Cualquier etiqueta mostrar el resultado inner

//caso2
function primeraPersonaActiva() {
    let resultado = document.getElementById('resultadoActivo');//inner

    let busqueda = personas.find(x => x.activo === true);
    //Aqui indicamos si el resultado es verdadero o falso

    if (busqueda) {
        resultado.innerHTML = `Primera persona encontrada ${busqueda.nombre}`;
    } else {
        resultado.innerHTML = `No se a encontrado`;

    }
}

//CASO 3

function primeraMayorDeEdad(){
    let resultado = document.getElementById('resultadoMayor');

    let busqueda = personas.find(x => x.edad >= 18);

    if (busqueda) {
        resultado.innerHTML = `Primera persona mayor de edad es ${busqueda.nombre}`;
    } else {
        resultado.innerHTML = `No se a encontrado`;

    }

}

//caso 4

function mostrarTodasLasPersonas(){
    let resultado = document.getElementById('listaPersonas');

    personas.forEach(element => {
        if (element.nombre) {
            resultado.innerHTML += 
            `<li>nombre : ${element.nombre}</li>`;
        }
    });
}

//Caso 5

function mayoresDeEdad(){
    let resultado = document.getElementById('listaMayores');
    personas.forEach(element => {
        if (element.edad >= 18) {
            resultado.innerHTML += 
            `<li>nombre : ${element.nombre}</li>`;
        }
    });

}

//Crear la funcion del onclick
// input id value
//Cualquier etiqueta mostrar el resultado inner

//caso 6
function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        if (element.activo === true) {
            resultado.innerHTML += 
            `<li>nombre : ${element.nombre}</li>`;
        }
    });
}

//Entregable 2 proyecto 

//3-4-5
//Entregable 3 proyecto
