// Função para obter parâmetros da URL
function getParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões "Selecionar"
    const botoes = document.querySelectorAll('.btn.btn-primary');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
          
            const produtoDiv = botao.closest('.produto');
            
            
            

            if (produtoDiv) {
                const nomeProduto = produtoDiv.querySelector('#frase')?.innerText.trim();
                const detalhesProduto = produtoDiv.querySelector('#detalhes')?.innerText.trim();
                const valorProduto = produtoDiv.querySelector('#preco')?.innerText.trim();


                const nome = encodeURIComponent(nomeProduto || '');
                const detalhes = encodeURIComponent(detalhesProduto || '');
                const preco = encodeURIComponent(valorProduto || '');

                window.open(`vendas.html?nome=${nome}&detalhes=${detalhes}&preco=${preco}`, '_blank');
                
                // 
            }
        });
    });

    const container = document.getElementById('produto-selecionado');
    if (container) {
        const nome = decodeURIComponent(getParametro('nome') || '');
        const detalhes = decodeURIComponent(getParametro('detalhes') || '');
        const preco = decodeURIComponent(getParametro('preco') || '');

        if (nome,detalhes,preco) {
            container.innerHTML = `
                <h2>${nome}</h2>
                <br>
                <p1>${detalhes}</p1>
                <br><br>
                <p1>${preco}</p1>
            `;
        } else {
            container.innerHTML = `<p>Nenhum produto foi selecionado.</p>`;
        }
    }
});
