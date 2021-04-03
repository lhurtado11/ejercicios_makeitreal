var even = function(i){return i % 2 === 0}
function filter (array, func)
{
  var n=[];
  for(i=0;i<array.length;i++)
    {
    if(func(array[i])===true){n.push(array[i]);}
    }return n;
}

  console.log(filter([1,2,3,4,5,6],even))