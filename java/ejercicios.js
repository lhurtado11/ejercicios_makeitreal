//hello world
//module.exports=
function one (input){

    return input.toUpperCase()
}

//
/*function repeat (operation,num)
{
    if(num===0) {return operation()}
    else {return repeat(operation,num--)}
}
module.exports=repeat
console.log(repeat(one('hello'),6));
*/
//.....convirtiendo codigo nativo a funcional.....

/*function doubleAll(numbers) {
    var result = []
    for (var i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * 2)
    }
    return result
  }*/
var num=[1,3,6,21,9,18];
function doubleAll (num){
    return num.map(elem=>elem*2)

}
module.exports = doubleAll

//.....filter....
var object=[
    {message:'Tempor quis esse consequat sunt ea eiusmod.'},
    {message:'Id culpa ad proident ad nulla laborum incididunt.'},
    {message:'Ullamco in ea et ad anim anim ullamco est.'},
    {message:'Est ut irure irure nisi.'},
    {message:'Est ut irure irure nisi.Est ut irure irure nisi.Est ut irure irure nisi.'}
    ]



    function getShortMessages (newArray){
        
        var n=[];
        for(var i = 0;i<newArray.length;i++){
          n.push(newArray[i].message)
        }
       return n.filter(elem => elem.length<50) }
   module.exports = getShortMessages
// solución dada por el programa del ejercicio basic:filter 
/* module.exports = function getShortMessages(messages) {
      return messages.filter(function(item) {
        return item.message.length < 50
      }).map(function(item) {
        return item.message
      })
    }
*/

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
module.exports = countWords
//solución dada basic:reduce
/* 
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
    }, {}) // second argument to reduce initialises countMap to {}
    }
module.exports = countWords 
*/
//------------
// BASIC:EVERY SOME

var listOriginal = [
  {id:1}, {id:2}, {id:3}
];
var listusers = [
  {id:2}, {id:1}
]

function checkUsersValid(goodusers){
  return function allusersvalid(submittedusers){
    return submittedusers.every(function(users){
      return goodusers.some(function(goodUser){
        return goodUser.id===users.id
      })
    })
  }
}

var result = checkUsersValid(listOriginal);
console.log(result(listusers))
module.exports=checkUsersValid

//solución del programa para el ejercicio basic:every-some
/*
module.exports = function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
          return goodUsers.some(function(goodUser) {
            return goodUser.id === submittedUser.id
          })
        })
      }
    }
*/  