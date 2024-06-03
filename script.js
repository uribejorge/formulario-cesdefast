function login(){
    let username = document.getElementById("username").value; //método getElementById para obtener el valor de los elementos de entrada. Value para el valor actual de estos campos.
    let password = document.getElementById("password").value;

    //Verificar credenciales de login
    if(username === "Aleja" && password === "1234"){
        console.log("Inicio de sesión exitoso como " + username);
        window.location.href = "formulario.html"; //Redirigir a la página formulario
    } 
    else{
        alert("Usuario o contraseña incorrectos");
    }
};

//Agregar evento de escucha para el formulario de inicio de sesión
document.getElementById("login-Form").addEventListener("submit", function(event){
    event.preventDefault(); //Evitar el envío del formulario
    login() //Llamar función de inicio de sesión
});

//Función para botón enviar del formulario de reserva
function enviar(){
    let programa = document.getElementById("programa").value;
    let fecha = document.getElementById("fecha-reserva").value;
    let horaInicio = document.getElementById("hora-inicio").value;
    let horaSalida = document.getElementById("hora-salida").value;
    let correoElectronico = document.getElementById("email").value;

    console.log("Reserva generada: ");
    console.log("Programa: " + programa);
    console.log("Fecha Reservada: " + fecha);
    console.log("Hora Inicio: " + horaInicio);
    console.log("Hora Salida: " + horaSalida);
    console.log("Email: " + correoElectronico);
};