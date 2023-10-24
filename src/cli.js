/* O arquivo que lida com a interface de linha de comando.
Ele contém a lógica para exibir menus, obter entradas
do usuário e chamar as funções apropriadas em toDo.js */

import readline from 'readline-sync'
readline.setDefaultOptions({ encoding:'utf-8' });
let serial = 0;

export const startApp = () => {
    let listaDeTarefas = [];

    console.log('\nBem-vindo à aplicação ToDo List!\n');

    console.log("Deseja pré-carregar uma lista de tarefas?");

    if (readline.question("Digite 1 para sim, ou 0 para nao: ") == "1")
    listaDeTarefas = listaDeTarefasBase();

    menu(listaDeTarefas);

    console.log("Aplicação finalizada!");
}

function listaDeTarefasBase() {
    return [
        { "id": 1, "titulo": "Otimizar algoritmo", "description": "Verificar algoritmo de busca e deixar ele mais rápido" },
        { "id": 5, "titulo": "Preencher formulário", "description": "Formulário de vendas precisa ser preenchido" },
        { "id": 3, "titulo": "Marcar Daily", "description": "Buscar melhor hora das reuniões diárias" }
    ];
}