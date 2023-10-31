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

// Função para salvar os dados quando o botão é clicado
function dadosGuardados() {
  // Obtenha os valores dos campos
  const quantidadeCafe = parseFloat(document.getElementById('quantidadeCafe').value) || 0;
  const precoCafe = parseFloat(document.getElementById('precoCafe').value) || 0;
  const totalCafe = parseFloat(document.getElementById('totalCafe').value) || 0;

  // Crie um objeto com os dados
  const dados = {
    nomeProduto: 'Café',
    quantidade: quantidadeCafe,
    preco: precoCafe,
    total: totalCafe,
  };

  // Adicione o objeto ao array
  dadosGuardados.push(dados);

  // Limpe os campos após salvar os dados
  document.getElementById('quantidadeCafe').value = '';
  document.getElementById('precoCafe').value = '';
  document.getElementById('totalCafe').value = '';

  // Você pode exibir os dados salvos em uma área na página se desejar
  exibirDadosGuardados();
}

// Função para exibir os dados salvos em uma área na página
function exibirDadosGuardados() {
  const dadosGuardadosDisplay = document.getElementById('dadosGuardadosDisplay');
  dadosGuardadosDisplay.textContent = JSON.stringify(dadosGuardados, null, 2);
}
