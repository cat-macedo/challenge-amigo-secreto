let arrayAmigos = [];
let campo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    if(campo.value == '') {
        alert('Por favor, insira um nome.');
    } else {
        let nome = campo.value;
        arrayAmigos.push(nome); 
        limparCampo();
        addLista();
    }
}

function addLista() {
    listaAmigos.innerHTML = '';
    let tamLista = arrayAmigos.length;

    for(let i=0; i<tamLista; i++){
        const li = document.createElement('li');
        li.textContent = arrayAmigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {

}

function limparCampo() {
    campo.value = '';
}
