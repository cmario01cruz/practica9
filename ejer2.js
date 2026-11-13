

function enviarNotificacionEmail(destinatario, mensaje) {
    console.log(`[EMAIL A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}


function enviarNotificacionSMS(destinatario, mensaje) {
    console.log(`[SMS A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}


function procesarAlerta(usuario, tipoAlerta, callbackElegido) {

    let mensaje;

    if (tipoAlerta === "seguridad") {
        mensaje = "Alerta de seguridad: Se ha detectado un acceso a tu cuenta.";
    } 
    else if (tipoAlerta === "bienvenida") {
        mensaje = "Bienvenido al sistema. Tu cuenta ha sido registrada correctamente.";
    } 
    else {
        mensaje = "Tienes una nueva notificación del sistema.";
    }

    // Ejecutar el callback recibido
    callbackElegido(usuario, mensaje);
}


console.log("--- SISTEMA DE NOTIFICACIONES ---");


procesarAlerta(
    "carlos@gmail.com",
    "seguridad",
    enviarNotificacionEmail
);


procesarAlerta(
    "78945612",
    "bienvenida",
    enviarNotificacionSMS
);
