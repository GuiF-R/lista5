
const pilhaDesfazer = [];
let editor = document.getElementById("editor");

function atualizarPilha() {
 
    pilhaDesfazer.push(editor.value);
}

function desfazer() {
    if (pilhaDesfazer.length > 1) {
  
        pilhaDesfazer.pop();
    
        editor.value = pilhaDesfazer[pilhaDesfazer.length - 1];
    }
}


document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "z") {
        desfazer();
    }
});
