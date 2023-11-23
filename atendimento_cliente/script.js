
const filaAtendimento = [];

function adicionarCliente() {
    const nomeCliente = document.getElementById("cliente").value;

    if (nomeCliente.trim() !== "") {
        filaAtendimento.push(nomeCliente);
        exibirFila();
        limparCampo();
    }
}

function atenderCliente() {
    if (filaAtendimento.length > 0) {
        filaAtendimento.shift(); 
        exibirFila();
    }
}

function exibirFila() {
    const filaElemento = document.getElementById("fila");
    filaElemento.innerHTML = "";

    filaAtendimento.forEach((cliente, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${cliente}`;
        filaElemento.appendChild(listItem);
    });
}

function limparCampo() {
    document.getElementById("cliente").value = "";
}


exibirFila();
