import Persona from './persona.js';
import { guardarEnLocalStorage, mostrarAlumnosRegistrados } from './registroAlumno.js';




document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const matricula = document.getElementById('matricula').value;
    const nombre = document.getElementById('nombre').value;
    const apPaterno = document.getElementById('apPaterno').value;
    const apMaterno = document.getElementById('apMaterno').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const semestre = document.getElementById('semestre').value;
    const carrera = document.getElementById('carrera').value;
    const nombreEmpresa = document.getElementById('nombreEmpresa').value;
    const planTrabajo = document.getElementById('planTrabajo').value;
    const nombreProyecto = document.getElementById('nombreProyecto').value;

    const persona = new Persona(matricula, nombre, apPaterno, apMaterno, telefono, email, semestre, carrera, nombreEmpresa, planTrabajo, nombreProyecto);

    guardarEnLocalStorage(persona);

    alert('Alumno registrado correctamente.');
    this.reset();
});

document.querySelector('button[type="button"]').addEventListener('click', mostrarAlumnosRegistrados);
