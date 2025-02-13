console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"
const Api_Usuarios2 = "https://rickandmortyapi.com/api/character"
// Datos locales simulando la API



let datosFiltrados = []
let datosFiltrados2 = []

let contenedor = document.getElementById('tbody');
let contenedor2 = document.getElementById('tbody2');





//Aela Visualizar al ejecutar la pagina DOM
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos() 
    consultarDatos2()
});

//Consultar datros del api mediante fetch(ajax)
function consultarDatos(){

    //fetchget
    fetch(Api_Usuarios) // 1-Se le indica el url de la api
        .then(response => response.json())//2-Conversion de datos , json
        .then(result => { //3-Resultados
            // custom error
            datosFiltrados = result
            console.log(result)
            MostrarCampoTabla()
        })
        .catch(error => { //4- catch es en caso de error
            // common error
            alert('Error',error)
            return null;
        });
}

function consultarDatos2(){

    //fetchget
    fetch(Api_Usuarios2) // 1-Se le indica el url de la api
        .then(response => response.json())//2-Conversion de datos , json
        .then(result => { //3-Resultados
            // custom error
            console.log(result.results)
            MostrarCampoTabla2()
        })
        .catch(error => { //4- catch es en caso de error
            // common error
            alert('Error',error)
            return null;
        });
}

function MostrarCampoTabla(){

    let html = "";

    datosFiltrados.forEach(element => {
        console.log(element)

        html += `
            <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
            </tr>
        `
    });

    contenedor.innerHTML = html;
}

function MostrarCampoTabla2(){

    let html = "";

    datosFiltrados2.forEach(element => {
        console.log(element)

        html += `
            <tr>
                    <td>${element.name}</td>
                    <td><img src="${element.image}" alt=""></td>
            </tr>
        `
    });

    contenedor2.innerHTML = html;
}


// //Consultar api clientes

// document.addEventListener('DOMContentLoaded', () => { 
//     consultarDatosConsola()
// });

// function consultarDatosConsola(){
//     fetch(Api_Usuarios)
        
//         .then(response => response.json())
//         .then(result => {
//             // custom error
//             console.log(result)
//         })
//         .catch(error => {
//             // common error
//             return null;
//         });
// }




//entregable https://rickandmortyapi.com/api/character 4