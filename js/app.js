let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    //validando se o campo do nome está vazio
    if (amigo.value == '') {
        alert('Digite um nome válido')
        return;
    }
    
     // Converte o nome digitado para minúsculas
    let nomeFormatado = amigo.value.toLowerCase();

    // Verifica se o nome já está no array, também convertendo os nomes do array para minúsculas
    if (amigos.map(a => a.toLowerCase()).includes(nomeFormatado)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    //adicionando amigo na lista
    amigos.push(amigo.value)

    if(lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    limparNome();

}

function sortear() {
<<<<<<< HEAD
    if (amigos.length < 8) {
=======
    if (amigos.length < 4) {
>>>>>>> 45f9485e66825723bef5378e6ca29dc34aba0e8e
        alert('Adicione pelo menos 4 amigos')
        return;
    } 

    embaralha(amigos)
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++){

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function embaralha(lista) {
    for (let indice = lista.lenght; indice; indice --){
        const indiceAleatorio = Math.floor (Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1 ], lista[indiceAleatorio]] = 
            [lista[listaAltatoria], lista[indice-1]];
    }
}

function limparNome(params) {
    amigo.value = ''
}

function enter() {
    // Aciona a função adicionar() ao pressionar Enter no input
    document.getElementById('nome-amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    event.preventDefault(); // Impede o envio automático do formulário
    adicionar(); // Chama a função existente
    limparNome()
}
});    
}

enter();


