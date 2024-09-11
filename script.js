document.addEventListener('click', function() {
    var intro = document.getElementById('intro');
    var content = document.getElementById('content');
    intro.style.display = 'none'; // Oculta la pantalla de introducción
    content.style.display = 'block'; // Muestra el contenido con la imagen y música

    // Reproduce la música automáticamente
    var audio = document.getElementById('audio');
    audio.play().catch(function(error) {
        console.error('Error al reproducir el audio:', error);
    });
});
