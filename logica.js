/*Variables */

let guardaFecha;
let diaSemana;
let respuesta;

//----------Funcion para manipular el objeto fecha y volverlo un string conveniente

function recuperarFecha(fecha){
    let fechaStr = fecha.mes + " "+ fecha.dia + ", " + fecha.anio;
    return fechaStr;
}


//-----------Recuperando la informacion del formulario por el id
const refForm = document.forms["principal"];

const fechaUsuario = refForm.addEventListener('submit', (event) =>{
    event.preventDefault(); //omita las acciones por default
    // Crear el objeto con los datos del formulario
    fechaObj = {
        dia: refForm.elements["inputDia"].value ,
        mes: refForm.elements["inputMes"].value ,
        anio: refForm.elements["inputAnio"].value 
    }
    let fechaStr = recuperarFecha(fechaObj);
    guardaFecha = new Date(`${fechaStr}`);
    diaSemana = guardaFecha.getDay(); //Recuperando el día de la semana getDay devuelve un tipo number donde 0 es domingo
    respuesta = obtenerDia(diaSemana);//Dependiendo del numero de la semana se imprime en consola la respuesta
});

//Funcion para devolver el día de la semana con el texto correspondiente
function obtenerDia(diaSemana){
    let mensaje;
    switch(diaSemana){
        case 0: 
        mensaje = "Domingo, dia no laborable";
            break;
        case 1: 
        mensaje = "Lunes, dia laborable";
            break;
        case 2: 
        mensaje ="Martes, dia laborable";
            break;
        case 3: 
        mensaje = "Miercoles, dia laborable";
            break;
        case 4: 
        mensaje = "Jueves, dia laborable";
            break;
        case 5: 
        mensaje = "Viernes, dia laborable";
            break;
        case 6: 
        mensaje = "Sabado, dia no laborable";
            break;
        default:
            mensaje = "No es una fecha valida";
    }
    document.getElementById("respuestaDia").value = mensaje;
}
