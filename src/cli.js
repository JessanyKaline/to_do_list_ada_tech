/* O arquivo que lida com a interface de linha de comando. 
Ele contém a lógica para exibir menus, obter entradas 
do usuário e chamar as funções apropriadas em toDo.js */

import readline from 'readline-sync'

export const startApp = () => {
  console.log('Bem-vindo à aplicação ToDo List!\n');

  while (true) {
  
      const choice = readline.question('Escolha uma opção: ');

      switch (choice) {
          case '1':
              //addTask();
              break;
          case '2':
              //updateTask();
              break;
          case '3':
              //deleteTask();
              break;
          case '4':
             // getTasks();
              break;
          case '5':
              //getOneTask();
              break;
          case '6':
              console.log('Saindo da aplicação.');
              process.exit(0);
          default:
              console.log('Opção inválida. Tente novamente.');
      }
  }
}