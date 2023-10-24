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

function textoDoMenu() {
    let margem = 7, result;
    result = "-".repeat(margem) + " MENU PRINCIPAL " + "-".repeat(margem) + "\n";
    result += ",____________________________,\n";
    result += "|[1] - Adicionar tarefa      |\n";
    result += "|[2] - Atualizar tarefa      |\n";
    result += "|[3] - Deletar tarefa        |\n";
    result += "|[4] - Obter todas as tarefas|\n";
    result += "|[5] - Obter uma tarefa      |\n";
    result += "|[0] - Sair                  |\n";
    result += "|----------------------------|";
    return result;
}

function menu(listaDeTarefas) {
    while (true) {
        console.log("\n" + textoDoMenu());
        const choice = readline.question('Escolha um numero acima: ');
        switch (choice) {
            case '1':
                addTask(listaDeTarefas);
                break;
            case '2':
                //updateTask();
                break;
            case '3':
                //deleteTask();
                break;
            case '4':
                getTasks(listaDeTarefas);
                break;
            case '5':
                //getOneTask();
                break;
            case '0':
                console.log('Saindo da aplicação.');
                process.exit(0);
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    }
}

function idTaskExist(listaDeTarefas, stringId) {
    for (const task of listaDeTarefas) {
        if (task.hasOwnProperty('id') && task["id"] == stringId) return true;
    }
    return false;
}

function novaId(listaDeTarefas) {
    let id;
    do { id = ++serial; } while (idTaskExist(listaDeTarefas, id));
    return id;
}

function addTask(listaDeTarefas) {
    const newTask = novaTarefa(listaDeTarefas);
    listaDeTarefas.push(newTask);
    console.log("Tarefa adicionada com sucesso.");
}

function novaTarefa(listaDeTarefas) {
    let id = novaId(listaDeTarefas), description, title;
    console.log("Informe o título da tarefa e dê Enter");
    title = readline.question(": ");
    console.log("Agora informe a descrição completa da tarefa");
    description = readline.question(": ");
    return {"id": id, "titulo": title, "description": description }
}
