const btnMobile = document.querySelector('#btn-mobile');

function mobile() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('activo');
}

btnMobile.addEventListener('click', mobile)