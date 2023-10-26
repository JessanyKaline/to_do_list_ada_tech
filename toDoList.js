import readline from 'readline-sync'

let serial = 0;

let tasks = [];

console.log('\nBem-vindo à aplicação ToDo List!\n');

console.log("Deseja pré-carregar uma lista de tarefas?");

if (readline.question("Digite 1 para sim, ou 0 para nao: ").trim() == "1")
    tasks = baseTaskList();

menu(tasks);

function baseTaskList() {
    return [
        { "id": 1, "title": "Otimizar algoritmo", "description": "Verificar algoritmo de busca e deixar ele mais rápido" },
        { "id": 5, "title": "Preencher formulário", "description": "Formulário de vendas precisa ser preenchido" },
        { "id": 3, "title": "Marcar Daily", "description": "Buscar melhor hora das reuniões diárias" }
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
    let switchOnOff = true
    while (switchOnOff) {
        try {
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
                    switchOnOff = false
                    break
                default:
                    console.log('Opção inválida. Tente novamente.');
            }
        } catch (error) {
            console.error('Ocorreu um erro inesperado:', error.message);
        }
    }
}

function deleteTask(taskList) {
    console.log("Excluir Tarefa");
    try {
        const taskId = readline.question("Informe o ID da tarefa que deseja excluir: ");

        const taskIndex = taskList.findIndex(task => task.id == taskId);

        if (taskIndex !== -1) {
            const deletedTask = taskList.splice(taskIndex, 1)[0];
            console.log(`Tarefa com ID ${taskId} excluída com sucesso:`);
            console.log(deletedTask);
        } else {
            console.log("Tarefa não encontrada com o ID fornecido.");
        }
    } catch (error) {
        console.error('Ocorreu um erro inesperado ao excluir a tarefa:', error.message);
    }
}

/**
 * Função que verifica se um Id existe
 * @param {tarefa[]} taskList Lista de tarefas registradas
 * @param {string} stringId Id em formatdo de string que identifica a tarefa
 * @returns {boolean}
 */
function idTaskExist(taskList, stringId) {
    try {
        for (const task of taskList) {
            if (task.hasOwnProperty('id') && task["id"] == stringId) return true;
        }
        return false;
    } catch (error) {
        console.error('Ocorreu um erro inesperado ao verificar a existência da tarefa:', error.message);
        return false;
    }
}

function newId(taskList) {
    try {
        let id;
        do { id = ++serial; } while (idTaskExist(taskList, id));
        return id;
    } catch (error) {
        console.error('Ocorreu um erro inesperado ao gerar um novo ID:', error.message);
    }
}

function addTask(taskList) {
    try {
        const newTaskCreated = newTask(taskList);
        taskList.push(newTaskCreated);
        console.log("Tarefa adicionada com sucesso.");
    } catch (error) {
        console.error('Ocorreu um erro inesperado ao adicionar a tarefa:', error.message);
    }
}

function newTask(taskList) {
    try {
        let id = newId(taskList), description, title;
        console.log("Informe o título da tarefa e dê Enter");
        title = readline.question(": ");
        console.log("Agora informe a descrição completa da tarefa");
        description = readline.question(": ");
        return { "id": id, "title": title, "description": description };
    } catch (error) {
        console.error('Ocorreu um erro inesperado ao criar uma nova tarefa:', error.message);
        return null;
    }
}

function getTasks(taskList) {
    try {
        console.log("\nLista de Tarefas:")
        for (let i = 0; i < taskList.length; i++) {
            console.log(`Tarefa ${(taskList[i].id)}: ${taskList[i].title}:\n\t${taskList[i].description}`)
        }
    } catch (error) {
        console.error('Ocorreu um erro inesperado ao exibir as tarefas:', error.message);
    }
}

function updateTask(taskList) {
    console.log("Atualizar Tarefa");
    getTasks(taskList)
    try {
        const taskId = readline.question("Informe o ID da tarefa que deseja atualizar: ");

        const taskToUpdate = taskList.find(task => task.id == taskId);

        if (taskToUpdate) {
            console.log("Tarefa encontrada. Forneça as novas informações:");

            const newTitle = readline.question("Novo título (deixe em branco para manter o mesmo): ");
            console.log(newTitle);
            const newDescription = readline.question("Nova descrição (deixe em branco para manter a mesma): ");

            if (newTitle.trim() !== "") {
                taskToUpdate.title = newTitle;
            }
            if (newDescription.trim() !== "") {
                taskToUpdate.description = newDescription;
            }

            console.log("Tarefa atualizada com sucesso.");
        } else {
            console.log("Tarefa não encontrada com o ID fornecido.");
        }
    } catch (error) {
        console.error('Ocorreu um erro inesperado ao atualizar a tarefa:', error.message);
    }
}

function enumerateTask(taskList) {
    console.log("\nLista de Tarefas:")
    for (let i = 0; i < taskList.length; i++) {
        console.log(`Tarefa ${(taskList[i].id)}: ${taskList[i].title}`)
    }
}
