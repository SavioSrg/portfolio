const menu = document.getElementById('lista-menu');

function mudouTamanho() {
    if (window.innerWidth < 676) {
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


const links = document.querySelectorAll('#lista-menu a');
// Função para recolher o menu ao clicar em um link
function linkClick() {
    if (window.innerWidth < 643) {
        // Só recolhe o menu se for em uma tela menor
        menu.style.display = 'none';
    }
}

// Adiciona o evento de clique em cada link do menu
links.forEach(link => {
    link.addEventListener('click', linkClick);
});

// Garante que o menu responda ao redimensionamento da tela
window.addEventListener('resize', mudouTamanho);

