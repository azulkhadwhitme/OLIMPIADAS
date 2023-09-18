// Datos de ejemplo (puedes reemplazarlos con datos reales)
const informesMedicos = [
    { nombre: 'pepe', edad: 35, diagnostico: 'Hipertensión' },
    { nombre: 'inan', edad: 45, diagnostico: 'Diabetes' },
    { nombre: 'abigail', edad: 28, diagnostico: 'Cardiología' },
    { nombre: 'pablo', edad: 50, diagnostico: 'Neurología' },
    { nombre: 'moreira', edad: 32, diagnostico: 'Dermatología' },
    { nombre: 'gustavo', edad: 62, diagnostico: 'Oftalmología' },
];

function generarInforme() {
    const filtro = document.getElementById('area').value.toLowerCase(); // Convertir a minúsculas
    const tabla = document.getElementById('tabla-reportes').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    const informesFiltrados = (filtro === 'todas') ? informesMedicos : informesMedicos.filter(informe => informe.diagnostico.toLowerCase() === filtro);

    informesFiltrados.forEach(informe => {
        const fila = tabla.insertRow();
        const nombreCell = fila.insertCell(0);
        const edadCell = fila.insertCell(1);
        const diagnosticoCell = fila.insertCell(2);
        nombreCell.textContent = informe.nombre;
        edadCell.textContent = informe.edad;
        diagnosticoCell.textContent = informe.diagnostico;
    });
}

// Manejo del evento de filtrar al hacer clic en el botón "Filtrar"
document.getElementById('filtrar').addEventListener('click', generarInforme);

// Manejo del evento de generar PDF al hacer clic en el botón "Generar PDF"
document.getElementById('generarPDF').addEventListener('click', () => {
    const doc = new jsPDF();
    doc.text(10, 10, 'Informe Médico');

    const table = document.getElementById('tabla-reportes');
    const rows = table.querySelectorAll('tr');
    const headers = [];
    const data = [];

    // Obtener encabezados de la tabla
    for (const th of rows[0].querySelectorAll('th')) {
        headers.push(th.textContent);
    }

    // Obtener datos de la tabla
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const rowData = [];
        for (const td of row.querySelectorAll('td')) {
            rowData.push(td.textContent);
        }
        data.push(rowData);
    }

    doc.autoTable({
        head: [headers],
        body: data,
    });

    // Guardar el PDF con un nombre específico y forzar la descarga
    doc.save('informe_medico.pdf');
});

// Generar el informe inicial al cargar la página
generarInforme();
