console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"

// Datos locales simulando la API



let datosFiltrados = []
let contenedor = document.getElementById('tbody');



//Aela Visualizar al ejecutar la pagina DOM
document.addEventListener('DOMContentLoaded', () => {
    consultarDatos() 
});

//Consultar datros del api mediante fetch(ajax)
function consultarDatos (){

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
            alert('Error')
            return null;
        });
}

function MostrarCampoTabla(){

    let html = "";

    Datos_Locales.forEach(element => {
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


//Consultar api clientes

document.addEventListener('DOMContentLoaded', () => { 
    consultarDatosConsola()
});

function consultarDatosConsola(){
    fetch(Api_Usuarios)
        
        .then(response => response.json())
        .then(result => {
            // custom error
            console.log(result)
        })
        .catch(error => {
            // common error
            return null;
        });
}