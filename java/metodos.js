//. un arreglo con el metodo map
var num=[1,3,6,21,9,18];
var duplicate=num.map(elem=>elem+10);
console.log(duplicate);

//filtrando un arreglo con el metodo filter

var multiplo3=num.filter(elem=>elem%3===0);
console.log(multiplo3);

// aplanando un arreglo
var numArray = [1, 2, [3, 4, [7, 8]], [ 6 ]];
function flattenArray(arr) {
  var valorInicial = [];
  return arr.reduce(function (total, value) {
    return total.concat(Array.isArray(value) ? flattenArray(value) : value)
  }, valorInicial);
}
var arregloAplanado = flattenArray(numArray);
console.log(arregloAplanado);

//reduce
var strings=['hola','Hola','Hola','nuevo','nuevo','hola','nieve'];


function countWords(array){
  var result = array.reduce((words,elem)=>{
    if(!words[elem])
      words[elem] = 1;
    else 
      words[elem]++;
    return words;  
  },{})
  return result;
}
console.log(countWords(strings));