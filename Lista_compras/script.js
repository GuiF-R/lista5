
const listaDeCompras = [];

function adicionarItem() {
    const newItem = document.getElementById("item").value;

    if (newItem.trim() !== "") {
        listaDeCompras.push(newItem);
        exibirLista();
        limparCampo();
    }
}

function pesquisarItem() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredList = listaDeCompras.filter(item => item.toLowerCase().includes(searchTerm));

    exibirLista(filteredList);
}

function removerItem(index) {
    listaDeCompras.splice(index, 1);
    exibirLista();
}

function exibirLista(items = listaDeCompras) {
    const shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = "";

    items.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${item} <button onclick="removerItem(${index})">Remover</button>`;
        shoppingList.appendChild(listItem);
    });
}

function limparCampo() {
    document.getElementById("item").value = "";
}


exibirLista();
