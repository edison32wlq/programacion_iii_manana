let parrafo = null;

document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Producto agregado al inventario desde JavaScript";
    document.getElementById('contenedor').appendChild(parrafo);
});

document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});

function mostrarMensaje() {
    alert("Bienvenido al sistema de gestión del inventario");
}

document.getElementById('parrafo')
    .addEventListener('dblclick', () => {
        alert("Doble clic: mostrando detalles del producto seleccionado");
});

document.getElementById('nombre')
    .addEventListener('input', (e) => {
        console.log("Registrando producto:", e.target.value);
});
