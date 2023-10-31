document.addEventListener('DOMContentLoaded', function () {
    // Recuperar do localStorage o número de participantes via chave "total_inscritos"
    const totalInscritos = localStorage.getItem('total_inscritos');

    // Capturar os valores inseridos pelo usuário nos campos do formulário
    const numParticipantesInput = document.querySelector('input[type="text"]');
    const produtosAlimenticios = document.querySelectorAll('.alimenticios tr:not(:first-child)');
    const divulgacaoItens = document.querySelectorAll('.divulgacao tr:not(:first-child)');

    // Adicionar evento de clique no botão "Calcular Orçamento"
    const calcularOrcamentoButton = document.querySelector('.totais button');
    calcularOrcamentoButton.addEventListener('click', function () {
        const numParticipantes = parseFloat(numParticipantesInput.value);

        if (isNaN(numParticipantes)) {
            alert('Por favor, insira um número válido de participantes.');
            return;
        }

        // Calcular o custo total dos produtos alimentícios
        let custoProdutosAlimenticios = 0;
        produtosAlimenticios.forEach((row) => {
            const quantidade = parseFloat(row.querySelector('input[id="quantidade"]').value);
            const preco = parseFloat(row.querySelector('input[id="preco"]').value);
            custoProdutosAlimenticios += quantidade * preco;
        });

        // Calcular o custo total dos itens de divulgação
        let custoDivulgacao = 0;
        divulgacaoItens.forEach((row) => {
            const quantidade = parseFloat(row.querySelector('input[type="number"]').value);
            const preco = parseFloat(row.querySelector('input[id="quantidade"]').value);
            custoDivulgacao += quantidade * preco;
        });

        // Calcular o custo total do evento
        const custoTotalEvento = custoProdutosAlimenticios + custoDivulgacao;

        // Exibir o custo total na página
        const tabelaTotais = document.querySelector('.totais table');
        const linhaTotais = tabelaTotais.querySelector('tr:last-child');
        const celulasTotais = linhaTotais.querySelectorAll('td');
        celulasTotais[1].textContent = custoProdutosAlimenticios.toFixed(2); // Custo dos produtos alimentícios
        celulasTotais[2].textContent = custoDivulgacao.toFixed(2); // Custo da divulgação
        celulasTotais[3].textContent = custoTotalEvento.toFixed(2); // Custo total do evento
    });

    // Adicionar evento de clique no botão "Salvar Dados"
    const salvarDadosButton = document.querySelector('.divulgacao button');
    salvarDadosButton.addEventListener('click', function () {
        // Aqui você pode adicionar código para salvar os dados no localStorage, se necessário.
        // Por exemplo, salvar o número de participantes.
        const numeroParticipantes = numParticipantesInput.value;
        localStorage.setItem('total_inscritos', numeroParticipantes);
        alert('Dados salvos no localStorage.');
    });
});
