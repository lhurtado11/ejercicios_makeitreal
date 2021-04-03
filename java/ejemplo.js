
function isAlive( playerName, points)
{
  if((playerName =="ikk" && points > 30)||(playerName =="gut" && points > 10)){return  console.log(true)}
  else{ return console.log(false)}
}
   console.log(isAlive("ikk",50));

function fizzBuzz(number)
{
  if(number%3===0 && number%5===0){return "fizzbuzz"}
  else if(number%3===0){return "fizz"}
  else if(number%5===0){return "buzz"}
  else{return number}
}
  console.log(fizzBuzz(15));

function adjustText (string, num)
{
  if(string.length>num){return string.substring(0,num)}
  else{return string.padEnd(num,'0')}
}
console.log(adjustText('hola mundo',20));

function factorial (n)
{
  if(n===0 || n===1){return 1}
  else{
      var total =1;
      for(i=1;i<=n;i++)
      {total=total*i;}
      return total;
      }
}
    console.log(factorial(0));
function sumame(array)
{ 
    var n=0;
    for(i=0;i<array.length;i++)
    {n=n+array[i]}
    return n
}
console.log(sumame([1,2,30,5,4]));
   
function promediame(numbers)
{
  if(numbers.length === 0){ return 0}
    else{var j=0;
        for(i=0;i<numbers.length;i++)
        {
        j=j+numbers[i]
        } return j/numbers.length
        }
}
console.log(promediame([7]));

var duplicate = function(i){return i*2 }
function transform(arreglo, funcion)
{
  var a=[];
  for(i=0;i<arreglo.length;i++)
  {
  a.push(funcion(arreglo[i])) 
  }return a;
}
transform([1,2,3],duplicate)

var even = function(i){return i % 2 === 0}
function filter (array, func)
{
  var n=[];
  for(i=0;i<array.length;i++)
    {if(func(array[i])===true){n.push(array[i]);}}
    return n;
}

  console.log(filter([1,2,3,4,5,6],even))
