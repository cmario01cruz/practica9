

const tieneLongitudValida = (password) => password.length >= 8;

// Función tradicional para registrar usuarios
function registrarUsuario(usuario, password) {

    if (tieneLongitudValida(password)) {
        return `Registro exitoso para ${usuario}`;
    } else {
        return "Error: La contraseña es demasiado corta";
    }
}


console.log("--- VALIDADOR DE CONTRASEÑAS ---");

console.log(registrarUsuario("Carlos", "12345"));

console.log(registrarUsuario("Maria", "Clave2026"));
