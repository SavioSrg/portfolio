document.addEventListener("DOMContentLoaded", () => {
    fetch("../conteudos/projetos.json") // Busca os dados do JSON
        .then(response => response.json()) // Converte para objeto JavaScript
        .then(data => {
            const container = document.getElementById("projetos-container");

            // Percorre todos os projetos e cria os elementos dinamicamente
            data.projetos.forEach(projeto => {
                const div = document.createElement("div");
                div.classList.add("gallery-img");

                div.innerHTML = `
                    <picture>
                        <source srcset="${projeto.imagem_desktop}" media="(min-width: 800px)">
                        <source srcset="${projeto.imagem_tablet}" media="(min-width: 500px)">
                        <source srcset="${projeto.imagem_mobile}">
                        <img src="${projeto.imagem_fallback}" alt="${projeto.titulo}">
                    </picture>
                    <p>${projeto.titulo}</p>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.botao1.link}" target="_blank">${projeto.botao1.texto}</a>
                    <a href="${projeto.botao2.link}" target="_blank">${projeto.botao2.texto}</a>
                `;

                container.appendChild(div); // Adiciona o projeto na página
            });
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
});

