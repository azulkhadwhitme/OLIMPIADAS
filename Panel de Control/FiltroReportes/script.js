document.getElementById('agregarInformeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se envíe el formulario y se recargue la página

    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const diagnostico = document.getElementById('diagnostico').value;

    // Crea un nuevo informe médico
    const nuevoInforme = { nombre, edad, diagnostico };

    // Agrega el nuevo informe al arreglo informesMedicos (esto simula una base de datos)
    informesMedicos.push(nuevoInforme);

    // Redirecciona de nuevo a la página principal
    window.location.href = '/Panel de Control/Reportes/Index.html';
});
