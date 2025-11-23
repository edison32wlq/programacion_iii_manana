const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.background = 'yellow';
    caja.textContent = "Producto Seleccionado";
});

caja.addEventListener('mouseout', () => {
    caja.style.background = 'blue';
    caja.textContent = "Producto en Stock";
});

caja.addEventListener('click', () => {
    alert('Has hecho clic en un producto del inventario');
});


const areaTouch = document.getElementById('areaTouch');

// Nota: había un error de escritura ("touchsatart") → corregido a "touchstart"
areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'red';
    areaTouch.textContent = "Registrando producto...";
});

areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'blue';
    areaTouch.textContent = "Producto Registrado";
});

areaTouch.addEventListener('click', () => {
    areaTouch.style.background = 'yellow';
    areaTouch.textContent = "Área activa";
});

areaTouch.addEventListener('click', () => {
    alert('Se ha hecho clic en el área de registro del inventario');
});
