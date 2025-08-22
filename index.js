
const list = document.getElementById('btn-list');
const active= document.getElementById('btn-active');

list.addEventListener('click', ()=>{
const grid = document.getElementById('event-grid');
grid.style.gridTemplateColumns="1fr";

});

active.addEventListener('click',()=>{
const grid = document.getElementById('event-grid');
grid.style.gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
})


