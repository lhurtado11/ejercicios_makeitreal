$('document').ready(function() {
    $('#append').click(function(){
     $('div.squares').append("<div></div>")
     $('div.squares div').addClass('square')
    })
  })