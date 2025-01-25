const menu = document.getElementById('lista-menu');

function mudouTamanho() {
        if (window.innerWidth < 643) {
            menu.style.display = 'none'
        } else {
            menu.style.display = 'flex'
        }
}

function clickMenu() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}