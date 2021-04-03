var arr=[0,5,7,6,6,6,1,2,3,4]

function order (array, reverse){
    var n=array.sort();
    if(reverse===true){
        var m=n.reverse();
        return m;
    }
    else{
        return n;
    }
    
 }
 console.log(order(arr));