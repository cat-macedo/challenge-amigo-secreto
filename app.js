let listaAmigos = [];
let campo = document.getElementById('amigo');

function adicionarAmigo() {
    if(campo.value == '') {
        alert('Por favor, insira um nome.');
    } else {
        let nome = campo.value;
        listaAmigos.push(nome); 
        limparCampo();
        console.log(listaAmigos);
    }
}

function sortearAmigo() {

}

function limparCampo() {
    campo.value = '';
}