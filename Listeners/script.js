var myFunc = function(){
  console.log('elemento clicado');
}

//Criando um Listener
//document.querySelector('#myInput').addEventListener('click', myFunc )

//removendo um Listener
//document.querySelector('#myInput').removeEventListener('click', myFunc )

//Criando listener para evento de teclado
//document.querySelector('#myInput').addEventListener('keyup', myFunc )

//retornar o valor inserido no input
//document.querySelector('#myInput').addEventListener('keyup', function(){
//  console.log(this.value);
//} )

//Disparar algum evento quando o usuário pressionar enter no input
document.querySelector('Input').addEventListener('keyup', function(){
  if(event.keyCode == 13){
    console.log(this.value);
  }
} )

