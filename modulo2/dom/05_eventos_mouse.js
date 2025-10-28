const caja = document.getElementById('caja');
document.getElementById('caja')
    .addEventListener('mouseover',()=>{
    caja.style.background = 'yellow';
});

caja.addEventListener('mouseout', ()=>{
    caja.style.background = 'blue';
})

caja.addEventListener('click', ()=>{
    alert('Click');
})


const areaTouch = document.getElementById('areaTouch')
areaTouch.addEventListener('touchsatart', ()=>{
    areaTouch.style.background = 'red';
})
areaTouch.addEventListener('touchend', ()=>{
    areaTouch.style.background = 'blue';
})
areaTouch.addEventListener('click', ()=>{
    areaTouch.style.background = 'yellow';
})

areaTouch.addEventListener('click', ()=>{
    alert('Click Area Touch');
})
