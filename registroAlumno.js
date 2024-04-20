import Persona from './persona.js';

export function guardarEnLocalStorage(persona) {
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnos.push(persona);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

export function mostrarAlumnosRegistrados() {
    const alumnos = JSON.parse(localStorage.getItem('alumnos'));
    const alumnosRegistradosDiv = document.getElementById('alumnosRegistrados');

    if (alumnos && alumnos.length > 0) {
        alumnosRegistradosDiv.innerHTML = '<h3>Alumnos Registrados:</h3>';
        const listaAlumnos = document.createElement('ul');
        alumnos.forEach((alumno, index) => {
            const alumnoItem = document.createElement('li');
            alumnoItem.textContent = `Alumno ${index + 1}: Matrícula: ${alumno.matricula}, Nombre: ${alumno.nombre}, Apellido Paterno: ${alumno.apPaterno}, Apellido Materno: ${alumno.apMaterno}, Teléfono: ${alumno.telefono}, Email: ${alumno.email}, Semestre: ${alumno.semestre}, Carrera: ${alumno.carrera}, Nombre de la Empresa: ${alumno.nombreEmpresa}, Plan de Trabajo: ${alumno.planTrabajo}, Nombre del Proyecto: ${alumno.nombreProyecto}`;
            listaAlumnos.appendChild(alumnoItem);
        });
        alumnosRegistradosDiv.appendChild(listaAlumnos);
    } else {
        alumnosRegistradosDiv.innerHTML = '<p>No hay alumnos registrados.</p>';
    }
}
