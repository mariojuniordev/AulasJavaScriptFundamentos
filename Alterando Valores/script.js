//Acessar o tipo de um atributo dentro de uma tag html
document.querySelector('#myInput').getAttribute('type');

//Setar tipo 
document.querySelector('#myInput').setAttribute('type', 'number');

//Alterar classe de uma tag
document.querySelector('#myInput').classList.add('my-input');

//saber se um elemento contém uma determinada classe
document.querySelector('#myInput').classList.contains('list-item');

//Remover uma Classe
document.querySelector('#myInput').classList.remove('my-input');

//Se tiver classe: remover
///Se não tiver: inserir
//Inverter
document.querySelector('#myInput').classList.toggle('my-input');

//Alterar CSS
document.querySelector('#myInput').style.backgroundColor = 'red';



