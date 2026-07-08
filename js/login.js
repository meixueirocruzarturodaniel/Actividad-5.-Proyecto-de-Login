function validarCorreo(correo) {
    const validar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validar.test(correo);
}

function alfanumerico(texto) {
    const validar = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/;
    return validar.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return String(numero).trim().length === maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const cumpleanios = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanios.getFullYear();
    const mes = hoy.getMonth() - cumpleanios.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanios.getDate())) {
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    const validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return validar.test(password);
}

function validarFechaLogica(fechaNacimiento) {
    const hoy = new Date();
    const fecha = new Date(fechaNacimiento);
    const edadAproximada = hoy.getFullYear() - fecha.getFullYear();
    
    if (fecha > hoy || edadAproximada > 120) {
        return false;
    }
    return true;
}

function capitalizarNombres(nombreCompleto) {
    return nombreCompleto.trim().toLowerCase().split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
}

// LÓGICA DEL SISTEMA Y DETECCIÓN DE PÁGINAS

document.addEventListener('DOMContentLoaded', () => {

    // PANTALLA: LOGIN
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('errorMessage');

            // Usa tus nuevas validaciones (Cuidado: el password de prueba debe cumplir el nuevo Regex)
            if (!validarCorreo(email) || !validarPassword(password)) {
                errorMessage.textContent = "Credenciales inválidas. Revisa el formato y la seguridad de la contraseña.";
                errorMessage.classList.remove('hidden');
                return;
            }

            errorMessage.classList.add('hidden');
            sessionStorage.setItem('usuarioActivo', email);
            window.location.href = 'index.html';
        });
    }
     // PANTALLA: REGISTRO
    const registroForm = document.getElementById('registroForm');
    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const errorMessage = document.getElementById('regErrorMessage');

            if (!validarCorreo(email) || !validarPassword(password)) {
                errorMessage.textContent = "La contraseña debe tener min. 8 letras, mayúscula, minúscula, número y símbolo.";
                errorMessage.classList.remove('hidden');
                return;
            }

            errorMessage.classList.add('hidden');
            sessionStorage.setItem('usuarioActivo', email);
            window.location.href = 'index.html';
        });
    }
     // PANTALLA: INDEX
    const userNameDisplay = document.getElementById('userNameDisplay');
    if (userNameDisplay) {
        const usuarioActivo = sessionStorage.getItem('usuarioActivo');
        if (!usuarioActivo) {
            window.location.href = 'login.html';
            return;
        } else {
            userNameDisplay.textContent = usuarioActivo;
        }

        const userButton = document.getElementById('userButton');
        const userDropdown = document.getElementById('userDropdown');
        const logoutBtn = document.getElementById('logoutBtn');

        userButton.addEventListener('click', () => {
            userDropdown.classList.toggle('hidden');
        });

        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('usuarioActivo');
            window.location.href = 'login.html';
        });

        const menuToggle = document.getElementById('menuToggle');
        const sidebar = document.getElementById('sidebar');
        
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        const btnCaptura = document.getElementById('btnCaptura');
        const seccionCaptura = document.getElementById('seccionCaptura');
        const welcomeTitle = document.getElementById('welcomeTitle');

        btnCaptura.addEventListener('click', () => {
            seccionCaptura.classList.remove('hidden');
            welcomeTitle.classList.add('hidden');
        });

        const btnInicio = document.getElementById('btnInicio');
        btnInicio.addEventListener('click', () => {
            seccionCaptura.classList.add('hidden');
            welcomeTitle.classList.remove('hidden');
        });

        // Lógica para desplegar/ocultar el submenú de Usuarios
        const btnUsuarios = document.getElementById('btnUsuarios');
        const submenuUsuarios = document.getElementById('submenuUsuarios');

        btnUsuarios.addEventListener('click', () => {
            submenuUsuarios.classList.toggle('hidden');
        });

        const formCaptura = document.getElementById('formCaptura');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalMensaje = document.getElementById('modalMensaje');
        const cerrarModal = document.getElementById('cerrarModal');

        const capNombre = document.getElementById('capNombre');
        const capCorreo = document.getElementById('capCorreo');
        const capPassword = document.getElementById('capPassword');
        const capControl = document.getElementById('capControl');
        const capFechaNacimiento = document.getElementById('capFechaNacimiento');

        capNombre.addEventListener('blur', () => {
            if (capNombre.value.length > 0 && !alfanumerico(capNombre.value)) {
                document.getElementById('errorNombre').classList.remove('hidden');
            } else {
                document.getElementById('errorNombre').classList.add('hidden');
            }
        });

        // Correo
        capCorreo.addEventListener('blur', () => {
            if (capCorreo.value.length > 0 && !validarCorreo(capCorreo.value)) {
                document.getElementById('errorCorreo').classList.remove('hidden');
            } else {
                document.getElementById('errorCorreo').classList.add('hidden');
            }
        });

        capPassword.addEventListener('blur', () => {
            if (capPassword.value.length > 0 && !validarPassword(capPassword.value)) {
                document.getElementById('errorPassword').classList.remove('hidden');
            } else {
                document.getElementById('errorPassword').classList.add('hidden');
            }
        });

        capControl.addEventListener('blur', () => {
            if (capControl.value.length > 0 && !validarLongitud(capControl.value, 6)) {
                document.getElementById('errorControl').classList.remove('hidden');
            } else {
                document.getElementById('errorControl').classList.add('hidden');
            }
        });

        capFechaNacimiento.addEventListener('change', () => {
            if (capFechaNacimiento.value && !validarFechaLogica(capFechaNacimiento.value)) {
                document.getElementById('errorFecha').classList.remove('hidden');
            } else {
                document.getElementById('errorFecha').classList.add('hidden');
            }
        });

        formCaptura.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('capNombre').value;
            const correo = document.getElementById('capCorreo').value;
            const password = document.getElementById('capPassword').value;
            const control = document.getElementById('capControl').value;
            const fechaNac = document.getElementById('capFechaNacimiento').value;

            // Validaciones usando tu librería
            if (!alfanumerico(nombre)) {
                Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Solo se permiten letras y números'})
                return;
            }
            if (!validarCorreo(correo)) {
                Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Ingresa un correo valido'})
                return;
            }
            if (!validarPassword(password)) {
                Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'La contraseña no cumple con los requisitos'})
                return;
            }
            if (!validarLongitud(control, 6)) {
                Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'El No. de control deben ser exactamente 6 números'})
                return;
            }
            if (!fechaNac || !validarFechaLogica(fechaNac)) {
                Swal.fire({
                title: 'Error',
                icon: 'error',
                text: 'Ingresa unna fecha valida'})
                return;
            }

            const nombreFormateado = capitalizarNombres(nombre);
            const edad = calcularEdad(fechaNac);

            if (esMayorDeEdad(fechaNac)) {
                modalMensaje.textContent = `El alumno ${nombreFormateado} es MAYOR de edad (${edad} años).`;
                modalMensaje.style.color = "#3ea6ff"; // Usando el azul de tu CSS
            } else {
                modalMensaje.textContent = `El alumno ${nombreFormateado} es MENOR de edad (${edad} años).`;
                modalMensaje.style.color = "#ff4e4e"; // Rojo para error o menor
            }
            
            modalOverlay.classList.remove('hidden');
        });

        cerrarModal.addEventListener('click', () => {
            modalOverlay.classList.add('hidden');
            formCaptura.reset();
        });
    }
});