//LocalStorage
function salvarDados() {
  const totalInscritosInput = document.getElementById('numeroParticipantes');
  const totalInscritosValue = parseInt(totalInscritosInput.value);

  if (!isNaN(totalInscritosValue)) {
    const totalInscritos = (parseInt(localStorage.getItem('totalInscritos')) || 0) + totalInscritosValue;
    localStorage.setItem('totalInscritos', totalInscritos);

    document.getElementById('numeroParticipantesVizualizacao').textContent = 'Número total de inscritos: ' + totalInscritos;

    totalInscritosInput.value = '';
  } else {
    alert('Por favor, insira um número válido.');
  }
}

function adicionarParticipante() {
  const totalInscritosInput = document.getElementById('numeroParticipantes');
  const totalInscritosValue = parseInt(totalInscritosInput.value);

  if (!isNaN(totalInscritosValue)) {
    const totalInscritos = parseInt(localStorage.getItem('totalInscritos')) || 0;
    const novoTotalInscritos = totalInscritos + totalInscritosValue;

    localStorage.setItem('totalInscritos', novoTotalInscritos);

    document.getElementById('numeroParticipantesVizualizacao').textContent = novoTotalInscritos;

    totalInscritosInput.value = '';
  } else {
    alert('Por favor, insira um número válido.');
  }
}

window.onload = function() {
  const totalInscritos = localStorage.getItem('totalInscritos');
  if (totalInscritos !== null) {
    document.getElementById('numeroParticipantesVizualizacao').textContent = totalInscritos;
  }
}
//-------------------------------------- LocalStorage

// contas 
function calcularTotal(quantidade, preco, total) {
  // Pega os elementos de input com base nos IDs fornecidos
  const quantidadeInput = document.getElementById(quantidade);
  const precoInput = document.getElementById(preco);
  const totalInput = document.getElementById(total);

  // Adiciona um ouvinte de evento para atualizar o total quando a quantidade muda
  quantidadeInput.addEventListener('input', () => {
    // Pega a quantidade e o preço, ou assume 0 se não forem números válidos
    const quantidade = parseFloat(quantidadeInput.value) || 0;
    const preco = parseFloat(precoInput.value) || 0;

    // Calcula o novo total
    const total = quantidade * preco;

    // Atualiza o valor no campo de total
    totalInput.value = total;
  });

  // Adiciona um ouvinte de evento para atualizar o total quando o preço muda
  precoInput.addEventListener('input', () => {
    // Pega a quantidade e o preço, ou assume 0 se não forem números válidos
    const quantidade = parseFloat(quantidadeInput.value) || 0;
    const preco = parseFloat(precoInput.value) || 0;

    // Calcula o novo total
    const total = quantidade * preco;

    // Atualiza o valor no campo de total
    totalInput.value = total;
  });

  // O seguinte trecho não é necessário (comentado)
  // const quantidade = parseFloat(quantidadeInput.value) || 0;
  // const preco = parseFloat(precoInput.value) || 0;
  // const total = quantidade * preco;
  // totalInput.value = total;
}

// Chama a função para calcular o total para cada item da tabela
calcularTotal('quantidadeCafe', 'precoCafe', 'totalCafe');
calcularTotal('quantidadeBolo', 'precoBolo', 'totalBolo');
calcularTotal('quantidadeCachorro', 'precoCachorro', 'totalCachorro');
calcularTotal('quantidadeBanner', 'precoBanner', 'totalBanner');
calcularTotal('quantidadeCracha', 'precoCracha', 'totalCracha');
calcularTotal('quantidadeCamiseta', 'precoCamiseta', 'totalCamiseta');
//--------------------------------------

//salvar os dados

// Crie um array vazio para armazenar os dados
const dadosGuardados = [];

function adicionarParticipante() {
    const totalInscritosInput = document.getElementById('numeroParticipantes');
    const totalInscritosValue = parseInt(totalInscritosInput.value);

    if (!isNaN(totalInscritosValue)) {
        const totalInscritos = (parseInt(localStorage.getItem('totalInscritos')) || 0) + totalInscritosValue;
        localStorage.setItem('totalInscritos', totalInscritos);

        document.getElementById('numeroParticipantesVizualizacao').textContent = totalInscritos;

        totalInscritosInput.value = '';
    } else {
        alert('Por favor, insira um número válido.');
    }
}

function adicionarDados() {
    const produtos = ['Cafe', 'Bolo', 'Cachorro', 'Banner', 'Cracha', 'Camiseta'];

    produtos.forEach((produto) => {
        const quantidade = parseFloat(document.getElementById(`quantidade${produto}`).value) || 0;
        const preco = parseFloat(document.getElementById(`preco${produto}`).value) || 0;
        const total = quantidade * preco;
        
        console.log(`Quantidade de ${produto}: ${quantidade}`);
        console.log(`Preço de ${produto}: ${preco}`);
        console.log(`Total de ${produto}: ${total}`);
        
        const dados = {
            produto,
            quantidade,
            preco,
            total
        };
        
        dadosGuardados.push(dados);
        
        document.getElementById(`quantidade${produto}`).value = '';
        document.getElementById(`preco${produto}`).value = '';
        document.getElementById(`total${produto}`).value = '';
    });

    exibirDadosGuardados();
}

function exibirDadosGuardados() {
    const dadosGuardadosDisplay = document.getElementById('dadosGuardadosDisplay');
    dadosGuardadosDisplay.textContent = JSON.stringify(dadosGuardados, null, 2);
}

function calcularOrcamento() {
    function calcularTotal(quantidade, preco, total) {
  const quantidadeInput = document.getElementById(quantidade);
  const precoInput = document.getElementById(preco);
  const totalInput = document.getElementById(total);

  quantidadeInput.addEventListener('input', () => {
    const quantidade = parseFloat(quantidadeInput.value) || 0;
    const preco = parseFloat(precoInput.value) || 0;
    const novoTotal = quantidade * preco;
    totalInput.value = novoTotal;

    // Chame a função para calcular e atualizar os totais
    calcularTotais();
  });

  precoInput.addEventListener('input', () => {
    const quantidade = parseFloat(quantidadeInput.value) || 0;
    const preco = parseFloat(precoInput.value) || 0;
    const novoTotal = quantidade * preco;
    totalInput.value = novoTotal;

    // Chame a função para calcular e atualizar os totais
    calcularTotais();
  });
}

function calcularTotais() {
  const totaisProdutos = ['totalCafe', 'totalBolo', 'totalCachorro'];
  const totaisDivulgacao = ['totalBanner', 'totalCracha', 'totalCamiseta'];

  let totalProdutos = 0;
  let totalDivulgacao = 0;

  // Calcule o total para os produtos alimentícios
  totaisProdutos.forEach((total) => {
    totalProdutos += parseFloat(document.getElementById(total).value) || 0;
  });

  // Calcule o total para os custos de divulgação
  totaisDivulgacao.forEach((total) => {
    totalDivulgacao += parseFloat(document.getElementById(total).value) || 0;
  });

  const totalEvento = totalProdutos + totalDivulgacao;

  // Atualize os campos de "Total" na tabela de Custos Totais
  document.getElementById('totalAlimenticios').textContent = totalProdutos.toFixed(2);
  document.getElementById('totalDivulgacao').textContent = totalDivulgacao.toFixed(2);
  document.getElementById('custoTotalEvento').textContent = totalEvento.toFixed(2);
}

// Chame a função para calcular o total para cada item da tabela
calcularTotal('quantidadeCafe', 'precoCafe', 'totalCafe');
calcularTotal('quantidadeBolo', 'precoBolo', 'totalBolo');
calcularTotal('quantidadeCachorro', 'precoCachorro', 'totalCachorro');
calcularTotal('quantidadeBanner', 'precoBanner', 'totalBanner');
calcularTotal('quantidadeCracha', 'precoCracha', 'totalCracha');
calcularTotal('quantidadeCamiseta', 'precoCamiseta', 'totalCamiseta');

// Chame a função para calcular e atualizar os totais iniciais
calcularTotais();

}

//----------------------------------------------------

function calcularTotais() {
  const totaisProdutos = ['totalCafe', 'totalBolo', 'totalCachorro'];
  const totaisDivulgacao = ['totalBanner', 'totalCracha', 'totalCamiseta'];

  let totalProdutos = 0;
  let totalDivulgacao = 0;

  // Calcule o total para os produtos alimentícios
  totaisProdutos.forEach((total) => {
    totalProdutos += parseFloat(document.getElementById(total).value) || 0;
  });

  // Calcule o total para os custos de divulgação
  totaisDivulgacao.forEach((total) => {
    totalDivulgacao += parseFloat(document.getElementById(total).value) || 0;
  });

  const totalEvento = totalProdutos + totalDivulgacao;

  // Atualize os campos de "Total" na tabela de Custos Totais
  document.getElementById('totalAlimenticios').textContent = totalProdutos.toFixed(2);
  document.getElementById('totalDivulgacao').textContent = totalDivulgacao.toFixed(2);
  document.getElementById('custoTotalEvento').textContent = totalEvento.toFixed(2);

  // Exiba um alert com o valor final
  alert('O custo total será de: R$ ' + totalEvento.toFixed(2));
}

//--------------------------------------------


//email

function montarTexto() {
  const produtos = ['Cafe', 'Bolo', 'Cachorro', 'Banner', 'Cracha', 'Camiseta'];
  let texto = 'Resumo dos Dados:\n';

  produtos.forEach((produto) => {
      const quantidade = parseFloat(document.getElementById(`quantidade${produto}`).value) || 0;
      const preco = parseFloat(document.getElementById(`preco${produto}`).value) || 0;
      const total = quantidade * preco;

      texto += `Produto: ${produto}\n`;
      texto += `Quantidade: ${quantidade}\n`;
      texto += `Preço: ${preco}\n`;
      texto += `Total: ${total}\n\n`;
  });

  return texto;
}

function adicionarDados() {
  const textarea = document.querySelector('textarea');
  const textoMontado = montarTexto();
  textarea.textContent = textoMontado;
}

//-------------------




emailjs.init('fOjpGdA5EHtRRR878');

// Função para enviar o email
function enviarDadosPorEmail() {
  const dadosGuardadosDisplay = document.getElementById('dadosGuardadosDisplay');
  const conteudoDoTextarea = dadosGuardadosDisplay.value;

  emailjs.send('service_gw7fpdq', 'template_kux8vc8', {
    message: conteudoDoTextarea,
  })
    .then(function (response) {
      console.log('Email enviado com sucesso', response);
    })
    .catch(function (error) {
      console.error('Erro ao enviar o email', error);
    });
}


const botaoEnviarEmail = document.getElementById('enviarEmailButton');
botaoEnviarEmail.addEventListener('click', enviarDadosPorEmail);





