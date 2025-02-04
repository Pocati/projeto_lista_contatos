const form = document.getElementById('form-ativo');
const inputNome = document.getElementById('nome-contato');
const inputNumero = document.getElementById('numero-contato');
let linhas = [];
let linha = ' ';
let contatos = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(`${inputNome.value, inputNumero.value}`)

    adicionaLinha();
    atualizaTabela();
})


function adicionaLinha() {

    if (contatos.includes(inputNumero.value)) {
        alert(`A atividade ${inputNumero.value} já foi inserida.`)
    } else {
        contatos.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += '</tr>'

        linhas += linha

        inputNome.value = ''
        inputNumero.value = ''
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

/* 

1 Cancelar a ação padrão do submit com o preventdefault

2 fazer uma função que adiciona uma linha na lista

3 Fazer uma função que atualiza a tabela */