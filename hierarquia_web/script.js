const menuTree = {
    name: "Filmes",
    children: [
        {
            name: "Terror",
            children: [
                { name: "Invocação do Mal" },
                { name: "A Freira" },
            ]
        },
        {
            name: "Ação e Aventura",
            children: [
                { name: "Uncharted" },
                { name: "Homem-Aranha 2" },
            ]
        },
    ]
};

function criarElementoMenu(node) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const nomeItem = document.createElement("span");
    nomeItem.textContent = node.name;
    menuItem.appendChild(nomeItem);

    if (node.children && node.children.length > 0) {
        const subMenu = document.createElement("div");
        subMenu.classList.add("sub-menu");

        node.children.forEach(child => {
            const subMenuItem = criarElementoMenu(child);
            subMenu.appendChild(subMenuItem);
        });

        menuItem.appendChild(subMenu);
        menuItem.classList.add("has-children");

        menuItem.addEventListener("click", (event) => {
            if (!subMenu.contains(event.target)) {
                subMenu.classList.toggle("visible");
            }
        });
    }

    return menuItem;
}

function renderizarMenu(tree, container) {
    const menuElement = criarElementoMenu(tree);
    container.appendChild(menuElement);
}

const menuContainer = document.getElementById("menu");
renderizarMenu(menuTree, menuContainer);
