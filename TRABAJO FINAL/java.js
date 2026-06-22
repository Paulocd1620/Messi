// VALIDACIÓN DEL FORMULARIO

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    
    var respuesta = document.getElementById('respuesta');

    if (nombre == '' || email == '' || mensaje == '') {
        respuesta.textContent = 'Por favor completa todos los campos';
        respuesta.className = 'error';
        return;
    }
    
    if (!email.includes('@')) {
        respuesta.textContent = 'Por favor introduce un email válido';
        respuesta.className = 'error';
        return;
    }
    
    respuesta.textContent = 'Mensaje enviado correctamente. Gracias por tu comentario';
    respuesta.className = 'exito';
    
    document.getElementById('miFormulario').reset();
});