let arrayAmigos = [];
let tamArray = 0;
let campo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

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
    tamArray = arrayAmigos.length;

    for(let i=0; i<tamArray; i++){
        const li = document.createElement('li');
        li.textContent = arrayAmigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    tamArray = arrayAmigos.length;
    if(tamArray != 0) {
        let numMaximo = tamArray;
        let numAleatorio = parseInt(Math.random()*numMaximo);

        let amigoSecreto = arrayAmigos[numAleatorio];
        let mensagem = `O amigo secreto sorteado é: ${amigoSecreto}`;
        resultado.innerHTML = mensagem;
    }
}

function limparCampo() {
    campo.value = '';
}
