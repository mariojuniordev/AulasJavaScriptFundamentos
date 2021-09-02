//Acessar elementos pelo nome da tag
document.getElementsByTagName('button');

//Acessar elementos pelo id
document.getElementById('myInput');

//Acessar elementos pelo nome da classe
document.getElementsByClassName('list-item');

//Acessar elementos através de um seletor
//Obs.: O Query Selector vai retornar apenas 1 elemento (retorna sempre o primeiro q ele encontra)
document.querySelector('button');

//Acessar elementos através do seletor (TODOS)
document.querySelectorAll('li');

//Acessar ids através do querySelectorAll()
//É necessário usar #
document.querySelectorAll('#myInput');

