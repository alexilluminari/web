function calculatePressure() {
    const systolic = document.getElementById('systolic').value;
    const diastolic = document.getElementById('diastolic').value;
    const result = document.getElementById('result');

    // combalidacion
    if (!systolic || !diastolic) {
        result.innerHTML = "Por favor, ingrese ambos valores.";
        return;
    }

    const systolicValue = parseFloat(systolic);
    const diastolicValue = parseFloat(diastolic);

    if (systolicValue < 50 || systolicValue > 250 || diastolicValue < 30 || diastolicValue > 150) {
    result.innerHTML = "Valores ingresados son invÃ¡lidos.";
    return;
    }

    let message = "";

    if (systolicValue < 90 || diastolicValue < 60) {
        message = "presion baja";

    } else if (systolicValue <= 120 && diastolicValue <= 80) {
message = "presion exelente";

    } else if (systolicValue > 120 && systolicValue <= 129 || diastolicValue > 80 && diastolicValue <=84) {
        message = "presion normal­.";

    } else if (systolicValue > 129 && systolicValue <= 139 || diastolicValue > 84 && diastolicValue <= 89) {
        message = "hipertension elevada";

    } else if (systolicValue > 139 && systolicValue <= 159 || diastolicValue > 89 && diastolicValue <= 99) {
        message = "hipertension etapa 1";

    } else if (systolicValue > 159 && systolicValue <= 179 || diastolicValue > 99 && diastolicValue <= 109) {
        message = "hipertension etapa 2";

    } else if (systolicValue > 179 || diastolicValue >109) {
        message = "bipertension critica!";
    }

    result.innerHTML = message;
    return;
}
function resetForm() {
    document.getElementById('systolic').value = '';
    document.getElementById('diastolic').value = '';
    document.getElementById('result').innerHTML = '';
}
window.onscroll = function() {
    checkScroll();
};
function checkScroll() {
    const toTopBtn = document.getElementById("toTopBtn");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        toTopBtn.style.display = "block"; // Muestra el botÃ³n
    } else {
        toTopBtn.style.display = "none"; // Oculta el botÃ³n
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.getElementById("form-registro").addEventListener("submit", function(event) {
    // Obtener los valores de los campos
    var contrasena = document.getElementById("contrasena").value;
    var contrasena_confirm = document.getElementById("contrasena_confirm").value;

    // Validar que las contraseñas coincidan
    if (contrasena !== contrasena_confirm) {
        alert("Las contraseñas no coinciden. Por favor, inténtelo de nuevo.");
        event.preventDefault(); // Evitar que el formulario se envíe
        return false;
    }

    // Validar que no haya campos vacíos
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    
    if (!nombre || !correo || !contrasena || !contrasena_confirm) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault();
        return false;
    }

    // Si todo es correcto, permitir que el formulario se envíe
    return true;
});
