var myStr = '30/08/2021';

//o \d recebe números

var myRegex = /\d{2}\/\d{2}\/\d{4}/;

console.log(myStr.match(myRegex));

