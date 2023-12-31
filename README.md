## Aplicação 'ToDo List'
#### O presente respositório visa expor uma possível solução uma aplicação simples e em interface de linha de comando de uma _lista de tarefas_ (`ToDo List`) que foi solicitada como requisito para finalização do módulo de _Lógica de Programação_ do curso de _back-end_ ministrado pela [ADA](https://ada.tech/) em parceria com [iFood](https://www.ifood.com.br/).

### Integrantes do grupo:
[Igor Lopes](https://www.linkedin.com/in/igorlopes-dev/)

[Leidy Olinto](www.linkedin.com/in/leidy-olinto)

[Jessany Kaline](https://www.linkedin.com/in/jessany-kaline/)

[Djair Alves](https://www.linkedin.com/in/djairdj)

[Fábio Reis](https://www.linkedin.com/in/fabioreispaz/)

### Requisitos para executar a aplicação
___
Nesse projeto será usado JavaScript, então para executar a aplicação, será necessário um ambiente de execução JavaScript, como exemplo:
- [NodeJs](https://nodejs.org/en/download)

Instale o `Node.js` na versão 18 e assegure-se que a instalação foi bem sucedida no seu sistema, utilizando o seguinte comando em seu terminal:
> `node -v`

Clone esse repositório e navegue até a pasta raiz dele e execute o seguinte comando:
> `npm ci --silent`

Para executar o projeto, execute:

>`node toDoList.js`

### Sobre o projeto:
#### Os requisitos do projeto foram originalmente definidos como:
- [x] Adicionar uma tarefa;
- [x] Editar uma tarefa salva;
- [x] Remover uma tarefa salva;
- [x] Listar todas as tarefas salvas;
- [x] Obter uma tarefa, através de um parâmetro (id);

- Observação:
    - Não há persistência das tarefas no banco de dados.
    - Para isso, pode usar um array para armazenar a lista de tarefas cadastradas.
#### Os requisitos adjacentes que encontramos foram:
- [x] Definir o tipo e a estrutura da tarefa;
- [x] Definir o tipo de estrutura;
- [x] Criar uma estrutura (coleção) com várias tarefas base para testes;
- [x] Criação de uma função principal que iniciará a interação via **CLI** (Command Line Interface) com o usuário;
- [x] Aplicar um menu na função principal com as operações principais requeridas no projeto;
- [x] Criar funções adjacentes que segregam responsabilidades dentro do código, como:
    - [x] Função `newTask(taskList)` - Função destinada a interagir com o usuário via *CLI* para obter as informações pertinentes à uma nova tarefa, ela deverá retornar uma instância de uma tarefa com id já exclusivo;
    - [x] Função `addTask(taskList)` - Função que recebe como argumento uma lista de tarefas a qual servirá para geração de id único para nova tarefa a ser criada pela função `newTask`;
    - [x] Função `updateTask(taskList)` - Essa função recebe como argumento uma coleção de tarefas (`taskList`) das quais, por meio de interação com o usuário via *CLI*, será atualizada uma das tarefas constantes na coleção;
    - [x] Função `getTasks(taskList)` - Função destinada a exibir organizadamente as informações da tarefa recebida como argumento. Essa função não possui retorno;
    - [x] Função `enumerateTask(taskList)` - Função destinada a exibir informações limitadas de todas as tarefas que foram recebidas como argumento, porém exbindo um número a frente para facilitar a posterior escolha da mesma pelo usuário. A função não possui retorno;
    - [x] Função `getOneTask(taskList)` - Função que recebe uma coleção de tarefas (`taskList`) e interage com o usuário para que ele escolha somente uma delas e assim poder visualizar todo o conteúdo dela. Essa função não precisa de retorno;
    - [x] Função `deleteTask(taskList)` - Função que recebe uma coleção de tarefas (`taskList`) e interage com o usuário para que ele escolha somente uma delas e assim poder excluir ela. Essa função não precisa de retorno;


Projeto realizado em grupo