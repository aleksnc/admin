//Left Block Sections

$(document).ready(function(){
  $('.LeftBlock__section li:first-child').addClass('LeftBlock__section--btn');
  $('.LeftBlock__section li:not(:first-child)').addClass('LeftBlock__section--li');

  $('.LeftBlock__section--btn').on( 'click', function(){
    $('.LeftBlock__section--btn').toggleClass('select', false);
    $('.LeftBlock__section').toggleClass('LeftBlock__section--select', false);
    var $this =$(this);
    $this.toggleClass('select');
    $this.parent().toggleClass('LeftBlock__section--select');
  });
});