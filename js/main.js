function filtrarProyectos(categoria) {
    const proyectos = document.querySelectorAll('.proyecto-card');

    proyectos.forEach(proyecto => {
        if (categoria === 'todos' || proyecto.classList.contains(categoria)) {
            proyecto.style.display = 'block';
        } else {
            proyecto.style.display = 'none';
        }
    });
}

// Mostrar todos los proyectos por defecto
filtrarProyectos('todos');
