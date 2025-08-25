
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.cursor = 'pointer'; // Mostra que é clicável

        card.addEventListener('click', () => {
            const produtoDiv = card.querySelector('.produto');

            if (produtoDiv) {
                const nomeProduto = produtoDiv.querySelector('#frase')?.innerText.trim();
                const detalhesProduto = produtoDiv.querySelector('#detalhes')?.innerText.trim();
                const valorProduto = produtoDiv.querySelector('#preco')?.innerText.trim();

                const nome = encodeURIComponent(nomeProduto || '');
                const detalhes = encodeURIComponent(detalhesProduto || '');
                const preco = encodeURIComponent(valorProduto || '');

                // Abre a página com os parâmetros
                window.open(`vendas.html?nome=${nome}&detalhes=${detalhes}&preco=${preco}`, '_blank');
            }
        });
    });

    // Exibe os dados na página vendas.html
    const getParametro = nome => new URLSearchParams(window.location.search).get(nome);
    const container = document.getElementById('produto-selecionado');
    if (container) {
        const nome = decodeURIComponent(getParametro('nome') || '');
        const detalhes = decodeURIComponent(getParametro('detalhes') || '');
        const preco = decodeURIComponent(getParametro('preco') || '');

        if (nome && detalhes && preco) {
            container.innerHTML = `
                <h2>${nome}</h2>
                <p>${detalhes}</p>
                <p>${preco}</p>
            `;
        } else {
            container.innerHTML = `<p>Nenhum produto foi selecionado.</p>`;
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('.btn-whatsapp');
    if (botao) {
        botao.addEventListener('click', () => {
            const numero = '5531993798263'; 
            const nomeProduto = document.getElementById('produto-selecionado')?.innerText.trim() || 'Produto';
            const mensagem = encodeURIComponent(`Olá! Tenho interesse no produto: ${nomeProduto}`);
            
            window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
        });
    }
});

