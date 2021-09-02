var myDate = new Date();

//Podemos também passar uma string com a cada que queremos, caso não seja a data de hoje

var yourDate = new Date('2020-09-21');

//Também é possível passar a data com o horário

//ATENÇÃO!!! A CONTAGEM DE MESES NESSE TIPO DE NOTAÇÃO COMEÇA DO ZERO (0 - JANEIRO)
var ourDate = new Date(2020, 9, 21);

//É possível pegar a quantidade de milinsegundos
ourDate.getMilliseconds();

//É possível pegar a quantidade de segundos
ourDate.getSeconds();

//É possível pegar a quantidade de minutos
ourDate.getMinutes();

//É possível retornar a quantidade de horas
ourDate.getHours();

//É possível retornar o dia 
ourDate.getDate();

//É possível retornar o mês 
ourDate.getMonth();

//É possível retornar o ano  (zoado)
ourDate.getYear();

//É possível retornar o ano 
ourDate.getFullYear();

//É possível SETAR o mês
//Syntax - date.setMonth(número que representa o mês desejado - lembrando que janeiro é 0)
ourDate.setMonth(8);

//É possível retornar o tempo que se passou em milisegundos desde 1 de janeiro de 1970
ourDate.getTime();
//gerado: 1600657200000

//Também podemos usar o valor gerado a partir do .getTime() passando ele como parâmetro de uma nova Data
var x = new Date(1600657200000);

//Passar uma data para o formato JSON
var y = ourDate.toJSON();
//gerado: "2020-09-21T03:00:00.000Z"

//Também é possível receber uma notação em formato JSON para criar uma nova data
var z = new Date("2020-09-21T03:00:00.000Z");

console.log(z)