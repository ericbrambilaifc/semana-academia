function salvarDados() {
    let numeroParticipantes = parseInt(localStorage.getItem('numeroParticipantes')) || 0;
  
    const numeroParticipantesInput = document.getElementById('numeroParticipantes');
    const numeroParticipantesValue = parseInt(numeroParticipantesInput.value);
  
    if (!isNaN(numeroParticipantesValue)) {
      numeroParticipantes += numeroParticipantesValue;
      localStorage.setItem('numeroParticipantes', numeroParticipantes);
  
      const numeroParticipantesDisplay = document.getElementById('numeroParticipantesDisplay');
      numeroParticipantesDisplay.textContent = 'Número total de participantes: ' + numeroParticipantes;
  
      numeroParticipantesInput.value = '';   //limpa o campo de entrada
    } else {
      alert('Por favor, insira um número válido.');
    }
  }

  function adicionarParticipante() {
    const numeroParticipantesInput = document.getElementById('numeroParticipantes');
    const numeroParticipantesValue = parseInt(numeroParticipantesInput.value);
  
    const numeroParticipantesDisplay = document.getElementById('numeroParticipantesDisplay');
    numeroParticipantesDisplay.textContent =  + numeroParticipantesValue;
  
    numeroParticipantesInput.value = '';
  }