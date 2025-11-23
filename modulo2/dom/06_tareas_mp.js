const boton = document.getElementById('agregar');

boton.addEventListener('click', () => {
    const texto = document.getElementById('producto').value;
    if (texto.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = texto;
        document.getElementById('listaProductos').appendChild(li);
        document.getElementById('producto').value = '';
    }
});
