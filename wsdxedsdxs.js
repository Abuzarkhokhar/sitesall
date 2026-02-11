const menu = document.getElementById('humburge');
const list = document.getElementById('list');

menu.addEventListener("click", ()=>{
    list.classList.toggle('navlist-active');
});