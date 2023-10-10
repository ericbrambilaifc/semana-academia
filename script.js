function formatarCPF() {
    var cpf = document.getElementById("cpf").value;
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    document.getElementById("cpf").value = cpf;
}

function validarEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validar() {
    var nome = document.getElementById("nome").value;
    var matricula = document.getElementById("matricula").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var turma = document.getElementById("turma").value;

    if (nome === "" || matricula === "" || cpf === "" || email === "" || turma === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (!validarEmail(email)) {
        alert("O endereço de e-mail não é válido.");
    } else {

        document.getElementById("idForm").submit();
    }
}

