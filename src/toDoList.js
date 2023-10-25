import readline from 'readline-sync'

readline.setDefaultOptions({ encoding:'utf-8' });
let serial = 0;

export const startApp = () => {
    let tasks = [];

    console.log('\nBem-vindo à aplicação ToDo List!\n');

    console.log("Deseja pré-carregar uma lista de tarefas?");

    if (readline.question("Digite 1 para sim, ou 0 para nao: ").trim() == "1")
    tasks = baseTaskList();

    menu(tasks);

    console.log("Aplicação finalizada!");
}

export function baseTaskList() {
    return [
        { "id": 1, "titulo": "Otimizar algoritmo", "description": "Verificar algoritmo de busca e deixar ele mais rápido" },
        { "id": 5, "titulo": "Preencher formulário", "description": "Formulário de vendas precisa ser preenchido" },
        { "id": 3, "titulo": "Marcar Daily", "description": "Buscar melhor hora das reuniões diárias" }
    ];
}

function menuText() {
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

function menu(taskList) {
    while (true) {
        console.log("\n" + menuText());
        const choice = readline.question('Escolha um numero acima: ');
        switch (choice) {
            case '1':
                addTask(taskList);
                break;
            case '2':
                updateTask(taskList);
                break;
            case '3':
                deleteTask(taskList);
                break;
            case '4':
                getTasks(taskList);
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
function deleteTask(taskList) {
    console.log("Excluir Tarefa");
    const taskId = readline.question("Informe o ID da tarefa que deseja excluir: ");

    const taskIndex = taskList.findIndex(task => task.id == taskId);

    if (taskIndex !== -1) {
        const deletedTask = taskList.splice(taskIndex, 1)[0];
        console.log(`Tarefa com ID ${taskId} excluída com sucesso:`);
        console.log(deletedTask);
    } else {
        console.log("Tarefa não encontrada com o ID fornecido.");
    }
}

function idTaskExist(taskList, stringId) {
    for (const task of taskList) {
        if (task.hasOwnProperty('id') && task["id"] == stringId) return true;
    }
    return false;
}

function newId(taskList) {
    let id;
    do { id = ++serial; } while (idTaskExist(taskList, id));
    return id;
}

function addTask(taskList) {
    const newTaskCreated = newTask(taskList);
    taskList.push(newTaskCreated);
    console.log("Tarefa adicionada com sucesso.");
}

function newTask(taskList) {
    let id = newId(taskList), description, title;
    console.log("Informe o título da tarefa e dê Enter");
    title = readline.question(": ");
    console.log("Agora informe a descrição completa da tarefa");
    description = readline.question(": ");
    return {"id": id, "titulo": title, "description": description }
}


function getTasks(taskList){
    console.log(taskList)
}


function updateTask(taskList) {
    console.log("Atualizar Tarefa");
    const taskId = readline.question("Informe o ID da tarefa que deseja atualizar: ");

    const taskToUpdate = taskList.find(task => task.id == taskId);

    if (taskToUpdate) {
        console.log("Tarefa encontrada. Forneça as novas informações:");

        const newTitle = readline.question("Novo título (deixe em branco para manter o mesmo): ");
        const newDescription = readline.question("Nova descrição (deixe em branco para manter a mesma): ");

        if (newTitle.trim() !== "") {
            taskToUpdate.titulo = newTitle;
        }
        if (newDescription.trim() !== "") {
            taskToUpdate.description = newDescription;
        }

        console.log("Tarefa atualizada com sucesso.");
    } else {
        console.log("Tarefa não encontrada com o ID fornecido.");
    }
}