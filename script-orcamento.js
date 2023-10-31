function salvarDados() {
    const numeroParticipantesInput = document.getElementById('numeroParticipantes');
    const numeroParticipantesValue = parseInt(numeroParticipantesInput.value);
  
    if (!isNaN(numeroParticipantesValue)) {
      const numeroParticipantes = (parseInt(localStorage.getItem('numeroParticipantes')) || 0) + numeroParticipantesValue;
      localStorage.setItem('numeroParticipantes', numeroParticipantes);
  
      document.getElementById('numeroParticipantesDisplay').textContent = 'Número total de participantes: ' + numeroParticipantes;
  
      numeroParticipantesInput.value = '';
    } else {
      alert('Por favor, insira um número válido.');
    }
  }
  
  function adicionarParticipante() {
    const numeroParticipantesInput = document.getElementById('numeroParticipantes');
    const numeroParticipantesValue = parseInt(numeroParticipantesInput.value);
  
    if (!isNaN(numeroParticipantesValue)) {
      const numeroParticipantes = parseInt(localStorage.getItem('numeroParticipantes')) || 0;
      const novoNumeroParticipantes = numeroParticipantes + numeroParticipantesValue;
  
      localStorage.setItem('numeroParticipantes', novoNumeroParticipantes);
  
      document.getElementById('numeroParticipantesDisplay').textContent = novoNumeroParticipantes;
  
      numeroParticipantesInput.value = '';
    } else {
      alert('Por favor, insira um número válido.');
    }
  }
  
  window.onload = function() {
    const numeroParticipantes = localStorage.getItem('numeroParticipantes');
    if (numeroParticipantes !== null) {
      document.getElementById('numeroParticipantesDisplay').textContent = numeroParticipantes;
    }
  }
   