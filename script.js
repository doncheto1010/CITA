window.addEventListener('load', () => {
    alert('¡Bienvenido al Centro de Innovación y Tecnologías Aplicadas (CITA)!');
});

document.addEventListener('DOMContentLoaded', () => {
    const selectServicio = document.getElementById('servicio');

    if (selectServicio) {
        selectServicio.addEventListener('change', (e) => {
            const valor = e.target.value;
            const textoSeleccionado = e.target.options[e.target.selectedIndex].text;

            if (valor !== '') {
                console.log(`Servicio seleccionado: ${textoSeleccionado}`);
                alert(`Has seleccionado el servicio: "${textoSeleccionado}"`);
            }
        });
    }

    const botones = document.querySelectorAll('button');

    botones.forEach((boton) => {
        boton.addEventListener('mouseover', () => {
            boton.style.opacity = '0.85';
            boton.style.transform = 'scale(1.02)';
            boton.style.transition = 'all 0.2s ease';
            console.log(`Mouse sobre el botón: ${boton.textContent}`);
        });

        boton.addEventListener('mouseleave', () => {
            boton.style.opacity = '1';
            boton.style.transform = 'scale(1)';
            console.log(`Mouse fuera del botón: ${boton.textContent}`);
        });
    });

    const formulario = document.querySelector('form');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputNombre = document.getElementById('nombre');
            const inputEmail = document.getElementById('email');
            const inputTelefono = document.getElementById('Telefono');
            const selectServicio = document.getElementById('servicio');
            const inputMensaje = document.getElementById('Mensaje');

            const nombre = inputNombre ? inputNombre.value.trim() : '';
            const email = inputEmail ? inputEmail.value.trim() : '';
            const telefono = inputTelefono ? inputTelefono.value.trim() : '';
            const servicio = selectServicio ? selectServicio.value : '';
            const mensaje = inputMensaje ? inputMensaje.value.trim() : '';

            if (!nombre || !email || !telefono || !servicio || !mensaje) {
                alert('⚠️ Por favor, completa todos los campos del formulario antes de enviar.');
                return;
            }

            const solicitud = {
                nombre: nombre,
                email: email,
                telefono: telefono,
                servicio: servicio,
                mensaje: mensaje,
                fechaEnvio: new Date().toLocaleString()
            };

            let historialSolicitudes = JSON.parse(localStorage.getItem('solicitudes_cita')) || [];
            historialSolicitudes.push(solicitud);
            localStorage.setItem('solicitudes_cita', JSON.stringify(historialSolicitudes));

            alert(
                `¡Solicitud enviada con éxito! 🎉\n\n` +
                `Gracias, ${nombre}.\n` +
                `Hemos registrado tu consulta para el servicio de: ${servicio}.\n` +
                `Te contactaremos pronto al correo: ${email}.`
            );

            console.log('Solicitud guardada en localStorage:', solicitud);

            formulario.reset();
        });
    }
});