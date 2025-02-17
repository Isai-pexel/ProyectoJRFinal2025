console.log(`Funcionando Archivo:  Practica_TareaNetflix`);
//1- Zona de Declaracion de Variables Globales 
console.log('Ejercicios Temáticos de Netflix');

//2-Zona para Llamar funciones



//3- Zona de Funciones 

//1. Saludo de Bienvenida
function BienvenidaNetflix() {
    alert("¡Bienvenido a Netflix!")
}
//2. Recomendación de Serie
function RecomendarSerie() {
    alert("Te recomendamos ver Stranger Things.");
}
function RecomendarSerie2(serie) {
    alert(serie);
}

//3. Mostrar Perfil del Usuario
function MostrarPerfil(nombre, email) {
    alert(`Perfil de Usuario: ${nombre} Email: ${email}`);
}

//4. Activar Modo Oscuro (Netflix Night Mode)
function NetflixNightMode(valor1, valor2) {
    document.body.style.backgroundColor = valor1;
    document.body.style.color = valor2;
}

//5. Activar Modo Claro (Netflix Day Mode)
function  NetflixDayMode(valor1, valor2){
    document.body.style.backgroundColor = valor1;
    document.body.style.color = valor2;
}
//6. Calcular Tiempo de Maratón
function CalcularMaraton(episodios, duracion){
    
    alert(`Tiempo total: ${episodios * duracion} minutos.`);
}
//7. Dividir Episodios en Días
function DividirEpisodios(episodios, dias){
    alert(`Episodios por día: ${episodios / dias} episodios por dia.`);
}
//8. Crear Perfil de Usuario
function CrearPerfil() {
    let nombreUsuario = document.getElementById("nombreUsuario").value
    let emailUsuario = document.getElementById("emailUsuario").value
    let edadUsuario = document.getElementById("edadUsuario").value
    console.log(nombreUsuario, emailUsuario, edadUsuario);
    alert(`Perfil creado: ${nombreUsuario}, ${emailUsuario}, ${edadUsuario}`);
}