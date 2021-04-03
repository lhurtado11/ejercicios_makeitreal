$(document).ready(function () {
  let count = 0;
    $('#add').on('click', function () {
      $('.elements').append(`<li>Elemento ${count ++} </li>`)
    });
    $('.elements').on('click', 'li', function () {
      $(this).toggleClass('marked');
    })

   
   
})
/*$('li').click(function () {
  $('li').('marked');
})*/
