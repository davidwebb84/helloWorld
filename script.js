document.getElementById('pacienteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const motivo = document.getElementById('motivo').value;

    console.log('Datos del paciente:', { nombre, edad, motivo });
    alert('Datos enviados correctamente');
});
