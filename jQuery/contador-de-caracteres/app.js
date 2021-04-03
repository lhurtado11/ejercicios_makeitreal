$(document).ready(function () {
   
    $('textarea').keyup(function () {
    console.log($('textarea').val().length);
    $('.counter').html($('textarea').val().length)
        if($('textarea').val().length>80){
          $('.container').addClass('error');
        }
        else {
            $('.container').removeClass('error');
        }
       
     })
    

})

//jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
/*.error textarea {
    border-color: red;
    border-width: 5px;
  }
  
  .error .counter {
    color: red;
  }
  */