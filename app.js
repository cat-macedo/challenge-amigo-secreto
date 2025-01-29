// Algumas funcionalidades extras foram implementadas.
// Elas estão indicadas no código.

/* Variáveis principais */
let arrayAmigos = [];
let tamArray = 0;
let campo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let listaSorteados = [];

/* Função que adiciona os nomes digitados à lista */
function adicionarAmigo() {
    // Se nenhum nome foi digitado, exibe um alerta
    if(campo.value == '') {
        alert('Por favor, insira um nome.');
    } else {
        let nome = campo.value;
        arrayAmigos.push(nome); 
        limparCampo();
        addLista();

        // Nova funcionalidade: 
        // O botão de sorteio só é ativado casa haja pelo menos dois nomes na lista
        validaSorteio();
    }
}

/* Função que cria um li para cada item do array de amigos */
function addLista() {
    listaAmigos.innerHTML = '';
    tamArray = arrayAmigos.length;

    for(let i=0; i<tamArray; i++){
        const li = document.createElement('li');
        li.textContent = arrayAmigos[i];
        listaAmigos.appendChild(li);
    }
}

/* Função que sorteia um nome do array */
function sortearAmigo() {
    tamArray = arrayAmigos.length;

    // Verifica se o array não está vazio
    if(tamArray != 0) {
        let numMaximo = tamArray;

        // Nova funcionalidade:
        // Se todos os nomes já foram sorteados, exibe aviso e desativa o botão de sorteio
        if (listaSorteados.length == numMaximo) {
            resultado.innerHTML = 'Todos os nomes já foram sorteados!';
            document.getElementById('sorteio').setAttribute('disabled', true);
            return; // Sai da função para evitar execuções desnecessárias
        }

        let numAleatorio = parseInt(Math.random()*numMaximo + 1);

        // Incluir o número na lista de sorteados apenas se ele ainda não foi sorteado (evitar repetição)
        if(listaSorteados.includes(numAleatorio)) {
            return sortearAmigo();
        } else {
            listaSorteados.push(numAleatorio);
        }
        
        // Exibe o resultado na cor verde
        let amigoSecreto = arrayAmigos[numAleatorio - 1];
        let mensagem = `O amigo secreto sorteado é: ${amigoSecreto}`;
        resultado.innerHTML = mensagem;

        // Nova funcionalidade: 
        // O botão de novo sorteio é ativado
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

/* Função que limpa o input para que um novo nome seja digitado */
function limparCampo() {
    campo.value = '';
}

/* Função que verifica se há pelo menos dois nomes no array */
function validaSorteio() {
    tamArray = arrayAmigos.length;

    // Se sim, habilita o botão de sorteio
    if(tamArray > 1) {
        document.getElementById('sorteio').removeAttribute('disabled');
    }
}

/* Função que possibilida novos sorteios */
function novoSorteio() {
    // Limpa o texto do resultado e reinicializa o array de nomes
    resultado.innerHTML = '';
    arrayAmigos = [];
    tamArray = 0;
    listaSorteados = [];

    // Remove os itens li da lista e desativa novamente os botões de sorteio e novo sorteio
    listaAmigos.innerHTML = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('sorteio').setAttribute('disabled', true);
}